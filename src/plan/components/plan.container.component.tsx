import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { plans } from '../../data';
import { Detail } from '../../detail/components/detail.component';
import { Plan } from '../../exercise/components/plan.component';
import { IExercise } from '../../exercise/models/exercise';
import { IPlan } from '../models/plan';
import { List } from './list.component';

interface IState {
  currentPlan: IPlan;
  currentExercise: IExercise;
  plans: IPlan[];
  view: View;
}

enum View {
  list,
  plan,
  detail,
}

export class PlanContainer extends Component<object, IState> {
  public state = {
    currentPlan: plans[0],
    currentExercise: plans[0].exercises[0],
    plans,
    view: View.list,
  };

  public render() {
    switch (this.state.view) {
      case View.plan:
        return (
          <Plan
            exercises={this.state.plans[this.getCurrentPlanIndex()].exercises}
            handleToggleDone={this.handleToggleDone}
            updateExercise={this.updateExercise}
            showDetails={this.showDetails}
            current={this.state.currentExercise}
          />
        );
      case View.detail:
        return (
          <Detail
            exercise={this.state.currentExercise}
            updateExercise={this.updateExercise}
            handleBack={this.selectPlan}
          />
        );
      case View.list:
      default:
        return (
          <List plans={this.state.plans} handleSelectPlan={this.selectPlan} />
        );
    }
  }

  public showDetails = (exercise: IExercise) => {
    this.setState((prevState: IState) =>
      update(prevState, {
        currentExercise: { $set: exercise },
        view: { $set: View.detail },
      }),
    );
  };

  public selectPlan = (plan: IPlan = this.state.currentPlan) =>
    this.setState((prevState: IState) =>
      update(prevState, {
        currentPlan: { $set: plan },
        view: { $set: View.plan },
      }),
    );

  public updateExercise = (exercise: IExercise) => {
    const index = this.getExerciseIndex(exercise);
    this.setState(prevState => {
      const state = update(prevState, {
        plans: {
          [this.getCurrentPlanIndex()]: {
            exercises: { $splice: [[index, 1, exercise]] },
          },
        },
      });
      return state;
    });
  };

  public handleToggleDone = (exercise: IExercise) => {
    const planIndex = this.getCurrentPlanIndex();
    const exerciseIndex = this.getExerciseIndex(exercise);
    this.setState((prevState: IState) => {
      return update(prevState, {
        plans: {
          [planIndex]: {
            exercises: {
              [exerciseIndex]: {
                $toggle: ['done'],
              },
            },
          },
        },
      });
    });
  };

  private getCurrentPlanIndex() {
    return this.state.plans.findIndex(
      (plan: IPlan) => plan === this.state.currentPlan,
    );
  }

  private getExerciseIndex(exercise: IExercise = this.state.currentExercise) {
    const currentPlanIndex = this.getCurrentPlanIndex();
    return this.state.plans[currentPlanIndex].exercises.findIndex(
      (item: IExercise) => item === exercise,
    );
  }
}

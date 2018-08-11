import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { plans } from '../../data';
import { Plan } from '../../exercise/components/plan.component';
import { IExercise } from '../../exercise/models/exercise';
import { IPlan } from '../models/plan';
import { List } from './list.component';

interface IState {
  currentPlan: string;
  currentExercise: string;
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
    currentPlan: plans[0].name,
    currentExercise: plans[0].exercises[0].name,
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
          />
        );
      case View.detail:
        return <div />;
      case View.list:
      default:
        return (
          <List plans={this.state.plans} handleSelectPlan={this.selectPlan} />
        );
    }
  }

  public selectPlan = (plan: IPlan) =>
    this.setState((prevState: IState) =>
      update(prevState, {
        currentPlan: { $set: plan.name },
        view: { $set: View.plan },
      }),
    );

  public updateExercise = (exercise: IExercise) => {
    const index = this.getExerciseIndex(exercise.name);
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
    const exerciseIndex = this.getExerciseIndex(exercise.name);
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
      (plan: IPlan) => plan.name === this.state.currentPlan,
    );
  }

  private getExerciseIndex(exerciseName: string = this.state.currentExercise) {
    const currentPlanIndex = this.getCurrentPlanIndex();
    return this.state.plans[currentPlanIndex].exercises.findIndex(
      (exercise: IExercise) => exercise.name === exerciseName,
    );
  }
}

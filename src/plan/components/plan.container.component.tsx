import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { plans } from '../../data';
import { Detail } from '../../detail/components/detail.component';
import { List as ExerciseList } from '../../exercise/components/list.component';
import { IExercise } from '../../exercise/models/exercise';
import { IPlan } from '../models/plan';
import { List as PlanList } from './list.component';

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

  public componentDidMount() {
    const dataFromLocalStorage = this.getFromStorage();
    let data: IPlan[];

    if (dataFromLocalStorage) {
      data = JSON.parse(dataFromLocalStorage);
    } else {
      data = plans;
    }

    localStorage.setItem('data', JSON.stringify(data));

    this.setState((prevState: IState) =>
      update(prevState, { plans: { $set: data } }),
    );
  }

  public render() {
    switch (this.state.view) {
      case View.plan:
        return (
          <ExerciseList
            exercises={this.state.plans[this.getCurrentPlanIndex()].exercises}
            handleToggleDone={this.handleToggleDone}
            updateExercise={this.updateExercise}
            showDetails={this.showDetails}
            current={this.state.currentExercise}
            handleBack={this.goBackToList}
          />
        );
      case View.detail:
        return (
          <Detail
            exercise={
              this.state.plans[this.getCurrentPlanIndex()].exercises[
                this.getExerciseIndex()
              ]
            }
            updateExercise={this.updateExercise}
            handleBack={this.selectPlan.bind(this, undefined)}
          />
        );
      case View.list:
      default:
        return (
          <PlanList
            plans={this.state.plans}
            handleSelectPlan={this.selectPlan}
          />
        );
    }
  }

  public goBackToList = () => {
    this.setState((prevState: IState) =>
      update(prevState, { view: { $set: View.list } }),
    );
  };

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
      this.saveToStorage(state.plans);
      return state;
    });
  };

  public handleToggleDone = (exercise: IExercise) => {
    const planIndex = this.getCurrentPlanIndex();
    const exerciseIndex = this.getExerciseIndex(exercise);
    this.setState((prevState: IState) => {
      const state = update(prevState, {
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
      this.saveToStorage(state.plans);
      return state;
    });
  };

  private getCurrentPlanIndex() {
    return this.state.plans.findIndex(
      (plan: IPlan) => plan.id === this.state.currentPlan.id,
    );
  }

  private getExerciseIndex(exercise: IExercise = this.state.currentExercise) {
    const currentPlanIndex = this.getCurrentPlanIndex();
    return this.state.plans[currentPlanIndex].exercises.findIndex(
      (item: IExercise) => item.id === exercise.id,
    );
  }

  private getFromStorage() {
    return localStorage.getItem('data');
  }

  private saveToStorage(newPlans: IPlan[]) {
    localStorage.setItem('data', JSON.stringify(newPlans));
  }
}

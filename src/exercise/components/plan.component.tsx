import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { IExercise } from '../models/exercise';
import { Detail } from './detail/detail.component';
import { Exercise } from './exercise.component';

interface IProps {
  exercises: IExercise[];
  handleToggleDone: (exercise: IExercise) => void;
  updateExercise: (exercise: IExercise) => void;
}

interface IState {
  current: string | null;
  viewDetail: boolean;
}

export class Plan extends Component<IProps, IState> {
  public state = {
    current: null,
    viewDetail: false,
  };

  public componentDidMount() {
    if (this.props.exercises.length > 0) {
      this.setState((prevState: IState) => {
        return update(prevState, {
          $set: { current: this.props.exercises[0].name },
        });
      });
    }
  }

  public toggleDetail = (exercise = '') => {
    this.setState((prevState: IState) =>
      update(prevState, {
        current: { $set: exercise },
        $toggle: ['viewDetail'],
      }),
    );
  };

  public render() {
    if (this.state.viewDetail && this.state.current) {
      const exercise = this.props.exercises.find(
        item => item.name === this.state.current,
      ) as IExercise;
      return (
        <Detail
          exercise={exercise}
          updateExercise={this.props.updateExercise}
          handleBack={this.toggleDetail}
        />
      );
    } else {
      return (
        <div>
          {this.props.exercises.map((exercise: IExercise) => (
            <Exercise
              exercise={exercise}
              isActive={exercise === this.state.current}
              key={exercise.name}
              handleToggleViewDetail={this.toggleDetail}
              handleToggleDone={this.props.handleToggleDone}
            />
          ))}
        </div>
      );
    }
  }
}

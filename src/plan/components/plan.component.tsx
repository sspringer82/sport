import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { IExercise } from '../models/exercise';
import { Detail } from './detail.component';
import { Exercise } from './exercise.component';

interface IProps {
  exercises: IExercise[];
  handleToggleDone: (exercise: IExercise) => void;
}

interface IState {
  current: IExercise | null;
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
          $set: { current: this.props.exercises[0] },
        });
      });
    }
  }

  public toggleDetail = () => {
    this.setState((prevState: IState) => {
      return update(prevState, {
        $toggle: ['viewDetail'],
      });
    });
  };

  public render() {
    if (this.state.viewDetail && this.state.current) {
      return <Detail exercise={this.state.current} />;
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

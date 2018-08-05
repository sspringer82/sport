import update from 'immutability-helper';
import * as React from 'react';
import { Component } from 'react';

import { IExercise } from '../models/exercise';
import { Exercise } from './exercise.component';

interface IProps {
  exercises: IExercise[];
}

interface IState {
  current: IExercise | null;
}

export class Plan extends Component<IProps, IState> {
  public state = {
    current: null,
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

  public render() {
    return (
      <div>
        {this.props.exercises.map((exercise: IExercise) => (
          <Exercise
            exercise={exercise}
            isActive={exercise === this.state.current}
            key={exercise.name}
          />
        ))}
      </div>
    );
  }
}

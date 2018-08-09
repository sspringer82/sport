import * as React from 'react';
import './App.css';

import update from 'immutability-helper';
import { Plan } from './plan/components/plan.component';
import { IExercise } from './plan/models/exercise';

let data: IExercise[] = [
  {
    muscleGroup: 'Breast',
    name: 'Push Up',
    sets: 3,
    repeat: 20,
    image: 'push-up.png',
    done: false,
  },
  {
    muscleGroup: 'Leg',
    name: 'Squat',
    sets: 3,
    repeat: 20,
    image: 'squat.png',
    done: false,
  },
  {
    muscleGroup: 'Abdominal',
    name: 'Sit Up',
    sets: 3,
    repeat: 20,
    image: 'sit-up.png',
    done: false,
  },
];

interface IState {
  exercises: IExercise[];
}

class App extends React.Component<object, IState> {
  public state = {
    exercises: data,
  };

  public updateExercise = (exercise: IExercise) => {
    const index = this.state.exercises.findIndex(
      item => item.name === exercise.name,
    );
    this.setState(prevState => {
      const state = update(prevState, {
        exercises: { $splice: [[index, 1, exercise]] },
      });
      return state;
    });
  };

  public handleToggleDone = (exercise: IExercise) => {
    data = this.state.exercises.map((item: IExercise) => {
      if (item.name === exercise.name) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState((prevState: IState) => {
      return update(prevState, { $set: { exercises: data } });
    });
  };
  public render() {
    return (
      <Plan
        exercises={this.state.exercises}
        handleToggleDone={this.handleToggleDone}
        updateExercise={this.updateExercise}
      />
    );
  }
}

export default App;

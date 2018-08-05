import * as React from 'react';
import './App.css';

import { Exercise } from './plan/components/exercise.component';
import { IExercise } from './plan/models/exercise';

const data: IExercise[] = [
  {
    muscleGroup: 'Breast',
    name: 'Push Up',
    sets: 3,
    repeat: 20,
    image: 'push-up.svg',
  },
  {
    muscleGroup: 'Leg',
    name: 'Squat',
    sets: 3,
    repeat: 20,
    image: 'squat.svg',
  },
  {
    muscleGroup: 'Abdominal',
    name: 'Squat',
    sets: 3,
    repeat: 20,
    image: 'sit-up.svg',
  },
];

class App extends React.Component {
  public render() {
    return (
      <div>
        {data.map((exercise: IExercise) => (
          <Exercise exercise={exercise} key={exercise.name} />
        ))}
      </div>
    );
  }
}

export default App;

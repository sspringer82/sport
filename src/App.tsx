import * as React from 'react';
import './App.css';

import { Plan } from './plan/components/plan.component';
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
    return <Plan exercises={data} />;
  }
}

export default App;

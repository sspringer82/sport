import * as React from 'react';

import { IExercise } from '../models/exercise';
import { Exercise } from './exercise.component';

interface IProps {
  exercises: IExercise[];
  current: IExercise;
  handleToggleDone: (exercise: IExercise) => void;
  updateExercise: (exercise: IExercise) => void;
  showDetails: (exercise: IExercise) => void;
}

export const Plan = ({
  exercises,
  handleToggleDone,
  showDetails,
  current,
}: IProps) => (
  <div>
    {exercises.map((exercise: IExercise) => (
      <Exercise
        isActive={exercise === current}
        exercise={exercise}
        key={exercise.name}
        showDetails={showDetails}
        handleToggleDone={handleToggleDone}
      />
    ))}
  </div>
);

import * as React from 'react';

import { Back } from '../../shared/back.component';
import { IExercise } from '../models/exercise';
import { Exercise } from './exercise.component';
import { Container } from './list.style';

interface IProps {
  exercises: IExercise[];
  current: IExercise;
  handleToggleDone: (exercise: IExercise) => void;
  updateExercise: (exercise: IExercise) => void;
  showDetails: (exercise: IExercise) => void;
  handleBack: () => void;
}

export const List = ({
  exercises,
  handleToggleDone,
  showDetails,
  current,
  handleBack,
}: IProps) => (
  <Container>
    <Back handleBack={handleBack} />
    {exercises.map((exercise: IExercise) => (
      <Exercise
        isActive={exercise === current}
        exercise={exercise}
        key={exercise.name}
        showDetails={showDetails}
        handleToggleDone={handleToggleDone}
      />
    ))}
  </Container>
);

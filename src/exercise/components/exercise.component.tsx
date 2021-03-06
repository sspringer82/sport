import { Clear, Done } from '@material-ui/icons';
import * as React from 'react';
import { IExercise } from '../models/exercise';

import {
  Container,
  Control,
  Image,
  Info,
  InfoLabel,
  InfoRow,
  InfoValue,
} from './exercise.style';

interface IProps {
  exercise: IExercise;
  isActive: boolean;
  showDetails: (exercise: IExercise) => void;
  handleToggleDone: (exercise: IExercise) => void;
}

export const Exercise = ({
  exercise,
  isActive,
  showDetails,
  handleToggleDone,
}: IProps) => {
  const toggleDone = (event: React.MouseEvent<HTMLDivElement>): void => {
    handleToggleDone(exercise);
  };
  function viewDetails() {
    showDetails(exercise);
  }

  return (
    <Container
      elevation={isActive ? 2 : 1}
      className={isActive ? 'active' : ''}
    >
      <Image
        height="80"
        width="80"
        src={exercise.image}
        onClick={viewDetails}
      />
      <Info>
        <InfoRow>
          <InfoValue className="muscleGroup">{exercise.muscleGroup}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoValue className="exerciseName">{exercise.name}</InfoValue>
        </InfoRow>
        <InfoRow className="values">
          <InfoLabel>Sets:</InfoLabel>
          <InfoValue>{exercise.sets}</InfoValue>
        </InfoRow>
        <InfoRow className="values">
          <InfoLabel>Repeat:</InfoLabel>
          <InfoValue>{exercise.repeat}</InfoValue>
        </InfoRow>
        {exercise.weight ? (
          <InfoRow className="values">
            <InfoLabel>Gewicht:</InfoLabel>
            <InfoValue>{exercise.weight}</InfoValue>
          </InfoRow>
        ) : (
          ''
        )}
        {exercise.time ? (
          <InfoRow className="values">
            <InfoLabel>Zeit:</InfoLabel>
            <InfoValue>{exercise.time}</InfoValue>
          </InfoRow>
        ) : (
          ''
        )}
        {exercise.comment ? (
          <InfoRow>
            <InfoLabel>Kommentar:</InfoLabel>
            <InfoValue>{exercise.comment}</InfoValue>
          </InfoRow>
        ) : (
          ''
        )}
      </Info>
      <Control
        onClick={toggleDone}
        variant="contained"
        className={exercise.done ? 'done' : 'notDone'}
      >
        {exercise.done ? <Done /> : <Clear />}
      </Control>
    </Container>
  );
};

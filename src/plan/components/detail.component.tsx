import * as React from 'react';
import { IExercise } from '../models/exercise';
import { Info, InfoLabel, InfoRow, InfoValue } from './exercise.style';

interface IProps {
  exercise: IExercise | null;
}

export const Detail = ({ exercise }: IProps) => {
  if (exercise) {
    return (
      <div>
        <div>{exercise.muscleGroup}</div>
        <div>{exercise.name}</div>
        <img height="200" src={exercise.image} alt="" />
        <Info>
          <InfoRow>
            <InfoLabel>Anzahl Sätze:</InfoLabel>
            <InfoValue>{exercise.sets}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Wiederholungen:</InfoLabel>
            <InfoValue>{exercise.repeat}</InfoValue>
          </InfoRow>
          {exercise.weight ? (
            <InfoRow>
              <InfoLabel>Gewicht:</InfoLabel>
              <InfoValue>{exercise.weight}</InfoValue>
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
      </div>
    );
  }
  return <div>No exercise selected</div>;
};

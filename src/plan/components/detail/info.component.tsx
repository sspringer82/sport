import * as React from 'react';
import { IExercise } from '../../models/exercise';
import {
  Info as InfoContainer,
  InfoLabel,
  InfoRow,
  InfoValue,
} from './detail.style';

interface IProps {
  exercise: IExercise;
}

export const Info = ({ exercise }: IProps) => (
  <InfoContainer>
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
  </InfoContainer>
);

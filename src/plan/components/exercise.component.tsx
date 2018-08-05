import * as React from 'react';
import { IExercise } from '../models/exercise';

import {
  Container,
  Image,
  Info,
  InfoLabel,
  InfoRow,
  InfoValue,
} from './exercise.style';

interface IProps {
  exercise: IExercise;
  isActive: boolean;
}

export const Exercise = ({ exercise, isActive }: IProps) => (
  <Container className={isActive ? 'active' : ''}>
    <Image src={exercise.image} />
    <Info>
      <InfoRow>
        <InfoLabel>Muskelgruppe:</InfoLabel>
        <InfoValue>{exercise.muscleGroup}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Name:</InfoLabel>
        <InfoValue>{exercise.name}</InfoValue>
      </InfoRow>
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
  </Container>
);

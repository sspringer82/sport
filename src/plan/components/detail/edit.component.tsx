import { Button, Input } from '@material-ui/core';
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

interface IState {
  exercise: IExercise;
}

export class Edit extends React.Component<IProps, IState> {
  public state = {
    exercise: this.props.exercise,
  };

  public render() {
    return (
      <InfoContainer>
        <InfoRow>
          <InfoLabel>Anzahl Sätze:</InfoLabel>
          <InfoValue>
            <Input value={this.state.exercise.sets} />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Wiederholungen:</InfoLabel>
          <InfoValue>
            <Input value={this.state.exercise.repeat} />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Gewicht:</InfoLabel>
          <InfoValue>
            <Input value={this.state.exercise.weight} />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Kommentar:</InfoLabel>
          <InfoValue>
            <Input value={this.state.exercise.comment} />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </InfoRow>
      </InfoContainer>
    );
  }
}

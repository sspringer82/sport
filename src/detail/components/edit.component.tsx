import { Button, Input } from '@material-ui/core';
import update from 'immutability-helper';
import * as React from 'react';
import { IExercise } from '../../exercise/models/exercise';
import {
  Info as InfoContainer,
  InfoLabel,
  InfoRow,
  InfoValue,
} from './detail.style';

interface IProps {
  exercise: IExercise;
  handleSave: (exercise: IState) => void;
  handleCancel: () => void;
}

export interface IState {
  sets: number;
  repeat: number;
  weight: number;
  time: string;
  comment: string;
}

export class Edit extends React.Component<IProps, IState> {
  public state = {
    sets: this.props.exercise.sets,
    repeat: this.props.exercise.repeat,
    weight: this.props.exercise.weight ? this.props.exercise.weight : 0,
    time: this.props.exercise.time ? this.props.exercise.time : '',
    comment: this.props.exercise.comment ? this.props.exercise.comment : '',
  };

  public handleSave = () => {
    this.props.handleSave(this.state);
  };

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState: IState) =>
      update(prevState, {
        $set: { [name]: value },
      }),
    );
  };

  public render() {
    return (
      <InfoContainer>
        <InfoRow>
          <InfoLabel>Anzahl Sätze:</InfoLabel>
          <InfoValue>
            <Input
              value={this.state.sets}
              name="sets"
              onChange={this.handleChange}
            />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Wiederholungen:</InfoLabel>
          <InfoValue>
            <Input
              value={this.state.repeat}
              name="repeat"
              onChange={this.handleChange}
            />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Gewicht:</InfoLabel>
          <InfoValue>
            <Input
              value={this.state.weight}
              name="weight"
              onChange={this.handleChange}
            />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Zeit:</InfoLabel>
          <InfoValue>
            <Input
              value={this.state.time}
              name="time"
              onChange={this.handleChange}
            />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Kommentar:</InfoLabel>
          <InfoValue>
            <Input
              value={this.state.comment}
              name="comment"
              onChange={this.handleChange}
            />
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <Button onClick={this.handleSave}>Save</Button>
          <Button onClick={this.props.handleCancel}>Cancel</Button>
        </InfoRow>
      </InfoContainer>
    );
  }
}

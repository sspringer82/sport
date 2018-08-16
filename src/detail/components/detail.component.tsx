import { Clear as ClearIcon, Edit as EditIcon } from '@material-ui/icons';
import update from 'immutability-helper';
import * as React from 'react';
import { IExercise } from '../../exercise/models/exercise';
import { Back } from '../../shared/back.component';
import { Container, EditContainer, Header, SubHeader } from './detail.style';
import { Edit, IState as EditState } from './edit.component';
import { Info } from './info.component';

interface IProps {
  exercise: IExercise | null;
  updateExercise: (exercise: IExercise) => void;
  handleBack: () => void;
}

interface IState {
  editMode: boolean;
}

export class Detail extends React.Component<IProps, IState> {
  public state = {
    editMode: false,
  };

  public toggleEditMode = () => {
    this.setState((prevState: IState) =>
      update(prevState, { $toggle: ['editMode'] }),
    );
  };

  public handleSave = (exercise: EditState) => {
    this.toggleEditMode();
    this.props.updateExercise(
      update(this.props.exercise as IExercise, { $merge: exercise }),
    );
  };

  public render() {
    if (this.props.exercise) {
      return (
        <Container>
          <Back handleBack={this.props.handleBack} />
          <EditContainer onClick={this.toggleEditMode}>
            {!this.state.editMode ? <EditIcon /> : <ClearIcon />}
          </EditContainer>
          <SubHeader>{this.props.exercise.muscleGroup}</SubHeader>
          <Header>{this.props.exercise.name}</Header>
          <img height="200" src={this.props.exercise.image} alt="" />
          {this.state.editMode ? (
            <Edit
              exercise={this.props.exercise}
              handleSave={this.handleSave}
              handleCancel={this.toggleEditMode}
            />
          ) : (
            <Info exercise={this.props.exercise} />
          )}
        </Container>
      );
    }
    return <div>No exercise selected</div>;
  }
}

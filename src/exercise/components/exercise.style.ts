import { Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { grey, margin, padding } from '../../shared/variables.style';

export const Container = styled(Paper)`
  && {
    display: flex;
    padding: ${padding};
    margin: ${margin};

    &.active {
      border: 1px solid grey;
    }
  }
`;

export const Info = styled.div`
  display: table;
  flex-direction: column;
  flex-grow: 1;
`;

export const InfoRow = styled.div`
  display: table-row;
`;

export const InfoLabel = styled.div`
  display: table-cell;
  width: 300px;
  padding-right: ${padding};
`;

export const InfoValue = styled.div`
  display: table-cell;
  &.muscleGroup {
    color: ${grey};
  }
  &.exerciseName {
    font-weight: bold;
  }
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
  padding: 0 ${padding};
  flex: 0 0 60px;
`;

export const Control = styled(Button)`
  && {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    &.done {
      border: 1px solid green;
      color: green;
    }
    &.notDone {
      border: 1px solid red;
      color: red;
    }
  }
`;

import { Button } from '@material-ui/core';
import { ArrowBack as BackIcon } from '@material-ui/icons';
import * as React from 'react';
import styled from 'styled-components';

export const BackContainer = styled(Button)`
  && {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface IProps {
  handleBack: () => void;
}

export const Back = ({ handleBack }: IProps) => (
  <BackContainer onClick={handleBack}>
    <BackIcon />
  </BackContainer>
);

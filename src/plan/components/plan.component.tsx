import {
  PlayArrow as GoIcon,
  Visibility as LookIcon,
} from '@material-ui/icons';
import * as React from 'react';

import { Button } from '@material-ui/core';
import { IPlan } from '../models/plan';
import {
  Container,
  LastBanner,
  LastTime,
  Name,
  NextBanner,
} from './plan.style';

interface IProps {
  plan: IPlan;
  handleSelectPlan: (plan: IPlan) => void;
  isNext: boolean;
  isLast: boolean;
}

export const Plan = ({ plan, handleSelectPlan, isNext, isLast }: IProps) => {
  return (
    <Container>
      <Name>{plan.name}</Name>
      <LastTime>{plan.lastTime.substr(0, 6)}</LastTime>
      <Button onClick={handleSelectPlan.bind(null, plan)}>
        <LookIcon />
      </Button>
      <Button>
        <GoIcon />
      </Button>
      {isNext ? <NextBanner>Next</NextBanner> : ''}
      {isLast ? <LastBanner>Last</LastBanner> : ''}
    </Container>
  );
};

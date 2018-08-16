import * as React from 'react';

import { IPlan } from '../models/plan';
import { Container } from './plan.style';

interface IProps {
  plan: IPlan;
  handleSelectPlan: (plan: IPlan) => void;
}

export const Plan = ({ plan, handleSelectPlan }: IProps) => {
  return (
    <Container onClick={handleSelectPlan.bind(null, plan)}>
      {plan.name}
    </Container>
  );
};

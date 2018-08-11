import { Paper } from '@material-ui/core';
import * as React from 'react';

import { IPlan } from '../models/plan';

interface IProps {
  plan: IPlan;
  handleSelectPlan: (plan: IPlan) => void;
}

export const Plan = ({ plan, handleSelectPlan }: IProps) => {
  return <Paper onClick={handleSelectPlan.bind(null, plan)}>{plan.name}</Paper>;
};

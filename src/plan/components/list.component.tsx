import * as React from 'react';
import { IPlan } from '../models/plan';
import { Plan } from './plan.component';

interface IProps {
  plans: IPlan[];
  handleSelectPlan: (plan: IPlan) => void;
}

export const List = ({ plans, handleSelectPlan }: IProps) => (
  <div>
    {plans.map(plan => (
      <Plan key={plan.name} plan={plan} handleSelectPlan={handleSelectPlan} />
    ))}
  </div>
);

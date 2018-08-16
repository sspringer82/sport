import { Button } from '@material-ui/core';
import update from 'immutability-helper';
import * as React from 'react';
import { IPlan } from '../models/plan';
import { Plan } from './plan.component';

interface IProps {
  plans: IPlan[];
  handleSelectPlan: (plan: IPlan) => void;
  startPlan: (plan: IPlan) => void;
}

function getTimestampFromDate(date: string): string {
  const year = date.substr(6, 4);
  const month = date.substr(3, 2);
  const day = date.substr(0, 2);
  return new Date(`${year}-${month}-${day}`).getTime().toString();
}

function sortPlansByDate(plans: IPlan[]): IPlan[] {
  return plans
    .map((toBeMapped: IPlan) => {
      return update(toBeMapped, {
        lastTime: { $set: getTimestampFromDate(toBeMapped.lastTime) },
      });
    })
    .sort((a: IPlan, b: IPlan) => {
      if (a.lastTime > b.lastTime) {
        return -1;
      } else if (a.lastTime < b.lastTime) {
        return 1;
      } else {
        return 0;
      }
    });
}

function isLast(plan: IPlan, plans: IPlan[]): boolean {
  const sortedPlans = sortPlansByDate(plans);
  if (sortedPlans[0].id === plan.id) {
    return true;
  }
  return false;
}
function isNext(plan: IPlan, plans: IPlan[]): boolean {
  const sortedPlans = sortPlansByDate(plans);
  if (sortedPlans[sortedPlans.length - 1].id === plan.id) {
    return true;
  }
  return false;
}

function startNextPlan(startPlan: (plan: IPlan) => void, plans: IPlan[]) {
  const sortedPlans = sortPlansByDate(plans);
  return () => {
    startPlan(sortedPlans[sortedPlans.length - 1]);
  };
}

export const List = ({ plans, handleSelectPlan, startPlan }: IProps) => (
  <div>
    {plans.map(plan => (
      <Plan
        key={plan.id}
        plan={plan}
        handleSelectPlan={handleSelectPlan}
        startPlan={startPlan}
        isLast={isLast(plan, plans)}
        isNext={isNext(plan, plans)}
      />
    ))}
    <Button onClick={startNextPlan(startPlan, plans)}>Go</Button>
  </div>
);

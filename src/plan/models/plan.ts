import { IExercise } from '../../exercise/models/exercise';

export interface IPlan {
  name: string;
  lastTime: string;
  exercises: IExercise[];
}

export class Plan {
  constructor(
    public name: string,
    public lastTime: string,
    public exercises: IExercise[],
  ) {}
}

import { IExercise } from '../../exercise/models/exercise';

export interface IPlan {
  id: number;
  name: string;
  lastTime: string;
  exercises: IExercise[];
}

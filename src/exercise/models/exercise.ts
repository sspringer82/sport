export interface IExercise {
  id: number;
  muscleGroup: string;
  name: string;
  sets: number;
  repeat: number;
  weight?: number;
  image: string;
  comment?: string;
  done: boolean;
  time?: string;
}

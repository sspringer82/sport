export interface IExercise {
  muscleGroup: string;
  name: string;
  sets: number;
  repeat: number;
  weight?: number;
  image: string;
  comment?: string;
}

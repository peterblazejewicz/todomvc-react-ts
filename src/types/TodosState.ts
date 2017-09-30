import { Todo } from './Todo';
export interface TodosState {
  [position: number]: Todo;
}

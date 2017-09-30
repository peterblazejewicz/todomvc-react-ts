import { Action } from 'redux';

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  COMPLETE_ALL = 'COMPLETE_ALL',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
}

export interface AddTodo extends Action {
  type: ActionType.ADD_TODO;
  text: string;
}
export interface ClearCompleted extends Action {
  type: ActionType.CLEAR_COMPLETED;
}
export interface CompleteAll extends Action {
  type: ActionType.COMPLETE_ALL;
}
export interface CompleteTodo extends Action {
  type: ActionType.COMPLETE_TODO;
  id: number;
}
export interface DeleteTodo extends Action {
  type: ActionType.DELETE_TODO;
  id: number;
}
export interface EditTodo extends Action {
  type: ActionType.EDIT_TODO;
  id: number;
  text: string;
}

export type TodosAction =
  | AddTodo
  | ClearCompleted
  | CompleteAll
  | CompleteTodo
  | DeleteTodo
  | EditTodo;

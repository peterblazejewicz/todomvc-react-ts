import {
  ActionType,
  AddTodo,
  ClearCompleted,
  CompleteAll,
  CompleteTodo,
  DeleteTodo,
  EditTodo,
} from './../types/actions';

export const addTodo: (text: string) => AddTodo = text => ({
  type: ActionType.ADD_TODO,
  text,
});
export const clearCompleted: () => ClearCompleted = () => ({
  type: ActionType.CLEAR_COMPLETED,
});
export const completeAll: () => CompleteAll = () => ({
  type: ActionType.COMPLETE_ALL,
});
export const completeTodo: (id: number) => CompleteTodo = id => ({
  type: ActionType.COMPLETE_TODO,
  id,
});
export const deleteTodo: (id: number) => DeleteTodo = id => ({
  type: ActionType.DELETE_TODO,
  id,
});
export const editTodo: (id: number, text: string) => EditTodo = (id, text) => ({
  type: ActionType.EDIT_TODO,
  id,
  text,
});

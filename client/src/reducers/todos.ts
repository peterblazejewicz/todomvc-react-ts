import { ActionType, TodosAction } from '../types/actions';

import { Todos } from './../types/Todos';
import initialState from '../constants/initialstate';

/**
 * Todos reducer
 * @param {any} [state=initialState]
 * @param {any} action
 * @returns
 */
const todos: (state: Todos, action: TodosAction) => Todos = (
  state = initialState,
  action,
) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((idx, todo) => Math.max(todo.id, idx), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];
    case ActionType.CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    case ActionType.COMPLETE_ALL:
      const areAllCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllCompleted,
      }));
    case ActionType.COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      );
    case ActionType.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case ActionType.EDIT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo),
      );
    default:
      return state;
  }
};

export default todos;

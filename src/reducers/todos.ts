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
    default:
      return state;
  }
};

export default todos;

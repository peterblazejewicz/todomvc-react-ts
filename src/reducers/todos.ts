import { Todos } from './../types/Todos';
import { TodosAction } from '../types/actions';
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
  return state;
};

export default todos;

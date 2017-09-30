import * as actions from '../actions';

import { Todos } from '../types/Todos';
import initialState from '../constants/initialstate';
import todos from './todos';

describe('todos reducer', () => {
  // default behaviour
  it('should handle initial state', () => {
    let t: Todos;
    expect(todos(t!, actions.addTodo('any'))).toEqual(initialState);
  });
});

import * as actions from '../actions';

import initialState from '../constants/initialstate';
import todos from './todos';

describe('todos reducer', () => {
  // default behaviour
  it('should handle initial state', () => {
    expect(todos(undefined, actions.addTodo('any'))).toEqual(initialState);
  });
});

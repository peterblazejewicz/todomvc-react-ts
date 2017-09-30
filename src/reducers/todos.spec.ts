import { ActionType, TodosAction } from '../types/actions';

import { Todos } from '../types/Todos';
import initialState from '../constants/initialstate';
import todos from './todos';

describe('todos reducer', () => {
  // default behaviour
  it('should handle initial state', () => {
    let t: Todos;
    let a: TodosAction;
    expect(todos(t!, a!)).toEqual(initialState);
  });
  // add todo
  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: ActionType.ADD_TODO,
        text: 'Run the tests',
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0,
      },
    ]);

    expect(
      todos(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: ActionType.ADD_TODO,
          text: 'Run the tests',
        },
      ),
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
    ]);

    expect(
      todos(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
        ],
        {
          type: ActionType.ADD_TODO,
          text: 'Fix the tests',
        },
      ),
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2,
      },
    ]);
  });
  // delete todo
  it('should handle DELETE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
        ],
        {
          type: ActionType.DELETE_TODO,
          id: 1,
        },
      ),
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
});

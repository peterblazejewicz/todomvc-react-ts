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
  //
  // CLEAR all completed
  //
  it('should handle CLEAR_COMPLETED', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: ActionType.CLEAR_COMPLETED,
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

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    expect(
      [
        {
          type: ActionType.COMPLETE_TODO,
          id: 0,
        },
        {
          type: ActionType.CLEAR_COMPLETED,
        },
        {
          type: ActionType.ADD_TODO,
          text: 'Write more tests',
        },
      ].reduce(todos, [
        {
          id: 0,
          completed: false,
          text: 'Use Redux',
        },
        {
          id: 1,
          completed: false,
          text: 'Write tests',
        },
      ]),
    ).toEqual([
      {
        text: 'Write tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Write more tests',
        completed: false,
        id: 2,
      },
    ]);
  });
  // complete all
  it('should handle COMPLETE_ALL', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: ActionType.COMPLETE_ALL,
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: true,
        id: 0,
      },
    ]);
    // Unmark if all todos are currently completed
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: true,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: true,
            id: 0,
          },
        ],
        {
          type: ActionType.COMPLETE_ALL,
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
  // complete todo
  it('should handle COMPLETE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: ActionType.COMPLETE_TODO,
          id: 1,
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
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

  // edit todo
  it('should handle EDIT_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1,
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: ActionType.EDIT_TODO,
          text: 'Fix the tests',
          id: 1,
        },
      ),
    ).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 1,
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });
});

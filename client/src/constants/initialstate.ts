import { Todos } from '../types/Todos';

/**
 * Default Todos store state
 */
const initialState: Todos = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];
export default initialState;

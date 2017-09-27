import { RouteProps, withRouter } from 'react-router-dom';

import TodoApp from '../components/TodoApp';

const TodoAppContainer = withRouter<RouteProps>(TodoApp);

export default TodoAppContainer;

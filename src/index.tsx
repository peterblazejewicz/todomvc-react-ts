import './index.css';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root') as HTMLElement);
registerServiceWorker();

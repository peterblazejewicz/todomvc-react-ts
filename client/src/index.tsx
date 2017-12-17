import './index.css';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './containers/TodoApp';
import { createStore } from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

import './index.css';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';

import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import TodoAppContainer from './containers/TodoAppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <TodoAppContainer>
      <Route path="/" component={TodoApp}/>
    </TodoAppContainer>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

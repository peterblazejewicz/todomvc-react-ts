import './TodoApp.css';

import React, { KeyboardEvent } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

// tslint:disable-next-line:no-any
class TodoApp extends React.Component<RouteComponentProps<RouteProps>, {}> {
  newField: HTMLElement;

  constructor(props: RouteComponentProps<RouteProps>) {
    super(props);
    this.props.history.listen((location, action) => {
      // tslint:disable-next-line:no-console
      console.log(location);
      // tslint:disable-next-line:no-console
      console.log(action);
    });
    // tslint:disable-next-line:no-console
    console.log(this.props.location);
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      // tslint:disable-next-line:no-console
      console.log(location);
      // tslint:disable-next-line:no-console
      console.log(action);
    });
  }

  handleNewTodoKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    // tslint:disable-next-line:no-console
    console.log(event.type);
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            ref={input => (this.newField = input!)}
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={event => this.handleNewTodoKeyDown(event)}
            autoFocus={true}
          />
        </header>
      </div>
    );
  }
}

export default TodoApp;

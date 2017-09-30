import './TodoApp.css';

import React, { Component, KeyboardEvent } from 'react';

// tslint:disable-next-line:no-any
class TodoApp extends Component<{}, {}> {
  newField: HTMLElement;

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

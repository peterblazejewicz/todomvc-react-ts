import React, { Component } from 'react';

import { AddTodo } from '../types/actions';
import TodoTextInput from './TodoTextInput';
import autobinder from 'autobind-decorator';

interface HeaderProps {
  addTodo: (text: string) => AddTodo;
}

class Header extends Component<HeaderProps, {}> {
  @autobinder
  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;

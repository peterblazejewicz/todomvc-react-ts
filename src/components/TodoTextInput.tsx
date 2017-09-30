import React, {
  ChangeEvent,
  Component,
  FocusEvent,
  KeyboardEvent,
} from 'react';

import autobinder from 'autobind-decorator';
import classnames from 'classnames';

interface TodoTextInputProps {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

interface TodoTextInputState {
  text: string;
}

class TodoTextInput extends Component<TodoTextInputProps, TodoTextInputState> {
  state = {
    text: this.props.text || '',
  };

  @autobinder
  handleSubmit(event: KeyboardEvent<HTMLInputElement>) {
    const text = (event.target as HTMLInputElement).value.trim();
    if (event.which === 13) {
      this.props.onSave(text);

      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  @autobinder
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  @autobinder
  handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (!this.props.newTodo) {
      this.props.onSave((event.target as HTMLInputElement).value);
    }
  }

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo,
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;

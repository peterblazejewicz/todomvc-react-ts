import './TodoApp.css';

import {
  AddTodo,
  ClearCompleted,
  CompleteAll,
  CompleteTodo,
  DeleteTodo,
  EditTodo,
  TodosAction,
} from '../types/actions';
import { Dispatch, connect } from 'react-redux';
import React, { SFC } from 'react';
import {
  addTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo,
  editTodo,
} from '../actions/';

import Header from '../components/Header';
import { Todos } from '../types/Todos';

interface TodoAppProps {
  todos: Todos;
  addTodo: (text: string) => AddTodo;
  clearCompleted: () => ClearCompleted;
  completeAll: () => CompleteAll;
  completeTodo: (id: number) => CompleteTodo;
  deleteTodo: (id: number) => DeleteTodo;
  editTodo: (id: number, text: string) => EditTodo;
}

// tslint:disable-next-line:no-shadowed-variable
const TodoApp: SFC<TodoAppProps> = ({ todos, addTodo }) => (
  <Header addTodo={addTodo} />
);

const mapStateToProps = (state: Todos, ownProps = {}) => ({
  todos: state,
});

// this is ugly ;O
const mapDispatchToProps = (dispatch: Dispatch<TodosAction>) => ({
  addTodo: (text: string) => {
    dispatch(addTodo(text));
  },
  clearCompleted: () => {
    dispatch(clearCompleted());
  },
  completeAll: () => {
    dispatch(completeAll());
  },
  completeTodo: (id: number) => {
    dispatch(completeTodo(id));
  },
  deleteTodo: (id: number) => {
    dispatch(deleteTodo(id));
  },
  editTodo: (id: number, text: string) => {
    dispatch(editTodo(id, text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

import React, { Component } from 'react';
import Item from '../Item'
import '../List/index.css';

export default class Index extends Component {
  render() {
    const { todoList, updataTodo, delTodo } = this.props;
    return (
      <ul className="todo-main">
        { 
          todoList.map((todo) => {
            return <Item {...todo} key={todo.id} updataTodo={updataTodo} delTodo={delTodo} />
        })}
      </ul>
    );
  }
}
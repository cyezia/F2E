import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  // 清除所有已完todo的回调
  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    // 已完成的个数，todos.reduce((pre, current)，current指代的是遍历对象的todo 可直接用todo
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    // console.log(doneCount);
    // 总数
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          {/* 必须写一个onChange回调 不然会有警告 */}
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
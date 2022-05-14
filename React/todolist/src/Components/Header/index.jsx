import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

export default class Header extends Component {

  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    // 解构赋值获取 keyCode, target
    const {keyCode, target} = event;
    // if(event.keyCode !== 13) return;
    // 判断是否是回车按键，enter键的keyCode是13
    if(keyCode !== 13) return;
    // 添加条件 添加的todo值不能为空(去除空格之后)
    if(target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    
    // console.log(event.target.value);
    // console.log(target.value);

    // 准备好一个todo对象，传给父组件App
    // 引入的nanoid库 此处用nanoid函数以保证每次生成的id都是唯一的
    const todoObj = {id: nanoid(), name: target.value, done: false};
    // 调用父组件传过来的函数，将todoObj传递给App组件
    this.props.addTodo(todoObj);

    // 回车之后清空输入框的值
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入任务名，按回车确认" />
      </div>
    );
  }
}
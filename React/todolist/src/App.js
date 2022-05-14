import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = { todos: [
    {id: '001', name: '吃饭', done: true},
    {id: '002', name: '睡觉', done: true},
    {id: '003', name: '写代码', done: false},
    {id: '004', name: '逛街', done: true}
  ]};

  // addTodo用于添加一个todo，接受的参数是todo对象
  addTodo = (todoObj) => {
    // console.log('App', todoObj);
    // 获取原来的todos
    const {todos} = this.state;
    // 追加一个todo，放上Header传过来的数据
    const newTodos = [todoObj, ...todos];
    // 更新状态，让页面更新，放上传过来新数据的数组
    this.setState({todos: newTodos});
  };

  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const {todos} = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      // 如果id是相等的，done改成传过来的新数组的值
      if(todoObj.id === id) {
        return {...todoObj, done};
      }else {
        return todoObj;
      }
    })
    this.setState({todos: newTodos});
  }

  // deleteTodo用于删除todo对象
  deleteTodo = (id) => {
    // 获取原来的todos
    const {todos} = this.state;
    // 删除指定id的对象 使用filter方法过滤 
    const newTodos = todos.filter((todoObj) => {
      // 不等于就过滤掉
      return todoObj.id !== id;
    })
    // 更新状态
    this.setState({todos: newTodos});
  }

  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    // 获取原来的todos
    const {todos} = this.state;
    // 加工数据
    const newTodos =  todos.map((todoObj) => {
      return {...todoObj, done};
    })
    // 更新状态
    this.setState({todos: newTodos});
  }

  // claerAllDone用于清除所有已完成的todo
  clearAllDone = () => {
    // 获取原来的todos
    const {todos} = this.state;
    // 过滤数据
    const newTodos = todos.filter((todoObj) => {
      // return todoObj.done === false; 
      return !todoObj.done;
    })
    // 更新状态
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          {/* <List todos={this.state.todos} /> */}
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }
}
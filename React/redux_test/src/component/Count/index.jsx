import React, { Component } from 'react';
// 引入store用于获取状态
import store from '../../redux/store'

export default class Count extends Component {
  // 初始化状态 
  // state = {count: 0}
  state = {};

  // 简单做法 放到src/index.js里面监测
  // 组件只要一挂载就调用
  // componentDidMount() {
  //   // 检查redux中的状态，只要变化，就调用render
  //   store.subscribe(() => {
  //     console.log('@');
  //     this.setState({}); // 调render

  //   });
  // }

  // 加
  increment = () => {
    // // 获取用户输入的值
    // const {value} = this.selectNumber;
    // const {count} = this.state;
    // // value的值是一个字符串 *1 强制类型转换
    // this.setState({count: count + value * 1})

    // 获取用户输入的值
    const {value} = this.selectNumber;
    // 通知redux加value
    store.dispatch({type: 'increment', data: value *1});
  }

  // 减
  decrement = () => {
    // const {value} = this.selectNumber;
    // const {count} = this.state;
    // this.setState({count: count - value * 1});

    const {value} = this.selectNumber;
    store.dispatch({type: 'decrement', data: value * 1});
  }

  // 当前求和为奇数再加
  incrementIfOdd = () => {
    // const {value} = this.selectNumber;
    // const {count} = this.state;
    // if(count % 2 !== 0) {
    //   this.setState({count: count + value * 1});
    // }

    const {value} = this.selectNumber;
    const count = store.getState();
    if(count % 2 !== 0) {
      store.dispatch({type: 'incrementOdd', data: value * 1});
    }
  }

  // 异步加
  incrementAsync = () => {
    // const {value} = this.selectNumber;
    // const {count} = this.state;
    // setTimeout(() => {
    //   this.setState({count: count + value * 1})
    // }, 500)
    const {value} = this.selectNumber;
    setTimeout(() => {
      store.dispatch({type: 'incrementAsync', data: value * 1});
    },500)
  }

  render() {
    return (
      <div>
        {/* <h1>当前求和为：{this.state.count}</h1> */}
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}
import React, { Component } from 'react';
// 引入action
import {increment, decrement, incrementAsync} from '../../redux/actions/count';
// 引入connect用于连接UI组件和redux
import {connect} from 'react-redux';

// 定义UI组件
class Count extends Component {
  state = {};
  // 加
  increment = () => {
    const {value} = this.selectNumber;
    this.props.increment(value * 1);
  }

  // 减
  decrement = () => {
    const {value} = this.selectNumber;
    this.props.decrement(value * 1);
  }

  // 当前求和为奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    if(this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  }

  render() {
    // console.log('UI组件接收到的是:',this.props);
    return (
      <div>
        <h2>我是Count组件,下方组件总人数为:{this.props.person}</h2>
        {/* <h1>当前求和为：{this.state.count}</h1> */}
        <h4>当前求和为：{this.props.count}</h4>
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

export default connect(
  state => ({
    count: state.count, 
    person: state.person.length
  }), 
  // mapDispatchToProps的一般写法
  // dispatch => ({
  //   jia: number => dispatch(createIncrementAction(number)),
  //   jian: number => dispatch(createDecrementAction(number)),
  //   jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
  //   }) 

  // mapDispatchToProps的简写
  {
    // increment: increment,
    // decrement: decrement,
    // incrementAsync: incrementAsync
    increment,
    decrement,
    incrementAsync
  }
)(Count);
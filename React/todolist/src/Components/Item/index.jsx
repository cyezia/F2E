import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
  // 标识鼠标当前的状态，处理鼠标移入移出
  state = {mouse: false};

  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    // 为了保证this.handleMouse(true)的返回值是一个函数
    return () => {
      // console.log(flag);
      // 更新鼠标状态
      this.setState({mouse: flag});
    };
  }

  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      // 因为input框的类型是checkbox，所以此处拿event.target.value的值无效，需用event.target.checked
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    // console.log('通知App删除', id);
    // 直接写confirm不被识别
    if(window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id);
    }
  }


  render() {
    const {id, name, done} = this.props;
    // 先提取this.state，可以简写li里面的 style={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}}
    const {mouse} = this.state;
    return (
      // 给列表绑定鼠标移入和移出事件，此处得保证this.handleMouse(true)的返回值是一个函数
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* defaultChecked是上来默认选中，但后续允许更改，但只在第一次指定的时候有作用 给选择框添加onChange事件 实现取消勾选 同时done的状态同步改变，通过id来监测 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        {/* <button className="btn btn-danger" style={{display:'none'}}>删除</button> */}
        {/* 鼠标移入显示清除按钮 鼠标移出none */}
        {/* 箭头函数 函数体只有一句 {}省略 此处直接接收回调函数 上述可以不用高阶函数 */}
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    );
  }
}
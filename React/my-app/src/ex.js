import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // 初始化this.state
    this.state = {date: new Date()};
  }

  // 生命周期方法
  // 挂载 mount
  // 会在巨剑已经渲染到DOM中后运行
  // Clock组件向浏览器请求设置一个计时器来每秒调用一次组件的tick()方法
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }

  // 卸载 unmount
  // 一旦Clock组件从DOM中移除 将会调用这个方法 停止计时器
  componentDidUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // 通过 setState()来计划进行一次UI更新
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
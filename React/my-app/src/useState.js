// 引入useState Hook 让它在我们的函数组件中存储内部state
import React, { useState } from 'react';
// 计时器 点击按钮时技术器的值会增加
function Example() {
  // 声明一个叫 count 的 state 变量
  // useState方法的返回值：当前函数的 state 以及更新state的函数
  // setCount是更新state的函数
  // useState初始化参数设置为0

  // conut的值为useState返回的第一个值，setCount是返回的第二个值 
  // const [count, setCount] = useState(0);这种叫做数组结构
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// 等价的class
class Example1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}


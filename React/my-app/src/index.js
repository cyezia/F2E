import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   // 初始化state， this.state中存储每个方格的Square的值，并在每次方格被点击的时候改变这个值

//   // 从Board中向Square传递props的两个参数 value onClick 这时该组件不需要再保存游戏的state
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }


//   render() {
//     return (
//       // <button className="square" onClick={function() {alert('click');}}>
//       <button 
//         className="square" 
//         // 每次点击button的时候React重新渲染Square组件，组件更新之后this.state.value的值会变为X
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 把Square组件重写为一个函数组件
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // 添加构造函数，并将Board组件的初始状态设置为长度为9的空值数组
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      // 设置X为默认的先手棋
      xIsNext: true,
    };
  }

  // 添加handleClick方法
  handleClick(i){
    // 调用slice()方法创建了squares数组的一个副本
    const squares = this.state.squares.slice();
    // 棋子没移动一步，xIsNext的布尔值都会反转，实现X O轮流落子的效果
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  // 把state的值保存在Board组件中
  renderSquare(i) {
    // 最外层加小括号，这样JavaScript解析的时候就不会在return的后面自动插入一个分号，从而破坏代码结构了
    return (
    <Square 
      value={this.state.squares[i]} 
      // Board组件向Square组件传递一个函数，当Square被点击的时候，这个函数就会被调用
      onClick={() => this.handleClick(i)}
    />
    );
  }

  render() {
    // 显示下一步是哪个玩家的
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    // 调用calculateWinner(squeras)检测是否有玩家胜出
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
        <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
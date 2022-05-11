import React from 'react';
import ReactDOM from 'react-dom';
import './TodoList.css';

class App extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input type="text" placeholder="请输入任务名，按回车确认" />
          </div>
          <ul className="todo-main">
            <li>
              <label>
                <input type="checkbox" />
                <span>XXX</span>
              </label>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>YYY</span>
              </label>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
          </ul>
          <div className="todo-footer">
            <label>
              <input type="checkbox" />
            </label>
            <span>已完成0</span> / 全部2
            <button>清除已完成任务</button>
          </div>
        </div>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
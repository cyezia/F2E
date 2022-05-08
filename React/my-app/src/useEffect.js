/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 使用浏览器的API更新页面标题
    document.title = 'You clicked ${count} time';
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
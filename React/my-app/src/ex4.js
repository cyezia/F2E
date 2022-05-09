/* eslint-disable no-undef */
// 如果effect的依赖频繁变化

import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // 此处不依赖外部的count变量
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
    // effect 不使用组件作用域中的任何变量
  }, []);
  return <h1>{count}</h1>;
}
// 创建/清理

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // 创建一个DOM元素作为渲染目标
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
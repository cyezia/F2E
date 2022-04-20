# DOM

- Document Object Model 文档对象模型

- DOM本身就是对象，也叫宿主对象

- DOM：通过浏览器提供的这一套方法表示或者操作HTML和XML

- XML是可以自定义标签

- XML -> XHTML -> HTML

## JavaScript 3种对象

- 1、本地对象(Native Object)：Object Function Array String Number Boolean Error EvalError SyntaxError RangeRrror ReferenceError TypeError URIError Date RegExp

- 2、内置对象（Built-in Object）：Global(一类对象的全称，代表一类对象，全局内置对象的总称) Math

  ECMA -> 全局下的方法：isNaN() parseInt() Number decodeURI encodeURI

  Global下的属性：Infinity NaN undefined

- 3、宿主对象(Host Object)：执行JS脚本的环境提供的对象，也叫浏览器对象，会涉及到兼容性问题

  浏览器对象window(BOM)和document(DOM)

- 本地对象和内置对象都是ES（ECMAScript）的内部对象

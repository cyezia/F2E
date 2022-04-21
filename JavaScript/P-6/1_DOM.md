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

## 遍历节点树 - 元素节点树

- 节点包含元素 -> 元素节点 = DOM元素

- parentNode 父级元素

- childNodes 子节点

  1、元素节点 = 1

  2、属性节点 = 2
  
  3、文本节点 text = 3

  4、注释节点 comment = 8

  5、document = 9

  6、DocumentFragment = 11

- firstChild lastChild

- nextSibling previousSibling 兄弟节点

## 遍历元素节点树

- parentElement 遍历元素节点树  IE9及以下不支持

- children 选择子元素 IE7及以下不支持

- childElementCount = children.length IE9及以下不支持

- firstElementChild lastElementChild 父级元素的第一个/最后一个子元素 IE9及以下不支持

- nextElementSibling previousElementSibling 下/上一个兄弟元素 IE9及以下不支持

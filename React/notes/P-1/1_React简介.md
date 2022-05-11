# React简介

## 是什么

- 用于构建用户界面的JavaScript库

  1、发送请求获取数据

  2、处理数据（过滤、整理格式等）

  3、操作DOM呈现界面

- React是一个将数据渲染为HTML视图的开源的JavaScript库

## 谁开发的

- Facebook开发，且开源

## 特点

- 1、采用组件化模式、声明式编码，提高开发效率及组件复用率

- 2、在React Native中可以使用React语法进行移动端开发

- 3、使用虚拟DOM+优秀的Diffing算法，尽量减少与真是DOM的交互

### 关于虚拟DOM

- 1、本质是Object类型的对象（一般对象）

- 2、虚拟DOM比较轻，真实DOM比较重，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性

- 3、虚拟DOM最终会被React转化为真实DOM，呈现在页面上

## JSX

- 全称：JavaScript XMl

- React定义的一种类似于XML的JS扩展语法：JS+XML

- 本质上是React.createElement(component, props, ...children)方法的语法糖

### 语法规则

- 定义虚拟DOM时，不要用引号

- 标签中混入JS表达式时要用{}

- 样式的类名指定不要用calss，要用className

- 内联样式要用style={{key: value}}的形式去写

- 只有一个根标签

- 标签必须闭合

- 标签首字符

  1、小写字母开头，则将该标签转为HTML中同名元素，若HTML中无对应的同名元素，则报错

  2、若大写字母开头，React就去渲染对应的组件，若组件没定义，则报错

## JS表达式和JS语句（代码）

- 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，例如

  1、a

  2、a + b

  3、demo(1)

  4、arr.map()

  5、function test(){}

- 语句：例如

  1、if(){}

  2、for(){}

  3、switch(){case: xxx}

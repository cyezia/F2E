# React面向组件编程

## 函数式组件

- 创建函数式组件：function MyComponent(){ return ...}

- 渲染组件到页面：ReactDOM.render(<组件名 />, getElementById('test'));

  1、React解析组件标签，找到了MyComponent组件
  
  2、发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面

## 类的基本知识

- 类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写

- 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须调用的

- 类中所定义的方法，都是放在了类的原型对象上，供实例去用

## 类式组件

- 创建类式组件：class MyComponent extends React.Component { render(){ return ...} }

  render是放在类的原型对象上，供实例使用

  render中的this是MyComponent的实例对象 <=> MyComponent组件的实例对象

  render调用几次 -> 1+n次 1是初始化那次 n是状态更新的次数

- 渲染组件到页面：ReactDOM.render(<组件名 />, getElementById('test'));

  1、React解析组件标签，找到了MyComponent组件
  
  2、发现组件是使用类定义的，随后new处理该类的实例，并通过该实例调用到原型上的render方法

  3、将render返回的虚拟DOM转为真实DOM，随后呈现在页面中

## 简单组件和复杂组件

- 简单组件：无状态（state）

- 复杂组件：有状态（state）

- 组件状态驱动页面：组件的状态里放着数据，数据的改变驱动着页面的展示

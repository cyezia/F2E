# Redux

## redux是什么

- redux是一个专门用于做状态管理的JS库

- 可以用在react angular vue等项目中，但是基本与react配合使用

- 作用：集中式管理react应用中多个组件共享的状态

## 什么情况下需要使用redux

- 某个组件的状态，都需让其他组件可以随时拿到（共享）

- 一个组件需要改变另一个组件的状态（通信）

- 总体原则：能不用就不用，如果不用不计较吃力才考虑使用

## redux的三个核心概念

### action

- 动作的对象

- 包含两个属性

  type：标识属性，值为字符串，唯一，必要属性

  data：数据类型，值类型任意，可选属性

      例子：{type: 'ADD_STUDENT', data: {name: 'Tom', age: 18}}

### reducer

- 用于初始化状态，加工状态

-加工时，根据旧的state和action，产生新的state的纯函数

### store

- 将state、action、reducer联系在一起的对象

- 如何得到此对象

      1、import { createStore } from 'redux';

      2、import reducer from './reducers';

      3、const store = createStore(reducer);

## react-redux

- 所有的UI组件（外层）都应该包裹一个容器组件，它们是父子关系

- 容器组件是真正的和redux打交道的，里面可以随意的使用redux的api

- UI组件中不能使用任何redux的api

- 容器组件会传给UI组件

  1、redux中所保存的状态

  2、用于操作状态的方法

- 备注：容器给UI传递状态、操作状态的方法，均通过props传递

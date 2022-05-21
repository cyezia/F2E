// 该文件专门用于为Count组件生成action对象


// function createIncrementAction(data) {
//   // return {type: 'increment', data: data} // 参数重名可省略
//   return {type: 'increment', data};
// }
// function createDecrementAction(data) {
//   return {type: 'decrement', data};
// }


import {INCREMENT, DECREMENT} from './constant';
// 箭头函数 用() 包裹 返回一个对象
export const createIncrementAction = data => ({type: INCREMENT, data});
export const createDecrementAction = data => ({type: DECREMENT, data});
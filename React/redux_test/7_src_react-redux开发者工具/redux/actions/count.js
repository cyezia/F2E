// 该文件专门用于为Count组件生成action对象


// function createIncrementAction(data) {
//   // return {type: 'increment', data: data} // 参数重名可省略
//   return {type: 'increment', data};
// }
// function createDecrementAction(data) {
//   return {type: 'decrement', data};
// }


import {INCREMENT, DECREMENT} from '../constant';
// 箭头函数 用() 包裹 返回一个对象  返回的是对象 
// 同步action，就是action的值为Object类型的一般对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action，就是action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    // setTimeout(() => {
    //   // store.dispatch({type: INCREMENT, data});
    //   store.dispatch(createIncrementAction(data));
    // }, time)
    setTimeout(() => {
      // store.dispatch({type: INCREMENT, data});
      dispatch(createIncrementAction(data));
    }, time)
  }
}


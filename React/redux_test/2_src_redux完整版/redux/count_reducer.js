// 1、该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
// 2、reducer函数会接收到两个参数，分别为：之前的状态（preState）和动作对象（action）


import {INCREMENT, DECREMENT} from './constant';
const initState = 0; //初始化状态
export default function countReducer(preState=initState, action) {
  console.log(preState, action);
  // if(preState === undefined) preState = 0; 
  // 从action对象中获取type data
  const {type, data} = action;
  switch(type) {
    case INCREMENT:
      console.log('@');
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
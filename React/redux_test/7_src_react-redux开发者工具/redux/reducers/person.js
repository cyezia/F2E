import { ADD_PERSON } from "../constant";

// 初始化人的列表
const initState = [{id: '001', name: 'Tom', age: 18}];
export default function countReducer(preState=initState, action) {
  // console.log('personReducer执行了');
  const {type, data} = action;
  switch(type) {
    case ADD_PERSON: // 若是添加一个人
      return [data, ...preState];
    default:
      return preState;
  }
}
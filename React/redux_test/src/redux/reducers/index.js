// 该文件用于汇总所有的reducer为一个总的reducer

// 引入combineReducers用于汇总多个reducer
import { combineReducers } from 'redux';
// 引入为Count组件服务的reducer
// import countReducer from './count';
import count from './count';

// 引入为Person组件服务的reducer
// import personReducer from './person';
import person from './person';

// 汇总所有reducer变成一个整的reducer
// const allReducers = combineReducers({
//   count: countReducer,
//   persons: personReducer
// })

// export default allReducers;

export default combineReducers({
  // count: countReducer,
  // persons: personReducer
  // count: count,
  // persons: person
  count,
  person
})

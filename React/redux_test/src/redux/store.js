// 该文件专门用于暴露一个store对象，整个应用只有一个store


// 引入createStore，专门用于创建redux中最核心的store对象
import { createStore, applyMiddleware } from 'redux';
// 引入汇总之后的reducer
import reducers from '../redux/reducers/index';
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';


// 暴露store
export default createStore(reducers, applyMiddleware(thunk));
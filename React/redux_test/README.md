# 求和案例

## redux精简版

      1、去除Count组件自身的状态
      2、src下建立：
          redux
            store.js
            count_reducer.js
      3、store.js
          （1）引入redux中的createStore函数，创建一个store
          （2）createStore调用时要传入一个为其服务的redeucer
          （3）记得暴露store对象
      4、count_reducer.js
          （1）reducer的本质是一个函数，接收preState，action，返回加工后的状态
          （2）reducer有两个作用：初始化状态，加工状态
          （3）reducer被第一次调用时，是store自动触发的，传递的preState是undefined

      5、在index.js中监测store中状态的改变。一旦发生改变就重新渲染<App />
         备注：redux只负责管理状态，至于状态的改变驱动页面的展示，要靠我们自己写

## redux完整版

      新增文件：
          （1）count_action.js 专门用于创建action对象
          （2）constant.js 放置容易写错的type值

## 异步action版

      1、明确：延迟的动作不想交给组件本身，想交给action
      2、何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
      3、具体编码：
          （1）npm add redux-thunk，并配置在store中
              import { createStore, applyMiddleware } from 'redux';
              import thunk from 'redux-thunk';
              export default createStore(countReducer, applyMiddleware(thunk));
      4、备注：异步action不是必须要写的，完全可以自己等待异步任务的结果，再去分发同步action

## react-redux基本使用

      1、明确两个概念：
          （1）UI组件：不能使用任何redux的api，只负责页面的呈现，交互等
          （2）容器组件：负责和redux通信，将结果交给UI组件
      2、如何创建一个容器组件 ---靠react-redux的connect函数
            connect(mapStateToProps, mapDispatchToProps)(UI组件);
            - mapStateToProps：映射状态，返回值是一个对象
            - mapDispatchToProps：映射操作状态的方法，返回值是一个对象
      3、备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
      4、备注2：mapDispatchToProps也可以是一个对象

## react-redux优化

      1、容器组件和UI组件整合成一个文件
      2、无需自己给容器组件传递store，给<App />包裹一个<Provider store={store}>即可
      3、使用了react-redux后不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
      4、mapDispatchToProps也可以简单写成一个对象
      5、一个组件要和redux打交道要经过哪几步
          （1）定义好UI组件 ---不暴露
          （2）引入connect生成一个容器组件，并暴露，写法如下：
                connect(
                  state => ({key: value})
                  {key: xxxAction}
                )(UI组件)
          （3）在UI组件中通过this.props.xxx读取和操作状态

## react-redux数据共享版

      1、定义一个Person组件，和Count组件通过redux共享数据
      2、为Person组件编写：reducer、action，配置constant常量
      3、重点：Person的reducer和Count的reducer要使用combineReducers进行合并，合并后的总状态是一个对象
      4、交给store的是总reducer，最后注意在组件中提取出状态的时候，要记得取到位

## 纯函数和高阶函数

### 纯函数

- 一类特别的函数：只要是同样的输入（实参），必定得到同样的输出（返回）

- 必定遵守以下一些约束

      1、不得修改参数数据
      2、不会产生任何副作用，例如网络请求，输入和输出设备
      3、不能调用Date.now()或者Math.random()等不纯的方法

- redux的reducer函数必须是一个纯函数

### 高阶函数

- 理解：

      1、情况1：参数是函数
      2、情况2：返回是函数

- 常见的高阶函数

      1、定时器设置函数
      2、数组的forEach()、map()、filter()、reduce()、find()、bind()
      3、promise

## 开发者工具的使用

      1、npm add redux-devtools-extension
      2、store中进行配置
          import {composeWithDevTools} from 'redux-devtools-extension'
          const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

## 最终版

      1、所有变量名字要规范，尽量触发对象的简写形式
      2、reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

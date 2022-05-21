# react-router-dom

## 注册路由

      <Route path="/about" component={About} />

## 路由组件和一般组件

      1、写法不同
            一般组件：<Demo />
            路由组件：<Route path="/demo" component={Demo} />
      2、存放位置不同：
            一般组件：components
            路由组件：pages
      3、接收的props不同：
            一般组件：写组件标签时传递了什么，就能收到什么
            路由组件：接收三个固定属性 history location match

## NavLink

- NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

- 标签内容是一个特殊的标签属性

- 通过this.props.children可以获取标签体内容

## switch的使用

- 通常情况下，path和component是一一对应的关系

- switch可以提高路由匹配效率，单一匹配

## 解决样式丢失的问题的三种解决办法

- public/index.html中引入的CSS文件不写./，写成/

      原引用：<link rel="stylesheet" href="./css/bootstrap.css">
      改为：<link rel="stylesheet" href="/css/bootstrap.css">

- public/index.html中引入的CSS文件不写./，写成%PUBLIC_URL% (代表public文件夹的绝对路径)

      改为：<link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">

- 把BrowserRouter换成HashRouter

## 路由的模糊匹配和严格匹配

- 默认使用的是模糊匹配（简单记：输入的路径必须包含要匹配的路径，且顺序要一致）

- 开启严格匹配：exact

      <Router exact={true} path="/about" component={About} />

## Redirect重定向

- 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to="/about">
      </Switch>

## 嵌套路由

- 注册子路由时要写上父路由的path值

- 路由的匹配是按照注册路由的顺序进行的

## 向路由组件传递参数

### params参数

- ajax携带参数的几种方式

  query

  params

  body: 两种编码形式 urlencode json

- 步骤

      1、在导航区组件Message中：路由链接向路由组件传递params参数
      <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>

      2、在导航区组件Message中：注册路由声明接收params参数
      <Route path="/home/message/detail/:id/:title" component={Detail} />

      3、在Detail组件中：接收params参数(params参数的位置在this.props下的match下的params里)
      const { id, title } = this.props.match.params;

- 总结

      1、路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>
      2、注册路由（声明接收）：<Route path="/demo/test/:name/:age" component={Test} />
      3、接收组件（Test组件）：const { name, age } = this.props.match.params; 

### search参数

- 步骤

      1、在导航区组件Message中：路由链接向路由组件传递search参数
      <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

      2、在导航区组件Message中：search参数无需声明接收，正常注册路由即可
      <Route path="/home/message/detail" component={Detail} />

      3、在Detail组件中：接收search参数（search参数位置在this.props下的location里）
      const { search } = this.props.location
      const {id, title} = qs.parse(search.slice(1)); // 用qs.parse转换成对象，并且用slice截掉前面的? --> id: ,title:

- 总结

      1、路由链接（携带参数）：<Link to='/demo/test/?name=TOM&age=18'>详情</Link>
      2、注册路由（无需声明，正常注册即可）：<Route path="demo/test" component={Test} />
      3、接收参数（Test组件）：const {search} = this.props.location
      备注：获取到的search是urlencoded编码字符串，需要借助、querystring解析

- 相关

  key=value&key=value --> urlencoded编码字符串

  querystring库

      引入：import qs from 'querystring'

      let obj = {name: 'Tom', age: 18}
      console.log(qs.stringify(obj));  // name=Tom&age=18

      let str = 'carName=奔驰&price=200';
      console.log(qs.parse(str)); // carName:"奔驰", price: "200"

### state参数

- 步骤

      1、在导航区组件Message中：路由链接向路由组件传递params参数
      <Link to={{pathname: '/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>

      2、在导航区组件Message中：state参数无需声明接收，正常注册路由即可
      <Route path="/home/message/detail" component={Detail} />

      3、在Detail组件中：接收state参数(state参数的位置在this.props下的location下的state里)
      const { id, title } = this.props.location.state || {};

- 总结

      1、路由链接（携带参数）：<Link to={{path:'/demo/test', state:{name:'Tom', age:18}}}>详情</Link>
      2、注册路由（声明接收）：<Route path="demo/test" component={Test} />
      3、接收组件（Test组件）：const { name, age } = this.props.location.state; 
      备注：刷新也可以保留住参数

## push与replace模式

- 默认是push模式，可以逐步回退

- replace模式

      localhost:3000/about

      localhost:3000/home/news

      localhost:3000/home/message

      localhost:3000/home/message/消息1

      退回localhost:3000/home/news

## withRouter

- 可以加工一般组件，让一般组件具备路由组件所特有的API

- 返回值是一个新组件

      import React, { Component } from 'react';
      import { withRouter } from 'react-router-dom';
      class Header extends Component {

      }
      export default withRouter(Header)

## BrowserRouter与HashRouter的区别

      1、底层原理不一样：
            BrowserRouter使用的是H5的history API，不兼容IE9及以下的版本
            HashRouter使用的是URL的哈希值
      2、path表现形式不一样
            BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
            HashRouter的路径包含#，例如：localhost:3000/#/demo/test
      3、刷新后对路由state参数的影响
          （1）BrowserRouter没有任何影响，因为state保存在history对象中
          （2）HashRouter刷新后会导致state参数的丢失
      4、备注：HashRouter可以用于解决一些路径错误相关的问题

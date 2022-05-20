# react-router-dom

## 路由组件和一般组件

- 写法不同

      一般组件：<Demo />
      路由组件：<Route path="/demo" component={Demo} />

- 存放位置不同：

  一般组件：components

  路由组件：pages

- 接收的props不同：

  一般组件：写组件标签时传递了什么，就能收到什么

  路由组件：接收三个固定属性 history location match

## NavLink与封装NavLink

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

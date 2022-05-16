# React路由

## SPA

- 单页Web应用（single page application，SPA）

- 整个应用只有一个完整的页面

- 点击页面中的链接不会刷新页面，只会做页面的局部更新

- 数据都需要通过AJAX请求获取，并在前端异步展现

## 什么是路由

- 一个路由就是一个映射关系（key: value）

- key为路径，value可能是function或componet

## 路由分类

- 后端路由

  理解：value是function，用来处理客户端提交的请求

  注册路由：
  
      router.get(path, function(req, res))

  工作过程：当node接收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应数据

- 前端路由

  浏览器端路由，value是component，用于展示页面内容

  注册路由：
  
      <Router path="/test" component={Test}>
  
  工作过程：当浏览器的path变为/test时，当前的路由组件就会变成Test组件

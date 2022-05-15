# Promise的理解和使用

## 理解

- 抽象表达：

  Promise是一门新的技术（ES6规范）

  Promise是JS中进行异步编程的新解决方案（旧方案是单纯使用回调函数）

- 具体表达：

  从语法上来说：Promise是一个构造函数

  从功能上来说：promise对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 异步编程

- fs 文件操作（fs是node.js下面的一个模块，可以对计算机的磁盘进行读写操作）

- 数据库操作

- AJAX

- 定时器

## 为什么要用Promise

- 支持链式调用，可以解决回调地狱问题

  回调地狱：回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件

## Promise的状态

- 实例对象中的一个属性 PromiseState

  pending 未决定的

  resolve/fullfilled 成功

  rejected 失败

- 状态改变只有2种可能

  pending -> resolved

  pending -> rejected

- 一个promise对象只能改变一次，无论成功还是失败，都会有一个结果数据

- 成功的数据一般称为value，失败的结果数据一般称为reason

## Promise对象的值

- 实例对象中的另一个属性 PromiseResult

- 保存异步任务成功或失败的结果

- 谁可以修改

  resolve

  reject

## Promise工作流程

- new Promise() pending状态

- 执行异步操作

  成功了执行resolve() -> promise对象 resolved状态

  失败了执行reject() -> promise对象 rejected状态

- then() -> 新的promise对象

## 相关API

- Promise构造函数：Promise(excutor) {} excutor会在Promise内部立即同步调用，异步操作在执行器中执行

  excutor函数：执行器(resolve, reject) => {}

  resolve函数：内部定义成功时调用的函数是 value => {}

  reject函数：内部定义失败时调用的函数是 reason => {}

- Promise.prototype.then方法：(onResolved, onRejected) => {}

  onResolved函数：成功的回调函数 (value) => {}

  onRejected函数：失败的回调函数 (reason) => {}

- Promise.prototype.catch方法：(onRejected) => {}

  onRejected函数：失败的回调函数 (reason) => {}

- Promise.resolve方法：(value) => {}

  value：成功的数据或promise对象

  如果传入的参数为非promise类型的对象，则返回的结果为成功的promise对象

  如果传入的参数是promise对象，则参数的结果决定了resolve的结果

- Promise.reject方法：(reason) => {}

  reason：失败的原因，返回一个失败的promise对象

- Promise.all方法：(promises) => {}

  promises：包含n个promise的数组 返回一个新的promise，只有所有的promise都成功才成功，只要有一个失败就直接失败

- Promise.race方法：(promises) => {}

  promises：包含n个promise的数组 返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态

## Promise的几个关键问题

- 如何改变promise的状态

  1、resolve(value)：如果当前是pending就会变为resolved

  2、reject(reason)：如果当前是pending就会变为rejected

  3、throw抛出异常：如果当前是pending就会变成rejected

- 一个promise指定多个成功/失败回调函数，都会调用吗

  当promise改变为对应状态时都会调用

- 改变promise状态和指定回调函数谁先谁后

  1、都有可能，正常情况下是先指定回调再改变状态，但也可以先改变状态再指定回调

  2、如何先改状态再指定回调？（1）在执行器中直接调用resolve()/reject() （2）延迟更长时间才调用then()

  3、什么时候才能得到数据？（1）如果先指定回调，那当状态发生改变时，回调函数就会调用，得到数据 （2）如果先改变状态，那当指定回调时，回调函数就会调用，得到数据

- promise.then()返回的新promise的结果状态有什么决定

  1、简单表达：由then()指定的回调函数执行的结果决定

  2、详细表达：（1）如果抛出异常，新promise变为rejected，reason为抛出的异常 （2）如果非返回的是非promise的任意值，新promise变为resolved，value为返回值 （3）如果返回的是另一个新promise，此promise的结果就会成为新promise的结果

- promise如何串联多个操作任务

  1、promise的then()返回一个新的promise，可以分开形成then()的链式调用

  2、通过then的链式调用串联多个同步/异步操作

- promise的异步传透

  1、当使用promise的then链式调用时，可以在最后指定失败的回调

  2、前面任何操作出了异常，都会传到最后失败的回调中处理

- 中断promise链

  1、当使用promise的then链式调用时，中中间中断，不再调用后面的回调函数

  2、办法：在回调函数中返回一个pending状态的promise

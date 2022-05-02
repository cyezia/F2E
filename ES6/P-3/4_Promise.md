# Promise

- Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件），更合理和更强大

- 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果

- Promise对象的特点：

  1、对象状态不受外界影响

  Promise对象代表一个异步操作，有三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)

  只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态

  2、一旦状态改变，就不会再变，任何时候都可以得到这个结果

  Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected，只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时称之为resolved(已定型)

- Promise的缺点

  1、无法取消，一旦新建它就会立即执行，无法中途取消

  2、如果不设置回调函数，Promise内部抛出的错误，不会反应到外部

  3、当处于pending状态时，无法得知目前进展到哪一个阶段

## 基本用法

- const promise = new Promise(function(resolve, reject){ })

  resolve函数的作用：将Promise对象的状态从未完成变为成功(即从 pending 变为 resolved)，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
  
  reject函数的作用：将Promise对象的状态从未完成变为失败(即从 pending 变为 rejected)，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

## Promise.prototype.then()

- 为 Promise 实例添加状态改变时的回调函
数

## Promise.prototype.catch()

- 方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数

## Promise.all()

- 用于将多个 Promise 实例，包装成一个新的 Promise 实例

  const p = Promise.all([p1, p2, p3]);

  p 的状态由 p1 、 p2 、 p3 决定，分成两种情况：
  
  1、只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成 fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p 的回调函数
  
  2、只要p1、p2、p3之中有一个被rejected，p的状态就变成 rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

## Promise.race()

- 将多个 Promise 实例，包装成一个新的 Promise 实例

  const p = Promise.race([p1, p2, p3]);

  只要p1、p2、p3 之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数

## Promise.resolve()

- 将现有对象转为 Promise 对象

- Promise.resolve 方法的参数分成四种情况

  1、参数是一个Promise实例：Promise.resolve将不做任何修改、原封不动地返回这个实例

  2、参数是一个thenable对象（指的是具有then方法的对象）：Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法

  3、参数不是具有 then 方法的对象，或根本就不是对象： Promise.resolve方法返回一个新的Promise对象，状态为 resolved

  4、不带有任何参数：直接返回一个 resolved 状态的 Promise 对象

## Promise.reject()

- 返回一个新的Promise实例，该实例的状态为rejected

## 两个附加方法

- done()

  捕捉到任何可能出现的错误，并向全局抛出

- finally()

  finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

  与done()方法最大的区别：接受一个普通的回调函数作为参数，该函数不管怎样都必须执行

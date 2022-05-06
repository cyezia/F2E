# async函数

- 它就是Generator函数的语法糖

## async函数实现原理

- 将 Generator 函数和自动执行器，包装在一个函数里

  async function fn(args) { }

  等同于 function fn(args) { return spawn(function* () { }); }

  spawn函数是自动执行器

## for await...of 循环

- 是用于遍历异步的Iterator接口

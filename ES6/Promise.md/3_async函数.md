# async函数

- 如果返回值是是一个非Promise类型的数据

- 如果返回的是一个Promise对象

- 抛出异常

## await表达式

- await右侧的表达式一般为promise对象,但也可以是其它值

- 如果表达式是promise对象，await返回的是promise成功的值

- 如果表达式是其它值，直接将此值作为await的返回值

## 注意

- await必须卸载async函数中，但是async函数中可以没有await

- 如果await的promise失败了，就会抛出异常，需要通过try...catch捕获处理

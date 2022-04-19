# this指向

- 在函数内部：普通的函数，只要没实例化的函数，这个函数的this是默认指向window

- 在全局范围内：也是指向window的

- 实例化之后：this指向当前函数

## 总结

- 全局this -> window

- 预编译函数this -> window

- apply/call改变this指向

- 构造函数的this指向实例化对象

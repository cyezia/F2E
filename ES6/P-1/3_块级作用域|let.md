#

## 块级作用域

- kiss原则 keep is simple, stupid

- 不建议在块级作用域中用函数声明的方式声明函数，而用函数表达式的方式

- 块级作用域是没有返回值的

## let

- 1、let声明的变量只在let命令所在的代码块内有效；var是在全局范围内有效

- 2、在同一作用域下不可重复声明

- 3、不会变量提升，会产生一个暂时性死区；var会变量提升

- let本质上就是为了JS增加一个块级作用域

## const

- const 声明一个只读的常量，一旦声明，常量的值就不能改变，意味着，一旦声明必须初始化，否则会报错

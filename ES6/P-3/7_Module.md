# Module

## 严格模式

- "use strict";

- ES6的模块自动采用严格模式，不管你有没有在模块头部加上 "use strict";

## export命令

- export命令用于规定模块的对外接口，必须与模块内部的变量建立一一对应关系

- import命令用于输入其他模块提供的功能

- export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值

## import命令

- import { firstName, lastName, year} from ' ';

- import命令具有提升效果，会提升到整个模块的头部，首先执行

## 模块的整体加载

- 用星号( * )指定一个对象，所有输出值都加载在这个对象上面

## export default 命令

- 为模块指定默认输出

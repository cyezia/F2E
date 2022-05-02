# Generator函数的语法

## 基本概念

- Generator函数是一个状态机，封装了多个内部状态

- 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数

  返回的遍历器对象，可以依次遍 历 Generator 函数内部的每一个状态

- 两个特征

  1、function 关键字与函数名之间有一个星号

  2、函数体内部使用yield(产出)表达式，定义不同的内部状态

  function* helloWorldGenerator(){

      yield 'hello';

      yeild 'world';

      return 'ending';

  }

## yield表达式

- 由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数，yield表达式就是暂停标志

- 遍历器对象的next方法的运行逻辑如下

  1、遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值

  2、下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式

  3、如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值

  4、如果该函数没有return语句，则返回的对象的value属性值为undefined

## next方法的参数

- yield表达式本身没有返回值，或者说总是返回undefined，next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值

## for...of循环

- for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法

## Generator.prototype.throw()

- Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体内捕获

## Generator.prototype.return()

- Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数

## 作为对象属性的 Generator 函数

- 简写

  let obj = { *myGeneratorMethod(){ } };

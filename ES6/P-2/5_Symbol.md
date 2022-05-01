#

## Symbol

- 表示独一无二的值

- Symbol是JavaScript语言的第七种数据类型

  前六种是：undefined null Boolean String Number Object

### 作为属性名的Symbol

- 写法1

  let a = {};

  a[mySymbol] = 'Hello';

- 写法2

  let a = { [mySymbol] = 'Hello' };

- 写法3

  let a = {};

  Object.defineProperty(a, mySymbol, {value: 'Hello'});

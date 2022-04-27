#

## forEach 遍历

- 是Array.prototype上的方法

  遍历data数组：data.forEach(function(elem, index, array){});

- data.forEach(function(elem, index, array){},{name: 'test'});
  forEach的第二个参数是更改第一个参数函数内部this指向的

## filter 筛选 过滤

- 是Array.prototype上的方法

- var newArr = data.filter(function(elem, index, array){}) 会返回一个新数组

## map 映射

- 是Array.prototype上的方法

- newArr = data.map(function(elem, index, array){})

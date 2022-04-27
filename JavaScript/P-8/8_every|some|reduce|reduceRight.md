#

## every

- 是Array.prototype上的方法

- data.every(function(elem, index, array){})

  当every每次遍历data的时候，都要执行function(){}，这个function(){}就是every的回调函数

- 如果有一个不满足条件就停止遍历，条件就是return后面的表达式

- 会返回一个布尔值

## some

- data.some(function(elem, index, array){})

- 如果有一个满足条件就停止遍历，条件就是return后面的表达式

- 会返回一个布尔值

## reduce 归纳函数

- [].reduce(function(prev, elem, index, arr){}, initialValue);

  第二个参数叫initialValue（初始值），是必填项

  prev实际上是没有值的，它的值是从第二个参数initialValue来的，initialValue填什么prev就是什么

  pre === initialValue -> true

- 从下标为0开始遍历

## reduceRight

- 就是reduce倒过来，从下标为长度减1开始遍历

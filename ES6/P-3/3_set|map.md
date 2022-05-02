#

## Set

- 类似于数组，但是成员的值都是唯一的，没有重复的值

- Set本身是一个构造函数，用了生成Set数据结构

  const s = new Set();

- Set函数可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数，用来初始化

  const set = new Set([1, 2, 3, 4, 5, 6]);

### Set实例的属性和方法

- Set.prototype.constructor：构造函数，默认就是Set函数

- Set.prototype.size：返回Set实例的成员总数

### Set实例的方法：操作方法和遍历方法

- 操作方法（用于操作数据）

  Set.prototype.add(value)：添加某个值，返回Set结构本身

  Set.prototype.delete(value)：删除某个值，返回布尔值，表示删除是否成功

  Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员

  Set.prototype.clear()：清除所有成员，没有返回值

- 遍历方法（用于遍历成员）

  Set.prototype.keys() 返回键名的遍历器

  Set.prototype.values() 返回键值的遍历器

  Set.prototype.entries() 返回键值对的遍历器

  Set.prototype.forEach() 使用回调函数遍历每个成员

- Set的遍历顺序就是插入顺序

## WeakSet

- WeakSet结构与Set类型，也是不重复的值的集合

- 与Set的区别

  1、WeakSet的成员只能是对象，而不能是其他类型的值

  2、WeakSet的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，即如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在与WeakSet之中

- ES6规定WeakSet不可遍历

### WeakSet结构的方法

- WeakSet.prototype.add(value) 向WeakSet实例添加一个新成员

- WeakSet.prototype.delete(value) 清除WeakSet实例的指定成员

- WeakSet.prototype.has(value) 返回一个布尔值，表示某个值是否在WeakSet实例之中

## Map

- 类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值（包括对象）都可以当做键，Map结构提供了值-值的对应

### 实例的属性和操作方法

- size属性 返回Map结构的成员总数

- set(key, value)

  set方法设置键名key对应的键值为value，然后返回整个Map结构，如果key已经有值

- get(key) get方法读取key值对应的键值，如果找不到key，就返回undefined

- has(key) has方法返回一个布尔值，表示某个键是否在当前的Map对象之中

- delete(key) delete方法删除某个键，返回true，如果删除失败，返回false

- clear() clear方法清除所有的成员，没有返回值

### 遍历方法

- keys() 返回键名的遍历器

- values() 返回键值的遍历器

- entries() 返回所有成员的遍历器

- forEach() 遍历Map的所有成员

- Map的遍历顺序就是插入顺序

## WeakMap

- 用于生成键值对的集合

- 与Map的区别

  1、WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名

  2、WeakMap的键名所指向的对象，不计入垃圾回收机制

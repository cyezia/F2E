#

## 拆分组件，实现静态组件，注意calssName、style的写法

- 整个页面 -> App组件

- 顶部输入框 -> Header组件

- 中间部分的渲染列表 -> List组件

  每个todo -> Item组件

- 底部的完成情况 -> Footer组件

## 动态初始化列表，如何确定将数据放在哪个组件的state中

- 某个组件使用：放在其自身的state中

- 某些组件使用：放在它们共同的父组件state中（官方称此操作为：状态提升）

## 关于父子之间的通信

- 父组件给子组件传递数据：通过props传递

- 子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数

## 注意defaultChecked和checked的区别

- defaultChecked只在第一次指定时有效

- checked需要添加一个onChange回调，不然会报错

- 类似的还有defaultValue和value

## 状态在哪里，操作状态的方法就在哪里

# BFC

- CSS 2.1 提出的一个概念
- 英文：block formatting contexts

- 中文：块级格式化上下文

## 如何让一个元素成为BFC元素:设定以下属性当中的任意一个，这个元素就是BFC元素，具备BFC特性

- body 本身就是一个BFC元素

- 被定义float:left|right的元素具备BFC特性

- position:absolute|fixed 这两个属性值具备BFC特性

- display inline-block table-cell flex

- overflow hidden auto scroll

## BFC元素起到了什么作用

- 1、margin合并的问题

- 2、浮动流造成的父级元素高度坍塌的问题

- 3、margin塌陷的问题

- 4、浮动元素覆盖的问题

## 控制元素布局定位的方案

- 普通流 normal flow （HTML默认的布局）

  特点：以HTML文档为基数，自上而下去布局。内联元素水平排列，直到当前的这一行被占满，再换行；块级元素换行，新起一行进行布局

- 浮动流 float

  脱离了普通流

- 绝对定位布局 absolute positioning

  脱离了整个文档流，不会影响任何兄弟元素的布局

  绝对定位是由它的坐标决定的

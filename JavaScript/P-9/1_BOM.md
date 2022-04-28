# BOM

## JavaScript

- ECMAScript JS基础

- DOM 文档操作

- BOM 浏览器操作

## 什么是BOM

- BOM Browser Object MOdel 浏览器对象模型

- DOM Document Object Model 文档对象模型

- BOM：针对浏览器相关交互的方法和接口的集合

  BOM让JS与浏览器对话，获取浏览器信息和操作浏览器

## BOM的三大问题

- 处理什么：窗口（window）和框架（frame）

- 提供什么：浏览器交互的方法和接口

- 解决什么：浏览器窗口的访问与操作

## BOM核心

- BOM的核心是window对象

- window是双面人也是大总管

  1、window对象表示浏览器窗口

  2、所有JS全局对象、函数、变量都是window的对象成员

  window.username === var username

  window.obj = {} === var obj = {}

  window.test = function(){} === var test = function(){} === function test(){}

- 总结：网页中定义的任何对象、变量、函数，都是window下的属性（包括document）

## BOM规范

- ECMAScript：通过ECMA-262标准化的脚本程序设计语言

- DOM：W3C

- BOM：没有规范（浏览器厂商对其功能的定义不相同，兼容性非常不好）

## window大管家

- DOM：document

- BOM：frames[]、history、location、navigator、screen

## BOM的组成

- window：window对象上直接定义的属性和方法

- Navigator：浏览器的信息

- History：浏览器当前窗口访问的历史记录

- Location：获取当前页面的地址信息、页面重定向等

- Screen：浏览器屏幕的相关信息

- frames：框架相关的信息获取和操作

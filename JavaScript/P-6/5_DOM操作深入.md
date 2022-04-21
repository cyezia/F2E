# DOM操作深入

## getElementById()

- 1、Document.prototype上有

- 2、Element.prototype HTMLElement.prototype上没有

## getElementsByName()

- 1、在Document.prototype上有

- 2、Element.prototype上没有

## getElementsByTagName getElementsByClassName querySelector querySelectorAll

- 1、Document.prototype上有

- 2、Element.prototype上有

## *

- document.getElementsByTagName('*'); 会把所有的标签都选出来，只能用在getElementsByTagName上

## HTMLDocument.prototype上有body和head属性，访问body和head

- 如何选出body和head元素呢

  var body = document.body;

  var head = document.head;

- var title = document.title; 获取的是title元素里面的文本

  若要选择元素：var title = document.getElementsByTagName('title);

## Document.prototype上的documentElement，访问HTML文档

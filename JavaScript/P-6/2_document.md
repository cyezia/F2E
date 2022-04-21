# document

- getElementById 通过id选择

- getElementsByTagName 通过标签名选择

- getElementsByClassName 通过类名选择

- getElementByName 通过name属性选择

- document的构造函数是HTMLDocument，HTMLDocument的构造函数是Document

- HTMLDocument构造出来的对象里面有__proto__: Document.prototype

- document的__proto__ = HTMLDocument.prototype

- HTMLDocument的__proto__ = Document.prototype

## querySelector querySelectorAll

- HTML5新引入的API

- 括号里和CSS选择器写法一样，例如：var div1 = document.querySelector('.text');

- querySelector选择的是一个

- querySelectorAll选择的是一组

- 但公司一般不用：性能、不实时

# DOM间接操作CSS

## 读取CSS属性的方法

- elem.style.xxx -> 可读可写

- 所有的属性都要用小驼峰写

  oDiv.style.backgroundColor = 'green';

- 值必须是字符串

  例如：oDiv.style.height = '200px';

- 复合值一定拆解赋值，例如：oDiv.style.border = '1px solid #000';最后拆成

  oDiv.style.borderWidth = '5px';

  oDiv.style.borderStyle = 'solid';

  oDiv.style.borderColor = '#000';

- 保留字前面加css

  oDiv.style.cssFloat = 'left';

## 查看CSS属性的方法

- 打印出这个元素可以设置的样式的集合：元素节点名.style

  例如：oDiv.style

- 查看计算样式：window.getComputedStyle(elem, null) [prop];

  获取当前元素所显示的所有样式的显示值，包括默认值

  例如：window.getComputedStyle(div, null)

  null可改成伪元素名，例如：window.getComputedStyle(elem, 'after').width; 返回伪元素的宽

  IE8及以下不支持

  IE8及以下：elem.currentStyle

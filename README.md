# F2E
- Web Front-end development 前端
- Web back-end development 后端
- 前端开发：

  结构布局：样式呈现、页面的动态交互

  js - 脚本、数据交互处理、数据格式化渲染

  结构布局（HTML）、样式呈现（CSS）、行为逻辑（JavaScript）
  
- htm后缀文件

  window 98及以前的系统、linux系统，后缀名只认3位
- HTML超文本标记语言（HyperText Markup Language）
- title:30-40字

  主页：网站名称  + 主要的关键字/关键词的描述

  详情页：详细名称 + 网页名称 + 简介

  列表页：分类名称 + 关键字 + 网站名称

  文章页：标题 + 分类 + 网站名称
- keywords:100个字符

  网站名称 + 分类信息 + 网站名称
- description 描述信息:80-120汉字

  综合title + keywords的简单描述
- 搜索引擎认知的优先级：
  title > description > keywords
- em标签（emphasize）加强语气
- lang="zh-Cn"：简体中文
- 编码字符集

  GB2312 中国信息处理国家标准码-->简体中文编码

  GBK 汉字扩展规范-->扩大汉字收录，增加了繁体中文，增加蒙维等少数民族的文字

  UTF-8 unicode 万国码
- CSS1Compat W3C的标准兼容性模式
- BackCompat 浏览器的怪异兼容性模式
- h1-h6-->heading 标签 标题标签

  独占一行、粗体、大小不一致
- 浏览器默认的文字大小是16px
- p Paragraph标签 段落标签

  独占一行
- i 标签一般用来加图标
- del 标签 文字中间的横线
  
  用CSS样式写：style="text-decoration: line-through"
- ins 标签 下划线标签

  用CSS样式写：style="text-decoration: underline"
- address 地址标签
- div 标签（division）网页的结构标签 布局标签

  容器、盒子，有宽高，写块的
- 在编辑器中，文本的空格和换行都是文本分隔符
- HTML实体字符

  &后面加上lt;(less than)、gt;(great than)、nbsp;分别代表< 、> 、空格
- br 换行
- hr 分割线
- img 标签
   
  src（source 资源）属性

  网络路径：网上复制的图片地址

  相对路径：先 ../ 跳出当前文件夹，再 / 进入目标文件夹

  绝对路径：带本地盘的路径，例如：user/yezi/img/login.png
- 元素：标签+内容

  inline element，即内联元素/行间元素/行内元素，（不独占一行、无法定义宽高）：strong em del ins sup sub span

  block element，即块级元素（独占一行、可以定义宽高）：p h div address ol ul li 

  inline-block element，即内联块级元素（不独占一行、可以定义宽高）：img

  内联元素可以嵌套内联元素，块级元素可以嵌套任何元素

  p标签不可以嵌套div，a标签不可以嵌套a标签
- anchor 标签（锚点）
- a 标签，href(Hypertext reference，超文本引用)，作用如下：

  1、超链接标签

  2、打电话

  3、发邮件

  4、锚点定位

  5、协议限定符，javascript:;

  text-decoration: none; //去掉a标签自带的下划线
- 注释 可用于检查bug

- sup （superscripted）上标标签
- sub （subscripted）下标标签
- span 标签，默认没有任何样式

  作用：区分其它文本
- ol （order list）有序列表，三个属性：type、start、reversed(反转)

  只有数字才能选择从哪里开始排序

  例如：type="1" start="5" 从5开始排序
- ul （unorder list）无序列表

  type属性：disc(默认值，圆圈)、square(正方形)、circle(空心圆)

  list-style = none;去掉列表前面的图标
- dl (definition list) 定义列表

  dt (definition term)

  dd (definition description)
- table 表格

  caption 标题标签

  tr (table row) 表格行标签

  th (table header cell) 表头标签

  td (table data cell) 单元格标签

  cellpadding 单元格内边距

  cellspacing 单元格间距

  colspan 列合并

  rowspan 行合并

  align="left|center|right" 默认居左

  thead 表格的页眉标签，table head

  tfoot 表格的页尾标签，table foot

  tbody 表格的主体标签，table body

  出现的顺序：thead -> tfoot -> tbody 三个标签必须同时出现

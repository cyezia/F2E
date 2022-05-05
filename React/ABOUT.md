#

- 在JavaScript class中，每次定义其子类的构造函数时，都需要调用super方法，因此，在所有含有构造函数的React组件中，构造函数必须以super(props)开头

- 为了提高可读性，把返回的React元素拆分成多行，同时在最外层加上小括号，这样JavaScript解析的时候就不会在return的后面自动插入一个分号从而破坏代码结构了

- 在React中的命名规范，通常会将代表事件监听的prop命名为on[Event]，将处理事件监听方法命名为handle[Event]

- React DOM采用小驼峰命名来定义属性名称

- 使用JSX语法时，需要传入一个函数作为事件处理函数，而不是一个字符串

- 在React中，不能通过返回false的方式阻止默认行为，必须显示的使用preventDefault

#

- 在JavaScript class中，每次定义其子类的构造函数时，都需要调用super方法，因此，在所有含有构造函数的React组件中，构造函数必须以super(props)开头

- 为了提高可读性，把返回的React元素拆分成多行，同时在最外层加上小括号，这样JavaScript解析的时候就不会在return的后面自动插入一个分号从而破坏代码结构了

- 在React中的命名规范，通常会将代表事件监听的prop命名为on[Event]，将处理事件监听方法命名为handle[Event]

- React DOM采用小驼峰命名来定义属性名称

- 使用JSX语法时，需要传入一个函数作为事件处理函数，而不是一个字符串

- 在React中，不能通过返回false的方式阻止默认行为，必须显示的使用preventDefault

- 在JavaScript中，true && expression总是会返回expression，而false && expresion总是会返回false

- key帮助React识别哪些元素改变了，比如添加或者删除，因此应当给数组中的每一个元素赋予一个确定的标识，通常使用数据中的id来作为元素的key值

- 元素的key只有放在就近的数组上下文中才有意义

- key只是在兄弟节点之间必须唯一

- Profiler能添加在React树中的任何地方来测量树中这部分渲染所带来的开销，它需要两个prop：一个是id(string)，一个是当组件树中的组件提交更新的时候被React调用的回调函数onRender(function)

- 使用ES6的class关键字创建的React组件，组件中的方法遵循与常规ES6 class相同的语法规则，这意味着这些方法不会自动绑定this到这个组件实例，需要在constructor中显式地调用.bind(this)

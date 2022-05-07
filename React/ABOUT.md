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

## API

- React.Component 是使用ES6 classes方法定义React组件的基类

- React.PureComponent 与React.Component很类似

  两者的区别：React.PureComponent中以浅层对比prop和state的方式实现了shouldComponentUpdate

  React.PureComponent中的shouldComponentUpdate()仅作对象的浅层比较，如果对象中包含复杂的数据结构，则有可能因为无法检测深层的差别，产生错误的比对结果，仅在props和state较为简单时才使用

- React.memo 是高阶组件，与React.PureComponent非常相似，但只适用于函数组件，而不适用class组件

- createElement() 创建并返回指定类型的新React元素，参数类型既可以是标签名字符串（如'div'或'span'），也可以是React组件类型（class组件或函数组件），或是React fragment类型

- 几个操作元素的API

  cloneElement() 以element元素为样板克隆并返回新的React元素

  isValidElement() 验证对象是否为React元素，返回值为true或false

  React.Children 提供了用于处理this.props.children不透明数据结构的实用方法：
  
  React.Children.map(children, function[(thisArg)]) 在children里的每个直接子节点上调用一个函数，并将this设置为thisArg，如果children是一个数组，它将遍历并为数组中的每个子节点调用该函数；如果子节点为null或是undefined，则此方法返回null或是undefined，而不会返回数组

  React.Children.forEach(children, function[(thisArg)])

  React.Children.count(children) 返回children中的组件总数量，等同于通过map或者forEach调用回调函数的次数

  React.Children.only(children) 验证children是否只有一个子节点（一个React元素），如果有则返回它，否则此方法会抛出错误

  React.Children.toArray(children) 将children这个复杂的数据结构以数组的方式扁平展开并返回，并为每一个子节点分配一个key

- 减少不必要嵌套的组件

  React.Fragment 能在不额外创建DOM元素的情况下，让render()方法返回多个元素

- React.createRef 创建一个能够通过ref属性附加到React元素的ref

- React.forwardRef 创建一个React组件，这个组件能够将其接收的ref属性转发到其组件树下的另一个组件中

- Suspense使得组件可以等待某些操作结束后，再进行渲染

  React.lazy 允许定义一个动态加载的组件

  React.Suspense 可以指定加载器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件

## React.Component

- 挂载：当组件实例被创建并插入DOM中时，其生命周期调用顺序如下

  constructor() 常用

  static getDerivedStateFromProps() 罕见

  render() 常用

  componentDidMount() 常用

- 更新：当组件的props或state发生变化时会触发更新，生命周期函数调用顺序如下

  static getDerivedStateFromProps() 罕见

  shouldComponentUpdate() 罕见

  render() 常用

  getSnapshotBeforeUpdate() 罕见

  componentDidUpdate() 常用

- 卸载：当组件从DOM中移除时调用

  componentWillUnmount()

- 错误处理：当渲染过程中，生命周期，或子组件的构造函数中抛出错误时，调用如下方法

  static getDerivedStateFromError()

  componentDidCatch()

- 其他的APIs

  setState()

  forceUpdate()

- class属性

  defaultProps

  displayName

- 实例属性

  props

  state

### 常用的生命周期方法

- render()

  当render被调用时，它会检查this.props和this.state的变化，并返回以下类型之一

  React元素，通常通过JSX创建

  数组或fragments，使得render方法可以返回多个元素

  Portals，可以渲染子节点到不同的DOM子树中

  字符串或数值类型，会被渲染为文本节点

  布尔类型或null，什么都不渲染

  render()函数应该为纯函数，在不修改组件的state的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互

- constructor()

  如果不初始化state或不进行方法绑定，则不需要为React组件实现构造函数

  在React组件挂载之前，会调用它的构造函数。在为React.Component子类实现构造函数时，应在其他语句之前前调用 super(props)，否则，this.props在构造函数中可能会出现未定义的bug

  通常，在React中，构造函数仅用于以下2种情况：1、通过给this.state赋值对象来初始化内部state 2、为事件处理函数绑定实例

  在constructor()函数中不要调用setState()方法，只能在构造函数中直接为this.state赋值

- componentDidMount()

  会在组件挂载后（插入DOM树中）立即调用

- componentDidUpdate()

  在更新之后会被立即调用，首次渲染不会执行该方法

- componentWillUnmount()

  会在组件卸载或销毁之前直接调用，在此方法中执行必要的清除操作

## React术语词汇表

- 单页面应用（single-page application），是一个应用程序，它可以加载单个HTML页面，以及运行应用程序所需的所有必要资源，与页面或后续页面的任何交互，都不再需要往返server加载资源，即页面不会重新加载

- Compiler 编译器

  常用的：Babel

- Bundler 打包工具

  常用的：webpack Browserify

- Package 管理工具，帮助管理项目依赖的工具

  常用的：npm yarn

- CDN 代表内容分发网络（Content Delivery Network），它会通过一个遍布全球的服务器网络来分发缓存的静态内容

- JSX 是一个JavaScript语法扩展

  最终会被编译为React.createElement()函数调用

- 元素 是构成React应用的基础砖块，描述了在屏幕上想看到的内容

- 组件 是可以复用的小的代码片段，返回要在页面中渲染的React元素

- props 是React组件的输入，是从父组件向下传递给子组件的数据（只读）

- props.children 包含组件的开始标签和结束标签之间的内容

- state 当组件中的一些数据在某些时刻发生变化时，就需要用state来跟踪状态

  与props之间最重要的区别：props由父组件传入，而state由组件本身管理，组件不能修改props，但能修改state

- 生命周期方法 用于在组件不同阶段执行自定义功能

  在组件被创建并插入到DOM时（即挂载中阶段(mounting)），组件更新时，组件取消挂载或从DOM中删除，都有可以使用的生命周期方法

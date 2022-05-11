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

- React.createElement('h1', {id: 'title'}, 'Hello, React') 标签名、标签属性、标签内容

## 组件&props

- 函数组件

  function Welcome(props) { return ...}

- class组件

  class Welcome extends Reacr.Component { render() { return...} }

- props：当React元素为用户自定义组件时，它会将JSX所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为props

  props是只读的

## State&生命周期

- state与props类似，但是state是私有的，并且完全受控于当前组件

- 当Clock组件第一次被渲染到DOM中的时候，就为其设置一个计时器，这在React中被称为挂载（mount）
  
  componentDidMount() {}

- 同时，当DOM中的Clock组件被删除的时候，应该清除计时器，这在React中被称为卸载（unmount）

  componentWillUnmount() {}

- 使用state

  1、不要直接修改state，而是应该使用setState()

  2、State的更新可能是异步的

  3、State的更新会被合并

- 数据时向下流动的

  不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且他们也不关心它是函数组件还是class组件，这就是为什么称state为局部的或是封装的的原因，除了拥有并设置它的组件，其它组件都无法访问，组件可以选择把它的state作为props向下传递到它的子组件中

## 事件处理

- React事件的命名采用小驼峰式（camelCase），而不是纯小写

- 使用JSX语法时需要传入一个函数作为事件处理函数，而不是一个字符串

- 必须显示的使用preventDefault阻止默认事件

## 条件渲染

- React中的条件渲染和JavaScript中的一样，使用JavaScript运算符if或者条件运算符去创建元素来表现当前的状态，然后让React更加它们来更新UI

- 与运算符&& 通过花括号包裹代码，可以在JSX中嵌入表达式

- 三目运算符 condition ? true : fales

## 列表&key

- 渲染多个组件 可以通过使用{}在JSX内构建一个元素集合

- 基础列表组件 创建元素时必须包括一个特殊的key属性

- key 帮助React元素识别哪些元素改变了，比如被添加或删除，因此应当给数组中每一个元素赋予一个确定的标识

  一个元素的key最好是这个元素列表中拥有的独一无二的字符串，通常我们使用数据中的id作为元素的key

  当元素没有确定的id的时候，万不得已可以使用元素索引index作为key

- key值在兄弟节点之间必须唯一，不需要是全局唯一的

## 表单

- 受控组件

  在HTML中，表单元素（如input textarea select）通常自己维护state，并根据用户输入进行更新，而在React中，可变状态（mutable state）通常保存在组件的state属性中，并且只能够通过使用setState()来更新

  渲染表单的React组件还控制着用户输入过程表单发生的操作，被React以这种方式控制取值的表单输入元素就叫做受控组件

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

- key 是在创建元素数组时，需要用到的一个特殊字符串属性，帮助React识别出被修改、添加或者删除的item

- ref 由React.createRef()函数创建的对象、或者一个回调函数、或者一个字符串

- 事件 使用React元素处理事件时，有一些语法上的差异

  React事件处理器使用classCase(驼峰式命名)，而不使用小写命名

  通过JSX，可以之家传入一个函数，而不是传入一个字符串，来作为事件处理器

- 协调 当组件的props或state发生变化时，React通过将最新返回的元素与原先渲染的元素进行比较，来决定是否有必要进行一次实际的DOM更新，当它们不相等时，React才会更新DOM，这个过程被称为协调

## HOOK

- Hook是一个特殊函数，可以购入React的特性

### HOOK使用规则

- 只能在函数最外层调用，不要在循环、条件判断或子函数中调用

- 只能在React的函数组件中调用Hook

### 自定义Hook

- 自定义Hook是一个函数，其名称以use开头，函数内部可以调用其他的Hook

### Hook API

- useState 返回一个state，以及更新state的函数

  const [state, setState] = useState(initialState);

  在初始渲染期间，返回的状态（state）与传入的第一个参数（initialState）值相同

  setState函数用于更新state，它接收一个新的state值并将组件的一次重新渲染加入队列

- useEffect 该Hook接收一个包含命令式、且可能有副作用代码的函数，使用useEffect完成副作用操作

  useEffect(didUpdate);

- useContext

  接收一个context对象（React.createContext的返回值）并返回该context的当前值 当前的context值由上层组件中距离当前组件最近的<MyContext.Provider>的value prop决定

  const value = useContext(MyContext); 参数必须是context对象本身

### 额外的Hook

- useReducer useState的替代方案，接收一个形如(state, action) => newState的reducer，并返回当前的state以及与其配套的dispatch方法

  const [state, dispatch] = useReducer(reducer, initialArg, init);

- useCallback 返回一个memoized回调函数

- useMemo 返回一个memoized值
  
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

- useRef 返回一个可变的ref对象，其.current属性被初始化为传入的参数（initialValue）,返回的ref对象在组件的整个生命周期内持续存在

- useImperativeHandle 可以让在使用ref时自定义暴露给父组件的实例值

  应当与forwardRef一起使用

- useLayoutEffect 其函数签名与useEffect相同，但它在所有的DOM变更之后同步调用effect，可以用它来读取DOM布局并同步触发重渲染

- useDebugValue 可用于在React开发者工具中显示自定义的hook的标签

### 如何实现shouldComponentUpdate

- 用React.memo包裹一个组件来对它的props进行浅比较

  const Button = React.memo((props) => { });

  React.memo等效于PureComponent，但它只比较props，如果函数返回true，就会跳过更新

  React.memo不比较state，因为没有单一的state对象可供比较

### 如何记忆计算结果

- useMemo Hook允许通过记住上一次计算结果的方式在多次渲染的之间缓存计算结果

  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  这段代码会调用computeExpensiveValue(a, b)，但如果依赖数组[a, b]自上次赋值以来就没改变过，useMemo会跳过二次调用，只是简单的复用它上一次返回的值

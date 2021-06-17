# React 
### React vs Vue
   - 
### React 使用
   - 基本使用 --- 常用, 必须会
   - 高级特性 --- 不常用, 但体现深度
   - Redux 和 React-router 使用
### React 基本使用
### JSX 基本使用
   - 变量 表达式
   - class style
   - 子元素和组件
### 条件判断
   - if else
   - 三元表达式
   - 逻辑运算符 && ||
### 渲染列表
   - map
   - key
### 事件
   - bind this
     - 改变this指向时尽量写在 constructor 中
     - 静态方法形式不用改变this 指向 有点像箭头函数
   - 关于 event 参数
     - event 是 SyntheticEvent 是原生事件对象
     - event.nativeEvent 是原生事件对象
     - 所有的事件, 都被挂载到 document 上 17绑定到root上
     - 和 DOM 事件不一样, 和Vue 事件也不一样
   - 传递自定义参数
### 表单
   - 受控组件
   - input textarea select&option 用 value
   - checkbox radio 用 checked
   - label 中 for 用 htmlFor代替
### 组件使用
   - props 传递数据
   - props 传递函数
   - props 类型检查 prop-types 插件做
### setState
   - 不可变值(函数式编程, 纯函数)
     - 不要直接修改state
     - 可以使用 concat改变state值
     - 对象
       - Object.assign({}, {}, {})
   - 可能是异步更新
     - 拿到最新的值需要些回调的形式
     - setTimeout是宏任务 事件也是 是同步的
   - 可能会被合并
     - 传入对象会被合并, 执行结果只一次
     - 传入函数, 不会被合并 (preState, props)
### 组件生命周期
   - constructor
   - render
   - componentDidMount
   - render
   - componentDidUpdate
   - componentWillUnmount
   - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
### React 高级特性
   - 函数组件
     - 纯函数, 输入props 输出JSX
     - 没有实例, 没有生命周期, 没有state
     - 不能扩展其他方法
   - 非受控组件
     - ref
     - defaultValue defaultChecked
     - 手动操作DOM元素
     - 使用场景
       - type="file" 必须操作DOM
       - 某些富文本编辑器, 需要传入DOM元素
     - 受控组件 VS 非受控组件
       - 优先使用受控组件, 符合React 设计原则
       - 必须操作DOM 时, 再使用非受控组件
   - props.children
     - 有点类似于slot
   - Portals
     - 传送门 类似于Teleport
     - ReactDOM.createPortal(html,document.body)
     - 场景
       - overflow:hidden
       - 父组件z-index 值太小
       - fixed 需要放在body 第一层级
   - context
     - 公共信息(语言 主题) 如何传递给每个组件?
     - 用props 太繁琐
     - 用redux 小题大做
     - 使用步骤
       - ThemeContext = React.createContext(default)
       - 在最外层使用`<ThemeContext.Provider value="state值">`
       - 子组件中 static contextType = ThemeContext
       - render 中可以通过 this.context获取
       - function 函数用 ThemeContext.Consumer {value=>(html)}
   - 异步组件
     - import()
     - ocnst ContextDemo = React.lazy(()=>import(路径))
     - React.Suspense
       - `<React.Suspense fallback={<div>Loading...</div>}><ContextDemo/></React.Suspense>`
   - 性能优化
     - shouldComponentUpdate(简称SCU)
     - PureComponent 和 React.memo
     - immutable.js
   - 高阶组件HOC
   - Render Props
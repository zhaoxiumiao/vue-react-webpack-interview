### Vue3比Vue2 有什么优势？
   - 性能更好
   - 体积更小
   - 更好的ts支持
   - 更好的代码组织
   - 更好的逻辑抽离
   - 更多新功能
### Vue3生命周期
   - Options API 生命周期
   - Composition API 生命周期
     - beforeDestroy 改为beforeUnmount
     - destroyed 改为 unmounted
     - 其他沿用Vue2 的生命周期
### Composition API对比 Options API
   - Composition API 带来了什么?
     - 更好的代码组织
     - 更好的逻辑复用
     - 更好的类型推导
   - Composition API 和 Options API 如何选择？
     - 不建议共用， 会引起混乱
     - 小型项目， 业务逻辑简单， 用Options API
     - 中大型项目 逻辑复杂 用Composition API
   - 别误解Composition API
     - Composition API 属于高阶技巧, 不是基础必会
     - Composition API 是为解决复杂业务逻辑而设计
     - Composition API 就像Hooks 在 React 中的地位
### 如何理解 ref toRef 和 toRefs
   - ref
     - 生成值类型的响应式数据
     - 可用于模板和reactive
     - 通过.value修改值
     - 可以用来获取dom元素
   - toRef
     - 针对一个响应式对象(reactive 封装) 的prop
     - 创建一个ref , 具有响应式
     - 两者保持引用关系
     - 语法 toRef(state, 'prop')
   - toRefs
     - 将响应式对象（reactive封装）转换为普通对象
     - 对象的每个prop都是对应的ref
     - 两者保持引用关系
   - 最佳使用方式
     - 用reactive 做对象的 响应式, 用ref 做值类型响应式
     - setup中返回 toRefs(state), 或者 toRef(state, 'xxx')
     - ref 的变量命名都用 xxxRef
     - 合成函数返回响应式对象时， 使用toRefs
### 为什么需要用ref
   - 返回值类型，会丢失响应式
   - 如在 setup computed 合成函数 都有可能返回值类型
   - Vue 如果不定义 ref , 用户将自造ref 反而混乱
### 为何需要 .value?
   - ref 是一个对象(不丢失响应式), value 存储值
   - 通过.value 属性的get 和 set 实现响应式
   - 用于模板 reactive时, 不需要.value, 其他情况都需要.value
### 为何需要 toRef toRefs?
   - 初衷: 不丢失响应式，把对象数据分解/扩散
   - 前提: 针对的时响应式对象（reactive封装的） 非普通对象
   - 注意: 不创造响应式，而是延续响应式
### Vue3 升级了哪些重要功能
   - createApp
   - emits属性
     - 使用`emits['事件名']`
     - `setup(props, {emit}){emit('事件名', 传递的数据)}`
     
   - 生命周期
   - 多事件
     - 定义多个事件使用逗号隔开 
   - Fragment
     - 最外层不必使用div包裹
   - 移除.sync
   - 异步组件的写法
     - difineAsyncComponent(()=>{import(路径)})
   - 移除 filter
   - Teleport(传送门)
     - `<teleport to="节点名">`
   - Suspense
     - 在组件没加载出来时规定显示的东西
   - Composition API
     - reactive
     - ref相关
     - readonly
       - 创建一个只读数据副本
     - watch和watchEffect
     - setup
     - 生命周期钩子函数
### Composition API 如何实现逻辑复用
   - 抽离逻辑代码到一个函数
   - 函数命名约定为 useXxxx格式 (React Hooks也是)
   - 在setup 中引用 useXxx函数
### Vue 如何实现响应式
   - 回顾Vue2.x 的 Object.defineProperty
   - 学习Proxy 语法
   - Vue3 如何用Proxy 实现响应式?
### Proxy 实现响应式
   - 回顾Object.defineProperty
     - `Object.defineProperty(target, key, {get(){return value},set(){}})`
     - 新增和删除是监听不到的
     - 深度监听需要一次性递归
     - 无法监听新增属性/删除属性(Vue.set Vue.delete)
     - 无法原生监听数组，需要特殊处理
   - Proxy 实现响应式
     - 基本使用
     - Reflect
     - 实现响应式
### Reflect作用
   - 和Proxy 能力一一对应
   - 规范化 标准化 函数式
   - 代替Object上的工具函数
### Proxy 实现响应式
   - 深度监听, 性能更好
   - 可监听 新增/删除属性
   - 可监听数组变化
   - 总结
     - proxy 能规避Object.defineProperty 的问题
     - Proxy 无法兼容所有浏览器 , 无法 polyfill
### .sync修饰符 v-model
   - .sync就是prop双向绑定
   - v-mode 就是写法变了
### watch 和 watchEffect 的区别
   - 两者都可以监听data属性变化
   - watch 需要明确监听哪个属性
   - watchEffect 会根据其中的属性，自动监听其变化
### setup 中如何获取组件实例
   - 在setup 和其他Composition API中没有this
   - 可通过getCurrentInstance 获取当前实例
   - 若使用Options API 可照常使用this
### Vue3 为何比 Vue2 快
https://vue-next-template-explorer.netlify.app/
   - Proxy 响应式
   - PatchFlag
     - 编译模板时, 动态节点做标记
     - 标记, 分为不同的类型，如TEXT PROPS
     - diff算法时, 可以区分静态节点，以及不同类型的动态节点
   - hoistStatic 
     - 将静态节点的定义，提升到父作用域，缓存起来
     - 多个相邻的静态节点， 会被合并起来
     - 典型的拿空间换时间的优化策略
   - cacheHandler
     - 缓存事件
   - SSR 优化
     - 静态节点直接输出, 绕过了 vdom
     - 动态节点， 还是需要动态渲
   - tree-shaking
     - 编译时，根据不同的情况，引入不同的API
### Vite 是什么
   - 一个前端打包工具，Vue 作者发起的项目
   - 借助Vue的影响力，发展比较快，和webpack 竞争
   - 优势: 开发环境下无需打包，启动快
### Vite 为何启动快？
   - 开发环境使用ES6Moudule, 无需打包---非常快
   - 生产环境使用rollup 并不会快很多
### Composition API 和 React Hooks 对比
   - 前者 setup 只会被调用一次, 而后者函数会被多次调用
   - 前者无需 useMemo useCallback, 因为setup 只调用一次
   - 前者无需顾虑调用顺序，而后者需要保证hooks的顺序一致性
   - 前者 reactive + ref 比后者 useState 要难理解
### Vue3 总结
   - 新功能
   - 原理
   - vite - ES6 module
### 面试题
   - Vue3 比 Vue2 有什么优势
   - 描述Vue3 生命周期
   - 如何看待 Composition API 和 Options API
   - 如何理解 ref toRef 和 toRefs
   - Vue3 升级了哪些功能？
   - Vue3 如何实现代码逻辑复用
   - Vue3 如何实现响应式？
   - watch 和 watchEffect 的区别是什么
   - setup 中如何获取组件实例?
   - Vue3 为何比Vue2 快？
   - Vite 是什么 ?
   - Composition API 和 React Hooks 的对比


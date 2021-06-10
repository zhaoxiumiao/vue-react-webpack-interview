# vue 原理
### Vue响应式
   - 组件data的数据一旦变化, 立刻触发视图的更新
   - 实现数据驱动视图的第一步
   - 核心API - Object.defineProperty
   - 如何实现响应式, 代码演示
   - Object.defineProperty 的一些缺点(Vue3.0启用Proxy)
   - Proxy 有兼容性问题
   - Proxy 兼容性不好, 而且无法polyfill
   - Vue2.x 还会存在一段时间, 所以都带学
   - Object.defineProperty 实现响应式
     - 监听对象, 监听数组
     - 复杂对象, 深度监听
     - 几个缺点
       - 深度监听, 需要递归到底, 一次性计算量大
       - 无法监听新增属性/删除属性(Vue.set Vue.delete)
       - 无法原生监听数组, 需要特殊处理
### 虚拟DOM(Virtual DOM) 和 diff
   - vdom 是实现vue 和 React 的重要基石
   - diff 算法是vdom 中最核心 最关键的部分
   - vdom 是一个热门话题, 也是面试中的热门问题
   - DOM操作非常耗费性能
   - 以前用jQuery , 可以自行控制DOM操作的时机, 手动调整
   - Vue 和 React 是数据驱动视图, 如何有效控制DOM操作?
   - 为了减少DOM操作 - vdom
     - 有了一定复杂度,想减少计算次数比较难
     - 能不能把计算, 更多的转移为JS计算? 因为JS执行速度很快
     - vdom - 用JS模拟DOM结构, 计算出最小的变更, 操作DOM
       - 一个案例
         ```html
         <div id="div1" class="container">
            <p>vdom</p>
         </div>
         ``` 
         
         ```js
         {
            tag: 'div',
            props:{
               className: 'container,
               id: 'div1'
            },
            children:[
               {
                  tag:'p',
                  childern: 'vdom'
               }
            ]
         }
         ```
     - 通过snabbdom 学习 vdom
       - 简洁强大的vdom库, 易学易用
       - Vue 参考它实现的vdom 和 diff
       - https://github.com/snabbdom/snabbdom
       - Vue3.0重写了vdom 的代码, 优化了性能
       - 但vdom 的基本理念不变, 面试考点不变
       - 重点
         - h函数
         - vnode 数据结构
         - patch 函数
### diff算法
   - diff 算法是vdom中最核心 最关键的部分
   - diff 算法能在日常使用vue React 中体现出来(如 key)
   - diff 算法是前端热门话题, 面试"宠儿"
   - 概述
     - diff 即对比, 是一个广泛的概念, 如linux diff 命令, git diff 等
     - 两个js对象也可以做diff , 如https://github.com/cujojs/jiff
     - 两颗数做diff, 如这里vdom diff
   - 优化时间复杂度到O(n)
     - 只比较同一层, 不跨级比较
     - tag不相同, 则直接删掉重建, 不再深度比较
     - tag和key, 两者都相同, 则认为是相同节点, 不再深度比较
   - snabbdom - 源码解读
   - diff 算法总结
     - patchVnode
     - addVnodes removeVnodes
     - updateChildren (key 的重要性)
   - vdom 和 diff - 总结
     - 细节不重要， updateChildren 的过程不重要， 不要深究
     - vdom核心概念很重要: h vnode patch diff key 等
     - vdom 存在的价值更重要: 数据驱动视图，控制DOM操作
### 模板编译 
   - 模板事vue开发中最常用的部分， 即与使用相关联的原理
   - 它不是html, 有指令 插值 js表达式， 到底是什么
   - 面试不会直接问，但会通过"组件渲染和更新过程" 考察
   - JS的with语法
     - 改变{}内自由变量的查找规则，当做obj属性来查找
     - 如果找不到匹配的obj属性, 就会报错
     - with 要慎用，它打破了作用域规则，易读性变差
   - vue template complier 将模板编译为render函数
   - 执行render函数生成vnode
   - 
### v-for为何使用key
   - v-show 通过CSS display 控制显示和隐藏
   - v-if 组件真正的渲染和销毁, 而不是显示和隐藏
   - 频繁切换显示状态用v-show, 否则用v-if
### v-for 中用key
   - 必须用key, 且不能是index 和 random
   - diff算法中通过tag和key来判断, 是否是sameNode
   - 减少渲染次数, 提升渲染性能
### 描述 Vue 组件生命周期(父子组件)
   - 创建
     - beforeCreate
     - created
   - 挂载
     - beforeMount
     - mounted
   - 更新
     - beforeUpdate
     - updated
   - 销毁
     - beforeDestroy
     - destroyed
   - 父子组件中
     - 父中的created执行之后执行子组件中的created
     - 子中的updated先执行之后父中的updated再执行
### Vue 组件如何通讯(常见)
   - 父子组件props 和 this.$emit
   - 自定义事件 event.$on event.$off event.$emit
   - vuex
### 描述组件渲染和更新的过程
   - 将template模板编译成 render函数
   - 触发响应式  监听data数据 getter
   - 触发render函数生成vnode path(ele, vnode)
   - 更新数据 触发setter 
   - 再次调用render函数生成新的 vnode
   - path(oldvnode, newVnode)
### 双向数据绑定v-model 的实现原理
   - input 元素的 value = this.name
   - 绑定input 事件 this.name = $event.target.value
   - data更新触发re-render
### 对MVVM 的理解
   - M 数据 data
   - V 视图 DOM
   - VM 就是vue干的事
### computed 有何特点
   - 缓存, data不变不会重新计算
   - 提高性能
### 为何组件data 必须是一个函数?
   - 因为.vue文件实际上是一个class类
   - 每个地方去使用这个组件都是实例化了这个class类
   - 如果不是一个函数的话数据就共享了
### ajax 请求应该放在哪个生命周期
   - mounted
   - JS是单线程的, ajax异步获取数据 ajax是宏任务 dom渲染完后才会执行
   - 放在mounted 之前没有用, 只会让逻辑更加混乱
### 如何将组件所有的 props 传递给子组件?
   - $props
   - `<User v-bind = "$props">`
   - 细节知识点 优先级不高
### 如何自己实现 v-model
   - 使用model{prop:'text', event:'change'}
   - :value = "text" @input="$emit('change', $event.target.value)"
   - props:`['text']`
### 多个组件有相同的逻辑, 如何抽离?
   - mixins:`[mymixin]`
   - 以及mixin中的一些缺点
     - 变量来源不明确, 不利于阅读
     - 多 mixin 可能会造成命名冲突
     - mixin 和组件可能出现多对多的关系, 复杂度高
### 何时要使用异步组件?
   - 加载大组件
   - 路由异步加载
   - () => import('路径')
### 何时使用 keep-alive?
   - 缓存组件, 不需要重复渲染
   - 如多个静态 tab 页的切换
   - 优化性能
### 何时需要使用 beforeDestroy
   - 解除自定义事件 event.$off
   - 清除定时器
   - 解除自定义的DOM事件, 如window scroll等
   - 三者不做都有可能造成内存泄漏
### 什么是作用域插槽





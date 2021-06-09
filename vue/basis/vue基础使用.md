# vue 基础使用

### 指令 插值
   - 插值 表达式
     - 在vue中使用`{{}}`在html中进行插值
     - 在`{{}}` 可以使用JS表达式但是不能是JS语句
   - 指令 动态属性
     - v-bind 或 : 属性值 是一个动态属性
   - v-html: 会有XSS风险 会覆盖子组件
     - v-html 写html语法 中有xss风险 以及覆盖子元素特性
### computed和watch 
   - computed
     - computed有缓存, data不变则不会重新计算
     - computed 可以使用get set方法具体使用看案例
   - watch
     - watch如何深度监听?
       - `deep:true`
     - watch监听引用类型,拿不到oldVal
### class 和 style 
   - 使用动态属性
     - class可以使用对象形式 `{变量名: boolean, ...}`
     - 也可以使用数组形式 `[变量名, ...]`
     - style `{fontSize: '40px', // 转换为驼峰式color: 'red',backgroundColor: '#ccc' // 转换为驼峰式}`
   - 使用驼峰式写法
### 条件渲染
   - v-if v-else 用法, 可使用变量, 也可使用===表达式 
   - v-if 和 v-show 的区别?
     - v-if dom上是找不到没有匹配到的情况的
     - v-show 可以在dom 上找到 设置了display: none
   - v-if 和 v-show 的使用场景?
     - v-if 适用于更新不太频繁的时候用
     - v-show 适用于更新频繁时用
### 循环(列表) 渲染
   - 如何遍历对象? --- 也可以使用v-for 
   - key 的重要性. key不能乱写( 如random 或者 index)
   - v-for 和 v-if 不能一起使用!
     - v-if 优先级要高于 v-for
### 事件
   - event 参数, 自定义参数
     - event 是原生的
     - 事件被挂载到当前元素 和DOM事件一样
   - 事件修饰符, 按键修饰符
     - 事件修饰符
       - .stop 阻止事件冒泡
       - prevent 阻止默认事件
       - .capture 事件捕获模式
       - .self 自身触发的事件
       - 修饰可以串联
     - 按键修饰符
       - .ctrl 即使按Alt 或 shift也会触发
       - .ctrl.exact 只有ctrl被按下时触发
       - .exact 没有任何键被按下时触发
   - 观察 事件被绑定到哪里
### 表单
   - v-model
   - 常见表单项 textarea checkbox radio select
   - 修饰符 lazy number trim 
### Vue组件使用
   -  props 和 $emit
      -  props两种写法 `[]` 以及对象 `{}`
      -  $emit 用来触发父组件传来的一个事件
   -  组件间通讯 - 自定义事件
      -  自定义事件就是通过 new Vue() 进行兄弟组件通讯 
   -  组件生命周期
      -  挂载阶段
         -  beforeCreate
         -  created
            -  vue实例初始化完毕
         -  beforeMount
         -  mounted  
            -  vue页面已经渲染完毕
      -  更新阶段
         -  beforeUpdate
         -  updated  
      -  销毁阶段
         -  beforeDestroy
            -  解除绑定
            -  销毁子组件以及事件监听器
         -  destroyed
      - 初始化实例时 是由父组件到子组件的这个顺序
      - 渲染时时由内到外，先渲染子组件再渲染父组件
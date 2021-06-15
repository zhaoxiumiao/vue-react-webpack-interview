### webpack介绍
   - webpack 已是前端打包构建的不二选择
   - 每日必用，面试必考
   - 成熟的工具，重点在于配置和使用，原理并不高优
### 关于 webpack 5
   - webpack 5 主要是内部效率的优化
   - 对比webpack4 , 没有太多使用上的改动
   - 你可以直接使用webpack5 来学习课程
### 基本配置
   - 拆分配置和merge
   - 启动本地服务
   - 处理ES6
   - 处理样式
   - 处理图片
### 高级配置
   - 多入口
   - 抽离CSS文件
   - 抽离公共代码
   - 懒加载
   - 处理JSX
   - 处理Vue
### 优化打包效率 - 开发体验和效率
   - 优化babel-loader
   - IgnorePlugin 避免引入无用模块
     - IgnorePlugin 直接不引入, 代码中没有
   - noParse 避免重复打包
     - noParse 引入，但不打包
   - happyPack 多进程打包
     - js单线程, 开启多进程打包
     - 提高构建速度（特别是多核cpu）
   - ParallelUglifyPlugin 多进程压缩JS
     - webpack 内置Uglify 工具压缩 JS
     - JS单线程，开启多线程压缩更快
     - 和happyPack 同理
### 优化产出代码 - 产品性能
### 构建流程概述
### babel
### 面试题
   - 前端代码为何要进行构建和打包？
   - module chunk bundle 分别什么意思, 有何区别？
     - module - 各个源码文件，webpack 中一切皆模块
     - chunk - 多模块合并成的, 如entry import() splitChunk
     - bundle - 最终的输出文件
   - loader 和 plugin 的区别?
   - webpack 如何实现懒加载？
   - webpack 常见性能优化
   - babel-runtime 和 babel-polyfill 的区别
   - (模块化)
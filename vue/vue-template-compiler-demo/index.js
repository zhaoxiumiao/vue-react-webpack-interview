const compiler = require('vue-template-compiler')

//插值
const template = `<p>{{message}}</p>`
//with(this){return _c('p',[_v(_s(message))])}

//编译
const res = compiler.compile(template)
console.log(res.render);
// 引入 css
import './style/style1.css'
import moment from 'moment'
import 'moment/locale/zh-cn' //手动引入中文语言包
moment.locale('zh-cn')
console.log('locale', moment.locale());
console.log('date', moment().format('ll'));

// import _ from 'lodash'
// console.log(_.each)

console.log('window.ENV', ENV)

const print = (info) => {
    console.log(info)
}
print('hello webpack 5')

import { sum } from './math'
const sumRes = sum(10, 2)
console.log('sumRes', sumRes)

// 引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)

//懒加载
setTimeout(()=>{

    // 回顾vue React 异步组件
    import('./dynamic-data.js').then(res=>{
        console.log(res.default.message);
    })
}, 1500)

if(module.hot){ //热更新
    module.hot.accept(['./math'], ()=>{
        const sumRes = sum(10, 30)
        console.log('sumRes in hot', sumRes);
    })
}


function updateView(){
    console.log('视图更新');
}

//重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象, 原型指向 oldArrayProperty, 在扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty)
const arr = ['push', 'pop', 'shift', 'unshift', 'splice']
arr.forEach(methodName =>{
    arrProto[methodName] = function(){
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
    }
})

function defineRactive(target, key, value){
    //深度监听
    observer(value)

    // 核心API
    Object.defineProperty(target, key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue !== value){
                // 设置新值处于深度监听
                observer(newValue)
                // 注意, value 一直处在闭包中
                value = newValue

                //触发更新视图
                updateView()
            }
        }
    })
}

function observer(target){
    if(typeof target !== 'object' || target == null){
        return target
    }

    if(Array.isArray(target)){
        target.__proto__ = arrProto
    }

    for(let key in target){
        defineRactive(target, key, target[key])
    }
}

const data = {
    age: 20,
    name: 'fool',
    info: {
        address: '北京' // 需要深度监听
    },
    nums: [10, 20, 30]
}

observer(data)

// data.age = 30
// // data.age = {num: 20}
// // data.age.num = 40
// data.name = '双越'
// data.info.address = '上海'
// data.x = '100' //新增
// delete data.name // 删除

data.nums.push(40)

const data = {}
let names = 'zhangsan'
Object.defineProperty(data, 'names', {
    get: function(){
        console.log('get');
        return names
    },
    set: function(newVal) {
        console.log('set');
        console.log(newVal);
        names = newVal
        console.log(data.names);
    }
})

console.log(data.names);
data.names = 'lisi'


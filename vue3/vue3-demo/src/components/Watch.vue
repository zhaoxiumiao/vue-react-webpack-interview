<template>
    <p>watch vs watchEffect</p>
    <p>{{numberRef}}</p>
    <p>{{name}} {{age}}</p>
</template>

<script>
import {reactive, ref, toRefs, watch , watchEffect} from 'vue'

export default {
    name: 'Watch',
    setup(){
        const numberRef = ref(100)
        const state = reactive({
            name:'双越',
            age: 20
        })

        watchEffect(()=>{
            // 初始时，一定会执行一次
            console.log('hello watchEffect');
        })
        watchEffect(()=>{
            console.log('state.name', state.name);
        })
        watchEffect(()=>{
            console.log('state.age', state.age);
        })
        watchEffect(()=>{
            console.log('state.name', state.name);
            console.log('state.age', state.age);
        })


        // watch(numberRef, (newNumber, oldNumber) =>{
        //     console.log('ref watch',newNumber, oldNumber);
        // }
        // ,{
        //     immediate: true // 初始化之前就监听, 可选
        // }
        // )

        // setTimeout(()=>{
        //     numberRef.value = 200
        // },1500)

        // watch(
        //     // 第一个参数, 确定要监听哪个属性
        //     ()=> state.age,
        //     //第二个参数， 回调函数
        //     (newAge, oldAge) =>{
        //         console.log('state watch', newAge, oldAge);
        //     },
        //     //第三个参数是配置项
        //     {
        //         immediate: true,
        //         deep: true
        //     }
        // )

        setTimeout(()=>{
            state.age = 25
        },1500)

        setTimeout(()=>{
            state.name = 'fool'
        },3000)

        return{
            numberRef,
            ...toRefs(state)
        }
    }
}
</script>

<style>

</style>
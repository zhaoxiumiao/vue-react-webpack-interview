<template>
    <div>
        <input type="text" v-model="name" v-on:click="changeName">
        <input type="text" v-model="info.city" @click="change">
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '双越',
            info: {
                city: '你好'
            }
        }
    },
    watch: {
        name(val, oldVal){
            // eslint-disable-next-line
            console.log('watch name', val, oldVal); // 值类型 可以正常拿到oldVal

        },
        info: {
            handler(val, oldVal){
                // eslint-disable-next-line
                console.log('watch info', val, oldVal); //引用类型, 是拿不到oldVal. 因为指针相同, 此时已经指向了新的val
            },
            deep: true //深度监听
        }
    },
    methods:{
        change(){
            console.log(this.info.city='北京');
        },
        changeName() {
            console.log(this.name='fool');
        }
    }
}
</script>

<style>

</style>
<template>
    <!-- 例如: vue颜色选择器 -->
    <div>
        <input type="text" 
            :value="text"
            @input="$emit('change', $event.target.value); print()"/>
        <div>{{test}}</div>
    </div>
    <!-- 
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change 和 model.event 要对应起来
        3. text 属性对应起来
     -->
</template>

<script>
export default {
    model: {
        prop: 'text', //对应 props text
        event: 'change'
    },
    watch:{
        'text':{
            handler(val,oldVal){
                console.log(val, oldVal)
            }
        }
    },
    props: {
        text:{
            type: String,
            default() {
                return ''
            }
        },
        test:{
            type:Number,
            default(){
                return 888
            }
        }
    },
    methods:{
        print(){
            console.log(this.text);
        }
    }
}
</script>

<style>

</style>
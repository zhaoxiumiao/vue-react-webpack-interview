<template>
    <p ref="elemRef">我是一行文字</p>
</template>

<script>
import {onMounted, ref} from 'vue'

export default {
    name: 'RefTemplate',
    setup(){
        const elemRef = ref(null)

        onMounted(()=>{
            console.log('ref template', elemRef.value);
        })
        return {
            elemRef
        }
    }
}
</script>
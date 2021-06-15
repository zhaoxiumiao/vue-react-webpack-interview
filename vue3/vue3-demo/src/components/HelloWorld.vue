<template>

</template>

<script>
import { defineProps, reactive, defineEmit,onBeforeMount } from 'vue'

export default {
  name: 'HelloWorld',
  emits:['sayHello'],
  setup(props, {emit}){
    emit('sayHello', 'vue3')
    return{

    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

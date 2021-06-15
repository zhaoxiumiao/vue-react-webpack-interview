<template>
    <p>toRefs demo {{ageRef}} {{nameRef}}</p>
</template>

<script>
import {ref, toRef, toRefs, reactive} from 'vue'

export default {
    name: 'ToRefs',
    setup(){
        const state = reactive({
            age: 20,
            name: 'fool'
        })

        const stateAsRefs = toRefs(state) // 将响应式对象， 变成普通对象

        const {age: ageRef, name: nameRef} = stateAsRefs //每个属性都是 Ref对象

        return {
            ageRef,
            nameRef
        }
    }
}
</script>

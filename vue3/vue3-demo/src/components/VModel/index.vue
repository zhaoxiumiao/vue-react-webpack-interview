<template>
  <p>{{name}} {{age}}</p>
  <UserInfo 
    v-model:name="name"
    v-model:age="age"
    
  />
<!-- :age="age"
@update:age="age=$event" -->
</template>

<script>

import {reactive, toRefs} from 'vue'
import UserInfo from './UserInfo.vue'

export default {
    name: 'VModel',
    components:{UserInfo},
    setup(){
        const state = reactive({
            name: '双越',
            age: '20'
        })

        return toRefs(state)
    }
}
</script>

<style>

</style>
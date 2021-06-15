<template>
    <p>why ref demo {{age}}</p>
</template>

<script>
import {ref, toRef, toRefs, reactive, computed} from 'vue'

function useFeatureX(){
    const state = reactive({
        x: 1,
        y: 2
    })
    return toRefs(state)
}

export default {
    name: 'WhyRef',
    setup() {
        const {x, y} = useFeatureX()

        let age = 20

        //Proxy 对象
        setTimeout(()=>{
            console.log(123);
            age = 25
        }, 1500)

        return{
            x,
            y,
            age
        }
    },
}
</script>
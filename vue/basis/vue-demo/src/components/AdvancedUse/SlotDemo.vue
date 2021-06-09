<template>
    <a :href="url">
        <slot>
            默认内容
        </slot>
    </a>
</template>

<script>
export default {
    props:['url'],
    data(){
        return{}
    }
}
</script>

<style>

</style>
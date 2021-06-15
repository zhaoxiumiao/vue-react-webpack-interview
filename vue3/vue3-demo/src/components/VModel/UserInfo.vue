<template>
    <input :value="name" type="text" @input="$emit('update:name', $event.target.value)">
    <input :value="age" type="text" @input="$emit('update:age', $event.target.value)">
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        'name': String,
        'age': String
    }
}
</script>

<style>

</style>
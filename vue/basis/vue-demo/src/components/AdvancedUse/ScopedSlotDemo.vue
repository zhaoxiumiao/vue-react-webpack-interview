<template>
    <div>
        <a :href="url">
            <slot :slotData="website">
                {{website.subTitle}} 
            </slot>
        </a>
        <slot name="footer">
            {{website.title}}
        </slot>
    </div>
</template>

<script>
export default {
    props:['url'],
    data(){
        return{
            website: {
                url: 'http://wangEditor.com/',
                title: 'wangEditor',
                subTitle: '轻量级富文本编辑器'
            }
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <p>vue高级特性</p>
        <hr>

        <!-- <p @click="change">{{name}}</p> -->
        <!-- <CustomVModel v-model="name" /> -->
        <!-- <SlotDemo :url="website.url">
            {{website.title}}
        </SlotDemo> -->
        <!-- 缩写#footer -->
        <!-- <ScopedSlotDemo :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.subTitle}}
            </template>
            
            <template v-slot:footer>
                <div>你好具名插槽</div>
            </template>
        </ScopedSlotDemo> -->
        <!-- 动态组件 -->
        <!-- <component :is="NextTickName" /> -->
        <!-- <div v-for="(val, key) in newsData" :key="key">
            <component  :is="val.type"/>
        </div> -->
        
        <!-- 异步组件 -->
        <!-- <FormDemo v-if="showFormDemo" />
        <button @click="showFormDemo = true"> show form demo</button> -->
        <!-- <KeepAlive /> -->
        <MixinDemo />
    </div>
</template>

<script>
// import CustomVModel from './CustomVModel.vue'
// import SlotDemo from './SlotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo.vue'

// import NextTick from './NextTick'
// import KeepAlive from './KeepAlive.vue'
import MixinDemo from './MixinDemo.vue'
export default {
    components:{
        // CustomVModel
        // SlotDemo
        // ScopedSlotDemo
        // NextTick
        // FormDemo: () => import('../BaseUse/FormDemo')
        // KeepAlive
        MixinDemo
    },
    data() {
        return {
            name: '双越',
            website: {
                url: 'http://imooc.com',
                title: 'imooc',
                subTitle: '程序员的梦工厂'
            },
            NextTickName: 'NextTick',
            newsData:{
                1:{
                    type:'text'
                },
                2:{
                    type:'text'
                },
                3:{
                    type:'image'
                }
            },
            showFormDemo:false
        }
    },
    methods:{
        change(){
            this.name = 'fool'
        }
    }
}
</script>

<style>

</style>
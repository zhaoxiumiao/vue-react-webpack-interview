<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <TplDemo /> -->
    <!-- <ComputedDemo />
    <WatchDemo /> -->
    <!-- <ConditionDemo /> -->
    <!-- <ListDemo /> -->
    <!-- <EventDemo /> -->
    <!-- <FormDemo /> -->
    <!-- <ComponentsDemo v-if="show"/> -->
    <!-- <button @click="destroy">销毁</button> -->
    <!-- <AdvancedUse /> -->
    <AdvancedUse />
  </div>
</template>

<script>

// import TplDemo from './components/BaseUse/TplDemo.vue'
// import ComputedDemo from './components/BaseUse/ComputedDemo.vue'
// import WatchDemo from './components/BaseUse/WatchDemo.vue'
// import ConditionDemo from './components/BaseUse/ConditionDemo.vue'
// import ListDemo from './components/BaseUse/ListDemo.vue'
// import EventDemo from './components/BaseUse/EventDemo.vue'
// import FormDemo from './components/BaseUse/FormDemo.vue'
// import ComponentsDemo from './components/ComponentsDemo'
import AdvancedUse from './components/AdvancedUse'
// import NextTick from './components/AdvancedUse/NextTick.vue'

export default {
  name: 'App',
  // data(){
  //   return{
  //     show: true
  //   }
  // },
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // ConditionDemo
    // ListDemo
    // EventDemo
    // FormDemo
    // ComponentsDemo
    AdvancedUse
    // NextTick
  },
  // methods:{
  //   destroy(){
  //     this.show = true
  //   }
  // }
}
</script>

<style>

</style>

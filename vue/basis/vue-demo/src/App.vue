<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <TplDemo /> -->
    <!-- <ComputedDemo />
    <WatchDemo /> -->
    <!-- <ConditionDemo /> -->
    <!-- <ListDemo /> -->
    <EventDemo />
  </div>
</template>

<script>

// import TplDemo from './components/BaseUse/TplDemo.vue'
// import ComputedDemo from './components/BaseUse/ComputedDemo.vue'
// import WatchDemo from './components/BaseUse/WatchDemo.vue'
// import ConditionDemo from './components/BaseUse/ConditionDemo.vue'
// import ListDemo from './components/BaseUse/ListDemo.vue'
import EventDemo from './components/BaseUse/EventDemo.vue'

export default {
  name: 'App',
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // ConditionDemo
    // ListDemo
    EventDemo
  }
}
</script>

<style>

</style>

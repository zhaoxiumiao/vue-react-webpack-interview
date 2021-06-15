<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" @sayHello="sayHello"/> -->
  <!-- <Ref /> -->
  <!-- <ToRef /> -->
  <!-- <ToRefs /> -->
  <!-- <WhyRef /> -->
  <!-- <MousePosition v-if="flag"/> -->
  <!-- <VModel /> -->
  <!-- <Watch /> -->
  <GetInstance />
  <!-- <RefTemplate /> -->
  <!-- <LifeCycles v-if="flag" :msg="msg"/> -->
  <button @click="changeHandler">change msg</button>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LifeCycles from './components/LifeCycles.vue'
import Ref from './components/Ref.vue'
import RefTemplate from './components/RefTemplate.vue'
import ToRef from './components/ToRef.vue'
import ToRefs from './components/ToRefs.vue'
import WhyRef from './components/WhyRef.vue'
import MousePosition from './components/MousePosition/index.vue'
import VModel from './components/VModel/index.vue'
import Watch from './components/Watch.vue'
import GetInstance from './components/GetInstance.vue'
import {ref} from 'vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
let msg = ref('Hello')
let flag = ref(true)
function changeHandler(){
  msg.value = 'hello vue3' + Date.now()
  flag.value = !flag.value
}

function sayHello(info) {
  console.log('hello Vue3', info);
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

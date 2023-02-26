<template>
  <div>
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderBar from '../components/HeaderBar/HeaderBar.vue'
import { ref, reactive, onMounted } from 'vue'
const { ipcRenderer } = require('electron')
const changWindowSize = () => {
  ipcRenderer.send('LoginIn')
}

onMounted(() => {
  changWindowSize()
})
</script>

<style>

</style>

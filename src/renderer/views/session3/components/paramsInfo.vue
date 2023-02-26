<template>
  <div>
    <gauss v-show="func == 'gauss' "></gauss>
    <DTInfo v-show="func == 'decisionTree' "></DTInfo>
    <svmInfo v-show="func=='svm'"></svmInfo>
  </div>
</template>

<script setup>
import gauss from './gaussInfo.vue'
import DTInfo from './DTInfo.vue'
import svmInfo from './svmInfo.vue'
import {ref} from 'vue'

const func = localStorage.getItem('session3Func')

</script>

<style>

</style>

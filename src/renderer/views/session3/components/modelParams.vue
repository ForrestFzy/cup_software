<template>
  <div>
    <gauss v-show="func == 'gauss' "></gauss>
    <DTModel v-show="func == 'decisionTree' "></DTModel>
    <SVMView v-show="func=='svm'"></SVMView>
  </div>
</template>

<script setup>
import gauss from './gaussModel.vue'
import DTModel from './DTModel.vue'
import SVMView from './SVMView.vue'
import {ref} from 'vue'

const func = localStorage.getItem('session3Func')

</script>

<style>

</style>

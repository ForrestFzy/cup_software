<template>
  <el-form :model="session3" label-width="120px">
    
  </el-form>
</template>

<script setup>
import { reactive } from 'vue'
const session3 = reactive({
  columns: [],
  session3Visiable: false,
  func: '',
  checkList: [],
  target: '',
  DT: {
    criterion: '',
    splitter: '',
    num: 5,
  },
})
</script>

<style>
</style>

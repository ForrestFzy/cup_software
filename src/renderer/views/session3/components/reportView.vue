<template>
  <el-card class="data-card">
    <template #header>
      <div class="card-header">
        <span></span>
        <span>{{title}}</span>
        <el-upload :file-list="savePath.fileList" accept=".*" :limit="1">
          <template #trigger>
            <el-button class="button" text @click="saveReport"></el-button>
          </template>
        </el-upload>
      </div>
    </template>
    <gaussReport v-show="func=='gauss'"></gaussReport>
    <dtReport v-show="func=='decisionTree'"></dtReport>
    <svmReport v-show="func=='svm'"></svmReport>
  </el-card>

</template>

<script setup>
import { ref, reactive } from 'vue'
import gaussReport from './gaussReport.vue'
import dtReport from './dtReport.vue'
import svmReport from './svmReport.vue'

const { ipcRenderer } = require('electron')

const func = localStorage.getItem('session3Func')
const title = ref('高斯朴素贝叶斯任务报告')
if (func == 'decisionTree') {
  title.value = '决策树任务报告'
} else if (func == 'svm') {
  title.value = '支持向量机任务报告'
}

const savePath = reactive({
  fileList: "",
})
// 获取当前页面上的HTML源码
const saveReport = () => {
  if (func == 'gauss') {
    console.log(savePath.fileList)
    // console.log("导出信号已发送")
    // ipcRenderer.send('saveGauss')
  }
}
</script>

<style>
</style>

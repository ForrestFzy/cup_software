<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-button class="button" text @click="dialogVisible=true">看图指南</el-button>
          <span>
            <h1>用户集群算法分析</h1>
          </span>
          <span></span>
          <!-- <el-button class="button" text @click="download5">导出模型</el-button> -->
        </div>
      </template>
      <div style="width: 70%;float: left;">
        <el-scrollbar height="600px">
          <v-chart autoresize :option="option_column" style="height: 550px"></v-chart>
        </el-scrollbar>
      </div>
      <div style="width:30%; float: right;" >
        <el-card v-loading="view_o1_loading">
          <template #header>
            <div class="card-header">
              <span></span>
              <span>集群算法性能分析
              </span>
              <span></span>
            </div>
          </template>
          <el-scrollbar height="440px">
            <el-image style="width: 120%; height: 440px" :src="url" :fit="fit" />
          </el-scrollbar>
        </el-card>
      </div>

    </el-card>

  </div>

</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'

const { proxy } = getCurrentInstance()
const router = useRouter()
const { ipcRenderer } = require('electron')

const view_o1_loading = ref(true)
setTimeout(() => {
  view_o1_loading.value = false
}, 2)

const url = ref('http://fcode.ltd/cluster.svg')

const option_column = reactive({
  title: {
    text: '集群紧密程度分析',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['低价值用户', '大众型用户', '潜力型用户', '高价值用户'],
  },
  series: [
    {
      name: '纯度',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [32, 30, 31, 34, 39, 33, 20],
    },
    {
      name: '紧密度',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [10, 13, 10, 14, 9, 30, 10],
    },
    {
      name: '分割度',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '邓恩指数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
    {
      name: '轮廓系数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [82, 83, 90, 94, 90, 130, 120],
    },
  ],
})




</script>

<style>
</style>

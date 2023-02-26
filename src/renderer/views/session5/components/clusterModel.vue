<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-button class="button" text @click="dialogVisible=true">看图指南</el-button>
          <span>
            <h1>各类用户的机器预测<el-tooltip content="展示了每一类用户的属性重要性占比，用于判断单属性的集群分析" placement="right" effect="light">
                <el-icon>
                  <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                    <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
                  </svg>
                </el-icon>
              </el-tooltip>
            </h1>
          </span>
          <el-button class="button" text @click="download5">导出模型</el-button>
        </div>
      </template>
      <el-scrollbar height="600px">
        <v-chart id="clusterModel" autoresize :option="option_column" style="height: 550px; width: 100%;"></v-chart>
      </el-scrollbar>
    </el-card>

    <el-dialog v-model="dialogVisible" title="看图指南" width="30%" :before-close="handleClose">
      <span>用于分析单类人群在所有属性上的重要性分布</span>
      <p>在右侧滑动栏可以调整图标的大小和位置，在Legend标签上点击能够控制是否显示该类人群，可以分析一类人群的所有属性重要性分布，或者分析所有人群的属性重要性对比</p>
      <template #footer>
        <span class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
          <el-button type="primary" @click="dialogVisible = false">我已知晓</el-button>
        </span>
      </template>
    </el-dialog>
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

const dialogVisible = ref(false)

const option_column = reactive({
  title: {
    text: '',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    textStyle: {
      fontSize: 16,
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  dataZoom: [
    //加上dataZoom可实现缩放
    {
      type: 'slider',
      yAxisIndex: 0,
    },
    {
      type: 'inside',
      yAxisIndex: 0,
      zoomOnMouseWheel: 'alt',
    },
  ],
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
  },
  series: [],
})

const filepath = reactive(localStorage.getItem('session5FilePath'))
var percent = localStorage.getItem('percent')
var func = localStorage.getItem('func5')
// 显示下拉框
proxy.$axios
  .post('http://127.0.0.1:5000/session5Weight', {
    filepath: filepath,
    del_percent: percent,
    func: func,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      const HistData = res.data.data
      option_column.yAxis = []
      option_column.yAxis.push({
        type: 'category',
        data: res.data.label,
        axisLabel: {
          formatter: function (name) {
            return name.length > 10 ? name.slice(0, 10) + '...' : name
          },
        },
      })
      for (var i = 0; i < HistData.length; i++) {
        option_column.series.push({
          name: '第' + i.toString() + '类',
          type: 'bar',
          data: HistData[i],
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
        })
      }
    }
  })

const download5 = () => {
  var url = 'http://127.0.0.1:5000/downloadDBSCAN'
  ipcRenderer.send('download', url)
}
</script>

<style>
</style>

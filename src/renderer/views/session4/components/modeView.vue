<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span> </span>
          <span>
            <h1>性能评估</h1>
          </span>
          <el-button class="button" text @click="download">导出模型</el-button>
        </div>
      </template>
      <v-chart id="evaChart" autoresize :option="option_column" style="height: 520px; width: 100%;"></v-chart>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'

const { ipcRenderer } = require('electron')
const { proxy } = getCurrentInstance()
const router = useRouter()

const eva = reactive({
  MSE: 0,
  RMSE: 0,
  MAE: 0,
  MAPE: 0,
  R2: 0,
})

var dirpath = localStorage.getItem('dirpath')
var date_col = localStorage.getItem('date_col4')
var data_col = localStorage.getItem('y_col4')
proxy.$axios
  .post('http://127.0.0.1:5000/session4ReadData', {
    dirpath: dirpath,
    date_col: date_col,
    load_col: data_col,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      eva.MSE = res.data.evaluate.MSE
      eva.RMSE = res.data.evaluate.RMSE
      eva.MAE = res.data.evaluate.MAE
      eva.MAPE = res.data.evaluate.MAPE
      eva.R2 = res.data.evaluate.R2
      var chartDom = document.getElementById('evaChart')
      var myChart = echarts.init(chartDom)
      myChart.clear()
      myChart.setOption({
        title: {
          text: '',
        },
        legend: {},
        radar: {
          axisName: {
            fontSize: 17,
            color: '#000000',
          },
          shape: 'circle',
          indicator: [
            { name: 'MSE' },
            { name: 'RMSE' },
            { name: 'MAE' },
            { name: 'R2' },
          ],
        },
        series: [
          {
            name: '性能评估',
            type: 'radar',
            data: [
              {
                value: [eva.MSE, eva.RMSE, eva.MAE, eva.R2],
                name: '性能评估',
              },
            ],
          },
        ],
      })
    }
  })

const download = () => {
  var url = 'http://127.0.0.1:5000/downloadLSTM'
  ipcRenderer.send('download', url)
}
</script>

<style>
</style>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span></span>
          <span>
            <h1>电力负荷趋势</h1>
            <!-- <el-tooltip content="由于数据量较大，因此这里只展示前5列的50行数据，要想预览更多数据，请下载" placement="right" effect="light">
              <el-icon>
                <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                  <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
                </svg>
              </el-icon>
            </el-tooltip> -->
          </span>
          <el-button class="button" text @click="pre_one">向后预测</el-button>
        </div>
      </template>
      <v-chart autoresize :option="option_column" style="height: 550px"></v-chart>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from '../../public.js'

const { proxy } = getCurrentInstance()
const router = useRouter()

ElMessage.success("正在计算中...")


const date_list = ref()
const data_list = ref()
const isUpdate = ref(true)

// *******************************这些都是文件夹的函数******************************
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
      date_list.value = res.data.date
      data_list.value = res.data.all_data
    }
  })
const pre_one = () => {
  var l = data_list._rawValue.length - 1
  console.log('长度为:', l)
  var data = data_list._rawValue.slice(l - 3, l)
  var date = date_list._rawValue[l]
  console.log(data, date)
  proxy.$axios
    .post('http://127.0.0.1:5000/session4PreOne', {
      date: date,
      data: data,
    })
    .then(function (res) {
      data_list._rawValue.push(res.data.data)
      date_list._rawValue.push(res.data.newDay)
      option_column.xAxis.data.push(res.data.newDay)
      option_column.series.data.push(res.data.data)
    })
}

// 每个一秒就预测一次，不断更新数据，用一个变量来跟踪该函数是否继续执行
// setInterval(() => {
// }, 5000)
// ***********************************************************************************

const option_column = reactive({
  title: {
    text: '',
    subtext: '',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // prettier-ignore
    data: date_list,
    axisLabel: {
      fontSize: 16,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 16,
      formatter: '{value} W',
    },
    axisPointer: {
      snap: true,
    },
  },
  visualMap: {
    show: false,
    dimension: 0,
  },
  series: [
    {
      name: 'Electricity',
      type: 'line',
      smooth: true,
      // prettier-ignore
      data: data_list,
      markArea: {
        itemStyle: {
          color: 'rgba(255, 173, 177, 0.4)',
        },
        // data: [
        //   [
        //     {
        //       name: 'Morning Peak',
        //       xAxis: '07:30',
        //     },
        //     {
        //       xAxis: '10:00',
        //     },
        //   ],
        //   [
        //     {
        //       name: 'Evening Peak',
        //       xAxis: '17:30',
        //     },
        //     {
        //       xAxis: '21:15',
        //     },
        //   ],
        // ],
      },
    },
  ],
})
</script>

<style>
</style>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span></span>
          <span>
            <h1>用户负荷趋势</h1>
          </span>
          <el-button class="button" text @click="pre_one"></el-button>
        </div>
      </template>
      <v-chart id="chartMain" autoresize :option="option_column" style="height: 500px; width: 100%;"></v-chart>
      <div class="demo-pagination-block">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :small="false" :disabled="disabled" :background="true" layout="prev, pager, next, jumper" :total="100" @current-change="handleCurrentChange" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'

const { proxy } = getCurrentInstance()
const router = useRouter()

const pageSize = ref(100) // 表示当前页数
const currentPage = ref(1) // 表页面的大小

const date_list = ref([])
const data_list = ref([])
const subFile = ref([])
const chartData = reactive({
  x: [1, 2, 3, 4],
  y: [5, 6, 7, 8],
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
      // console.log(res.data)
      pageSize.value = res.data.data_length
      date_list.value = res.data.date
      data_list.value = res.data.data
      subFile.value = res.data.subFile
      chartData.x = date_list._rawValue
      chartData.y = data_list._rawValue[0]
      // 设置图的内容
      var chartDom = document.getElementById('chartMain')
      var myChart = echarts.init(chartDom)
      myChart.clear()
      myChart.setOption({
        title: {
          left: 'center',
          text: subFile.value[0],
        },
        xAxis: {
          type: 'category',
          data: date_list._rawValue,
          axisLabel: {
            fontSize: 16,
          },
        },
        yAxis: {
          axisLabel: {
            fontSize: 16,
          },
          type: 'value',
        },
        series: [
          {
            data: data_list._rawValue[0],
            type: 'line',
          },
        ],
      })
    }
  })

// setInterval(() => {
//   var l = data_list._rawValue[currentPage].length - 1
//   console.log('长度为:',l)
//   var data = data_list._rawValue[currentPage].slice(l - 3, l)
//   var date = date_list._rawValue[l]
//   console.log(data, date)
//   proxy.$axios
//     .post('http://127.0.0.1:5000/session4PreOne', {
//       date: date,
//       data: data,
//     })
//     .then(function (res) {
//       data_list._rawValue[currentPage].push(res.data.data)
//       date_list._rawValue.push(res.data.newDay)
//       option_column.xAxis.data.push(res.data.newDay)
//       option_column.series.data.push(res.data.data)
//     })
// }, 5000)

const handleCurrentChange = (val) => {
  // 设置图的内容
  var chartDom = document.getElementById('chartMain')
  var myChart = echarts.init(chartDom)
  myChart.clear()
  myChart.setOption({
    title: {
      left: 'center',
      text: subFile.value[val - 1],
    },
    xAxis: {
      type: 'category',
      data: date_list._rawValue,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data_list._rawValue[val - 1],
        type: 'line',
      },
    ],
  })
}

// const pre_one = () => {
//   var l = data_list._rawValue[currentPage.value].length - 1
//   var data = data_list._rawValue[currentPage.value].slice(l - 3, l)
//   var date = date_list._rawValue[l]
//   proxy.$axios
//     .post('http://127.0.0.1:5000/session4PreOne', {
//       date: date,
//       data: data,
//     })
//     .then(function (res) {
//       data_list._rawValue[currentPage.value].push(res.data.data)
//       date_list._rawValue.push(res.data.newDay)
//       option_column.xAxis.data.push(res.data.newDay)
//       option_column.series.data.push(res.data.data)
//     })
// }

// const option_column = reactive({
//   title: {
//     text: '',
//     left: 'center',
//   },
//   xAxis: {
//     type: 'category',
//     data: [],
//   },
//   yAxis: {
//     type: 'value',
//   },
//   series: [
//     {
//       data: [],
//       type: 'line',
//     },
//   ],
// })
</script>

<style>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>

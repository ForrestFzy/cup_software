<template>

  <div v-loading.fullscreen.lock="fullscreenLoading">
    <div class="view_o1_left" style="width: 70%; float: left;padding:0;margin:0;">
      <el-card style="padding: 0;">
        <template #header>
          <div class="card-header">
            <span></span>
            <span>
              <h1>智能预警</h1>
            </span>
            <span>

            </span>
            <!-- <el-button class="button" text @click="pre_one">向后预测</el-button> -->
          </div>
        </template>
        <v-chart autoresize :option="option_column" style="height: 550px"></v-chart>
      </el-card>

    </div>
    <div style="width: 30%; float: right;">
      <el-card style="padding: 0; height: 610px;">
        <template #header>
          <div class="card-header">
            <span><el-switch v-model="All.delivery" /></span>
            <span>
              <h1>预警面板</h1>
            </span>
            <span>
              
            </span>
          </div>
        </template>
        <div>
          <el-form ref="formRef" :model="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="阈值：">
              <el-input-number v-model="numberValidateForm.num" :precision="2" :step="0.1" :max="100" @change="numChange" />
            </el-form-item>
          </el-form>
          历史预警信息：
          <ul class="infinite-list" style="overflow: auto">
            <li v-for="(i, index) in All.dateList" :key="i" class="infinite-list-item">{{All.dateList.length-index}}： {{ i }}</li>
          </ul>
        </div>
      </el-card>

    </div>

    <el-dialog v-model="All.alertView" title="警告" width="30%">
      <img src="../../../assets/images/警告.png" alt="" style="margin-left: 31%;">
      <h3 style="text-align: center;color: red;">电力即将超过设定阈值，请及时采取措施！</h3>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from '../../public.js'

const { proxy } = getCurrentInstance()
const router = useRouter()

const numberValidateForm = reactive({
  num: 6,
})

const fullscreenLoading = ref(true)

ElMessage.success('正在计算中...')

const date_list = ref()
const data_list = ref()
const isUpdate = ref(true)
const All = reactive({
  delivery: true,
  flag: 100,
  all_date: [],
  all_data: [],
  alertView: false,
  dateList: [
    '2009-10-01 00:00',
    '2009-10-01 00:30',
    '2009-10-01 01:00',
    '2009-10-01 01:30',
    '2009-10-01 02:00',
    '2009-10-01 02:30',
    '2009-10-01 03:00',
    '2009-10-01 03:30',
  ],
})

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
      All.all_date = res.data.date
      All.all_data = res.data.all_data
      date_list.value = res.data.date.slice(0, 100)
      data_list.value = res.data.all_data.slice(0, 100)
      fullscreenLoading.value = false
    }
  })

// 每个一秒就预测一次，不断更新数据，用一个变量来跟踪该函数是否继续执行
setInterval(() => {
  if (All.delivery) {
    var l = data_list._rawValue.length - 1
    var data = data_list._rawValue.slice(l - 3, l)
    var date = date_list._rawValue[All.flag - 1]
    proxy.$axios
      .post('http://127.0.0.1:5000/session4PreOne', {
        date: date,
        data: data,
      })
      .then(function (res) {
        if (res.data.data > numberValidateForm.num) {
          All.dateList.unshift(All.all_date[All.flag])
          All.alertView = true
        }
        data_list._rawValue.push(res.data.data)
        date_list._rawValue.push(All.all_date[All.flag])
        option_column.xAxis.data.push(All.all_date[All.flag])
        option_column.series.data.push(res.data.data)
      })
    All.flag = All.flag + 1
    data_list._rawValue[All.flag - 1] = All.all_data[All.flag - 1]
    option_column.series.data[All.flag - 1] = All.all_data[All.flag - 1]
  }
}, 2000)
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
      name: '负荷',
      type: 'line',
      smooth: true,
      // prettier-ignore
      data: data_list,
      markLine: {
        lineStyle: {
          normal: 'red',
        },
        data: [{ yAxis: numberValidateForm.num }],
      },
      markArea: {
        itemStyle: {
          color: 'rgba(255, 173, 177, 0.4)',
        },
      },
    },
  ],
})

const numChange = () => {
  option_column.series[0].markLine.data[0].yAxis = numberValidateForm.num
}
</script>

<style>
.view_o1_left .el-card__body {
  padding: 0;
}
.infinite-list {
  height: 450px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>

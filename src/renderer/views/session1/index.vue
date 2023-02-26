<template>
  <div class="session1-main">
    <div class="session1-up">
      <el-row>
        <el-col :span="6">
          <div class="session1-card">
            <el-button class="session1-card-button" @click="showChart(1)">
              <el-icon :size="50">
                <svg t="1655619931376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2187" width="64" height="64">
                  <path d="M358.4 153.6l92.16 327.68c5.12 10.24-5.12 25.6-15.36 30.72H291.84c-15.36 0-25.6-10.24-25.6-25.6v-5.12L358.4 153.6zM665.6 870.4l-92.16-327.68v-5.12c0-15.36 10.24-25.6 25.6-25.6H742.4c15.36 5.12 20.48 20.48 15.36 30.72L665.6 870.4z" fill="#1296db" p-id="2188"></path>
                  <path d="M25.6 537.6c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h143.36c10.24 0 20.48-5.12 25.6-20.48L307.2 71.68c10.24-25.6 35.84-40.96 61.44-35.84 20.48 10.24 35.84 20.48 40.96 35.84l256 860.16 117.76-394.24c10.24-30.72 40.96-56.32 71.68-56.32h143.36c15.36 0 25.6 10.24 25.6 25.6s-10.24 25.6-25.6 25.6h-143.36c-10.24 0-20.48 5.12-25.6 20.48L716.8 947.2c-5.12 15.36-15.36 30.72-35.84 35.84-25.6 10.24-56.32-5.12-61.44-35.84L358.4 87.04 240.64 481.28c-10.24 30.72-40.96 56.32-71.68 56.32H25.6z" fill="#1296db" p-id="2189"></path>
                </svg>
              </el-icon>
              <div class="btn-text">
                总缴费金额 {{carddata.sum_money}}
                <br>
                总缴费次数 {{carddata.sum_count}}
              </div>
            </el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="session1-card">
            <el-button class="session1-card-button" @click="showChart(2)">
              <el-icon :size="50">
                <svg t="1655620604518" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3123" width="64" height="64">
                  <path d="M0 127.616C0 57.152 57.28 0 127.616 0h768.768C966.848 0 1024 57.28 1024 127.616v768.768A127.68 127.68 0 0 1 896.384 1024H127.616A127.68 127.68 0 0 1 0 896.384V127.616zM448 384h384V256H448v128z m0 192h384V448H448v128z m0 192h384v-128H448v128zM160 384h192V256h-192v128z m0 192h192V448h-192v128z m0 192h192v-128h-192v128z" p-id="3124" fill="#1296db"></path>
                </svg>
              </el-icon>
              <div class="btn-text">
                结果预览
                <br>
                (表格下载)
              </div>
            </el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="session1-card">
            <el-button class="session1-card-button" @click="showChart(3)">
              <el-icon :size="50">
                <svg t="1655291517071" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18400" width="64" height="64">
                  <path d="M892.342857 463.238095v-97.523809h-292.571428l175.542857-307.2-82.895238-48.761905-180.419048 312.07619L331.580952 9.752381l-82.895238 48.761905 175.542857 307.2h-292.571428v97.523809h331.580952v165.790476H131.657143v97.52381h331.580952v287.695238h97.52381v-287.695238h331.580952v-97.52381h-331.580952V463.238095z" p-id="18401" fill="#d81e06"></path>
                </svg>
              </el-icon>
              <div class="btn-text">
                平均缴费金额
                <br>
                {{carddata.avg_money}}
              </div>
            </el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="session1-card">
            <el-button class="session1-card-button" @click="showChart(4)">
              <el-icon :size="50">
                <svg t="1655291548023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19448" width="64" height="64">
                  <path d="M879.2 63.8H148.8c-45.1 0-81.8 36.7-81.8 81.8V876c0 45.1 36.7 81.8 81.8 81.8h730.4c45.1 0 81.8-36.7 81.8-81.8V145.6c0-45.1-36.7-81.8-81.8-81.8zM897 876c0 9.8-8 17.8-17.8 17.8H148.8c-9.8 0-17.8-8-17.8-17.8V145.6c0-9.8 8-17.8 17.8-17.8h730.4c9.8 0 17.8 8 17.8 17.8V876z" p-id="19449" fill="#d4237a"></path>
                  <path d="M772.3 337.5c-12.5-12.5-32.8-12.5-45.3 0L448.3 616.3l-146-146c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l168.6 168.6c12.5 12.5 32.8 12.5 45.3 0l301.4-301.4c12.5-12.5 12.5-32.8 0-45.3z" p-id="19450" fill="#d4237a"></path>
                </svg>
              </el-icon>
              <div class="btn-text">
                平均缴费次数
                <br>
                {{carddata.avg_count}}
              </div>
            </el-button>
          </div>
        </el-col>
      </el-row>

    </div>

    <div class="session1-down">
      <HistChart v-show="control.chart1"></HistChart>
      <HistChart2 v-show="control.chart2"></HistChart2>
      <!-- <HistChart3 v-show="control.chart3"></HistChart3> -->
      <!-- <HistChart4 v-show="control.chart4"></HistChart4> -->
    </div>
  </div>

</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
// import HistChart from './components/HistChart.vue'
import HistChart from './components/HistChart_o.vue'
import HistChart2 from './components/HistChart2.vue'
import HistChart3 from './components/HistChart3.vue'
import HistChart4 from './components/HistChart4.vue'
import bus from '../public.js'

const { proxy } = getCurrentInstance()

// 控制组件的显现
const control = reactive({
  chart1: true,
  chart2: false,
  chart3: false,
  chart4: false,
})
const carddata = reactive({
  sum_money: 0,
  sum_count: 0,
  avg_money: 0,
  avg_count: 0,
})
const showChart = (showid) => {
  if (showid == 1) {
    control.chart1 = true
    control.chart2 = false
    control.chart3 = false
    control.chart4 = false
  } else if (showid == 2) {
    control.chart1 = false
    control.chart2 = true
    control.chart3 = false
    control.chart4 = false
  }
}

// 该组件给子组件传值，首先从服务器获取值
var sessionType = localStorage.getItem('sessionType')
if (sessionType === 'file') {
  var fileName = localStorage.getItem('session1FilePath')
  proxy.$axios
    .post('http://127.0.0.1:5000/fileAnalyze', {
      filename: fileName,
      u_name: localStorage.getItem('u_name'),
      u_date: localStorage.getItem('u_date'),
      u_money: localStorage.getItem('u_money'),
    })
    .then(function (res) {
      bus.emit('chart1data', res.data)
      carddata.avg_money = res.data.avg_money
      carddata.avg_count = res.data.avg_count
      carddata.sum_money = res.data.paint1.sum_money
      carddata.sum_count = res.data.paint1.sum_count
      localStorage.setItem('avg_money', carddata.avg_money)
      localStorage.setItem('avg_count', carddata.avg_count)
      localStorage.setItem('sum_money', carddata.sum_money)
      localStorage.setItem('sum_count', carddata.sum_count)
      localStorage.setItem('session1Name', res.data.session1Name)
      localStorage.setItem('savePath1', res.data.savePath)
    })
} else {
  var fileName = localStorage.getItem('session1DirPath')
  proxy.$axios
    .post('http://127.0.0.1:5000/dirAnalyze', {
      dirPath: fileName,
      u_name: localStorage.getItem('u_name'),
      u_date: localStorage.getItem('u_date'),
      u_money: localStorage.getItem('u_money'),
    })
    .then(function (res) {
      bus.emit('chart1data', res.data)
      carddata.avg_money = res.data.avg_money
      carddata.avg_count = res.data.avg_count
      carddata.sum_money = res.data.paint1.sum_money
      carddata.sum_count = res.data.paint1.sum_count
      localStorage.setItem('avg_money', carddata.avg_money)
      localStorage.setItem('avg_count', carddata.avg_count)
      localStorage.setItem('sum_money', carddata.sum_money)
      localStorage.setItem('sum_count', carddata.sum_count)
      localStorage.setItem('session1Name', res.data.session1Name)
      localStorage.setItem('savePath1', res.data.savePath)
    })
}
</script>

<style>
html {
  /* background-color: rgb(208, 246, 246); */
  background-color: #ffffff;
}
.session1-card {
  width: 100%;
  height: 100%;
}
.session1-main {
  width: 100%;
  height: 100%;
}
.session1-up {
  width: 100%;
  height: 12%;
  /* background-color: black; */
  margin: 10px;
}
.session1-up .el-col-6 {
  text-align: center;
  margin: auto;
}
.session1-card-button {
  width: 90%;
  height: 80%;
  min-height: 80px;
  border: none;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgb(195, 225, 225);
  border-radius: 10px;
}
.session1-card-button el-icon {
  float: left;
}
.session1-card-button .btn-text {
  float: right;
  font-size: 17px;
  text-align: left;
  line-height: 150%;
  margin-left: 80px;
  color: rgb(140, 140, 140);
}
</style>

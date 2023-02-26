<template>
  <div>
    <div style=" float: left; width: 70%;">
      <el-card class="box-card">
        <v-chart autoresize :option="option_column" style="height: 580px;"></v-chart>

      </el-card>
    </div>
    <div style="height: 600px; float: right; width: 30%;">
      <el-card class="box-card">
        <el-scrollbar height="600px">
          <h3 style="text-align: center;">用户电力信用分</h3>
          <div style="text-align:center;">
            <math-jax latex="1-\frac{t_d}{2T}" />
          </div>
          <v-chart autoresize :option="option_column1" style="height: 550px;widows: 100%;margin-top: -40px;"></v-chart>
        </el-scrollbar>

      </el-card>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import bus from '../../public.js'

const valueList = ref([])
const dateList = ref([])
const countData = ref([])
const userList = ref([])
const userScore = ref([])

bus.on('chart1data', (data) => {
  console.log(data)
  countData.value = data.paint1.countlist
  valueList.value = data.paint1.moneylist
  dateList.value = data.paint1.datalist
  userList.value = data.userid.reverse()
  userScore.value = data.score.reverse()
  console.log(userList, userScore)
})

const option_column1 = reactive({
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: userList,
    axisLabel: {
      inside: true,
      color: '#fff',
    },
    axisTick: {
      show: true,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  series: [
    {
      data: userScore,
      type: 'bar',
    },
  ],
})

// 金额总览
const option_column = reactive({
  title: {
    text: '缴费次数 VS 缴费金额',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false,
    },
  },
  legend: {
    data: ['缴费次数', '缴费金额'],
    left: 10,
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      restore: {},
      saveAsImage: {},
    },
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all',
      },
    ],
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1],
    },
    {
      type: 'inside',
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1],
    },
  ],
  grid: [
    {
      left: 60,
      right: 50,
      height: '35%',
    },
    {
      left: 60,
      right: 50,
      top: '55%',
      height: '35%',
    },
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: dateList,
    },
    {
      gridIndex: 1,
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: dateList,
      position: 'top',
    },
  ],
  yAxis: [
    {
      name: '缴费次数',
      type: 'value',
      max: 20,
    },
    {
      gridIndex: 1,
      name: '缴费金额',
      type: 'value',
      inverse: true,
    },
  ],
  series: [
    {
      name: '次数(次)',
      type: 'line',
      symbolSize: 8,
      // prettier-ignore
      data: countData,
    },
    {
      name: '金额(元)',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbolSize: 8,
      // prettier-ignore
      data: valueList,
    },
  ],
})
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.HistChart_o1 {
  width: 100%;
  height: 100%;
  background-color: rgb(217, 228, 235);
  text-align: right;
  display: inline-block;
  border-radius: 25px;
}
.HistChart_o2 {
  width: 50%;
  background-color: rgb(24, 144, 255);
  height: 20px;
  border-radius: 25px;
}
</style>

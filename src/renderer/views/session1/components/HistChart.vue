<template>
  <div>
    <div style=" float: left; width: 70%;">
      <el-card class="box-card">
        <v-chart autoresize :option="option_column" style="height: 600px;"></v-chart>

      </el-card>
    </div>
    <div style="height: 600px; float: right; width: 30%;">
      <el-card class="box-card">
        <el-scrollbar height="600px">
          <p>这里是结论</p>
        </el-scrollbar>

      </el-card>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import bus from '../../public.js'

const valueList = ref([])
const dateList = ref([])
const countData = ref([])

bus.on('chart1data', (data) => {
  console.log(data)
  countData.value = data.paint1.countlist
  valueList.value = data.paint1.moneylist
  dateList.value = data.paint1.datalist
})

// 金额总览
export default {
  data() {
    return {
      option_column: {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
          {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: 400,
          },
        ],
        title: [
          {
            textStyle: {
              fontSize: 25,
            },
            left: 'center',
            text: '缴费金额-时间',
          },
          {
            textStyle: {
              fontSize: 25,
            },
            top: '50%',
            left: 'center',
            text: '缴费次数-时间',
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [
          {
            axisLabel: {
              fontSize: 16,
            },
            data: dateList,
          },
          {
            axisLabel: {
              fontSize: 16,
            },
            data: dateList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {
            axisLabel: {
              fontSize: 16,
            },
          },
          {
            axisLabel: {
              fontSize: 16,
            },
            gridIndex: 1,
          },
        ],
        grid: [
          {
            bottom: '60%',
          },
          {
            top: '60%',
          },
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList,
          },
          {
            type: 'line',
            showSymbol: false,
            data: countData,
            xAxisIndex: 1,
            yAxisIndex: 1,
          },
        ],
      },
    }
  },
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

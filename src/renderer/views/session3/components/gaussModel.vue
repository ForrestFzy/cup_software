<template>
  <div>
    <el-card class="data-card" v-show="modelParams.func==='gauss'">
      <template #header>
        <div class="card-header">
          <span>{{modelParams.title}}</span>
          <span style="font-size: 17px;font-weight:bold;">模型测试集得分随var_smoothing参数的变化</span>
          <el-button class="button" text></el-button>
        </div>
        <div>
          <v-chart autoresize :option="option_column" style="height: 580px"></v-chart>
        </div>
      </template>
    </el-card>
  </div>

</template>

<script setup>
import { reactive } from 'vue'

const modelParams = reactive({
  title: 'gauss',
  func: '',
})

var func = localStorage.getItem('session3Func')
modelParams.func = func
if (func === 'gauss') {
  modelParams.title = ''
}
</script>

<script>
import { ref } from 'vue'
import bus from '../../public.js'
const TrainList = ref([])
const dateList = ref([])
const TestList = ref([])

bus.on('session3Chart1', (data) => {
  TestList.value = data.test_list
  dateList.value = data.var_list
  TrainList.value = data.train_list
})

// 金额总览
export default {
  data() {
    return {
      option_column: {
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['测试集得分'],
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
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          axisLabel: {
            fontSize: 16,
          },
          type: 'category',
          boundaryGap: false,
          data: dateList,
        },
        yAxis: {
          axisLabel: {
            fontSize: 16,
          },
          type: 'value',
        },
        series: [
          // {
          //   name: '训练集得分',
          //   type: 'line',
          //   data: TrainList,
          // },
          {
            name: '测试集得分',
            type: 'line',
            data: TrainList,
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>

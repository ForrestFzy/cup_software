<template>
  <el-card class="data-card">
    <template #header>
      <div class="card-header">
        <el-button class="button" text></el-button>
      </div>
      <div>
        <v-chart autoresize :option="option_column" style="height: 600px"></v-chart>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue'

const modelParams = reactive({
  title: '决策树',
  func: 'gini',
  model: '',
})
</script>


<script>
import { ref } from 'vue'
import bus from '../../public.js'
const dataList = ref([])
const gini_train = ref([])
const gini_test = ref([])
const entropy_train = ref([])
const entropy_test = ref([])
const log_train = ref([])
const log_test = ref([])

bus.on('session3Chart2', (data) => {
  console.log(data)
  dataList.value = data.dateList
  gini_train.value = data.gini_train
  gini_test.value = data.gini_test
  entropy_train.value = data.entropy_train
  entropy_test.value = data.entropy_test
  log_train.value = data.log_train
  log_test.value = data.log_test
})
// 金额总览
export default {
  data() {
    return {
      option_column: {
        legend: {
          name: [
            '基尼指数训练集准确率',
            '基尼指数测试集准确率',
            '信息熵训练集准确率',
            '信息熵测试集准确率',
          ],
          left: 'left',
          orient: 'vertical',
          height: 50,
          textStyle: {
            fontSize: 16,
          },
        },
        // Make gradient line here
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 100,
          },
          {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: 100,
          },
        ],
        title: [
          {
            left: 'center',
            text: '基尼指数',
          },
          {
            top: '50%',
            left: 'center',
            text: '信息熵',
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
            type: 'category',
            data: dataList,
          },
          {
            axisLabel: {
              fontSize: 16,
            },
            type: 'category',
            data: dataList,
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
            name: '基尼指数训练集准确率',
            type: 'line',
            data: gini_train,
            lineStyle: {
              color: "#1AD8E2",
            }
          },
          {
            name: '基尼指数测试集准确率',
            type: 'line',
            data: gini_test,
            lineStyle: {
              color: "#5DF412",
            }
          },
          {
            name: '信息熵训练集准确率',
            type: 'line',
            data: entropy_train,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: "#FF0505",
            }
          },
          {
            name: '信息熵测试集准确率',
            type: 'line',
            data: entropy_test,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: "#5500FF",
            }
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>

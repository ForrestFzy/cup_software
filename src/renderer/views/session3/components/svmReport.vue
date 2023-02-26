<template>
  <div style="margin-left: 10%;width: 80%;padding-bottom: 5%;  ">
    <el-scrollbar height="550px">
      <h2>分析步骤</h2>
      <p style="line-height: 200%;text-indent:2em;">1. 通过训练集数据来建立支持向量机模型。</p>
      <p style="line-height: 200%;text-indent:2em;">2. 将建立的支持向量机模型应用到训练、测试数据，得到模型评估结果。</p>
      <p style="line-height: 200%;text-indent:2em;">3. 由于支持向量机具有随机性，每次运算的结果不一样，若保存本次训练模型，后续可以直接上传数据代入到本次训练模型进行计算预测。</p>
      <p style="line-height: 200%;text-indent:2em;">4. 注：支持向量机无法像传统模型一样得到确定的方程，通常通过测试数据预测精度来对模型进行评价。</p>
      <h2>支持向量机模型结果</h2>
      <h1>输出结果1：测试数据预测结果</h1>
      <p>
        <el-table :data="tableData.data" border max-height="300" empty-text="正在计算中...">
          <template v-for="(col, index) in tableData.Tcolumns" :key="index">
            <el-table-column :prop="col.prop" :label="col.label" sortable align="center"></el-table-column>
          </template>
        </el-table>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上表格为预览结果，只显示部分数据，全部数据请点击结果预览-->下载数据按钮导出。</p>
      <p style="line-height: 200%;text-indent:2em;">上表展示了支持向量机对高价值用户的预测情况。</p>
      <h1>输出结果2：不同内核的支持向量机准确率-时间比较图</h1>
      <p>
        <v-chart autoresize :option="option_column" style="height: 300px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上图中展示了几种不同内核的支持向量机准确率-时间比较情况。</p>
      <p style="line-height: 200%;text-indent:2em;">
        <li>核化支持向量机模型的性能最优，但其时间也会更长，且随着样本数的增多，其时间增长会更快。</li>
        <li>提供用户选择接口，可自愿选择是否启用核化支持向量机。</li>
        <li>当基于其他内核的支持向量机不能取得较好效果时，可启用核化支持向量机，大概率能得到更好的性能。</li>
      </p>
      <h1>输出结果3：模型性能随迭代次数的变化图</h1>
      <p>
        <v-chart autoresize :option="option_column1" style="height: 200px"></v-chart>
        <v-chart autoresize :option="option_column2" style="height: 200px"></v-chart>
        <v-chart autoresize :option="option_column3" style="height: 200px"></v-chart>
        <v-chart autoresize :option="option_column4" style="height: 200px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上图中展示了支持向量机的几种不同内核性能随最大迭代次数的变化情况。</p>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const { ipcRenderer } = require('electron')
// 定义表格中的数据
const tableData = reactive({
  loading: false,
  Tcolumns: [],
  data: [],
  url:
    'http://127.0.0.1:5000/downloadSession3?filename=' +
    localStorage.getItem('session3Name'),
})

const option_column = reactive({
  xAxis: {
    name: '时间',
  },
  yAxis: {
    min: 70,
    max: 100,
    name: '准确率',
    position: 'left',
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      symbolSize: 20,
      data: [[0.8, 75.62]],
      type: 'scatter',
    },
    {
      symbolSize: 20,
      data: [[1.3, 77.68]],
      type: 'scatter',
    },
    {
      symbolSize: 20,
      data: [[2.4, 78.24]],
      type: 'scatter',
    },
    {
      label: '123',
      show: true,
      symbolSize: 20,
      data: [[4.2, 88.56]],
      type: 'scatter',
    },
  ],
})

const dataList = ref([])
const linearTrain = ref([])
const linearTest = ref([])
const polyTrain = ref([])
const polyTest = ref([])
const rbfTrain = ref([])
const rbfTest = ref([])
const sigmoidTrain = ref([])
const sigmoidTest = ref([])
const precomputedTrain = ref([])
const precomputedTest = ref([])

bus.on('session3Chart3', (data) => {
  dataList.value = data.dataList
  linearTrain.value = data.linear_train
  linearTest.value = data.linear_test
  polyTrain.value = data.poly_train
  polyTest.value = data.poly_test
  rbfTrain.value = data.rbf_train
  rbfTest.value = data.rbf_test
  sigmoidTrain.value = data.sigmoid_train
  sigmoidTest.value = data.sigmoid_test
  precomputedTrain.value = data.precomputed_train
  precomputedTest.value = data.precomputed_test
})

const option_column1 = reactive({
  title: {
    text: 'linear核性能随最大迭代次数的变化',
  },
  xAxis: {
    type: 'category',
    data: dataList,
  },
  yAxis: {
    type: 'value',
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      data: linearTrain,
      type: 'line',
    },
    {
      data: linearTest,
      type: 'line',
    },
  ],
})
const option_column2 = reactive({
  title: {
    text: 'poly核性能随最大迭代次数的变化',
  },
  xAxis: {
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: polyTrain,
      type: 'line',
    },
    {
      data: polyTest,
      type: 'line',
    },
  ],
})
const option_column3 = reactive({
  title: {
    text: 'rbf核性能随最大迭代次数的变化',
  },
  xAxis: {
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: rbfTrain,
      type: 'line',
    },
    {
      data: rbfTest,
      type: 'line',
    },
  ],
})
const option_column4 = reactive({
  title: {
    text: 'sigmoid核性能随最大迭代次数的变化',
  },
  xAxis: {
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: sigmoidTrain,
      type: 'line',
    },
    {
      data: sigmoidTest,
      type: 'line',
    },
  ],
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
            top: '55%',
            left: 'center',
            text: '信息熵',
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
        xAxis: [
          {
            type: 'category',
            data: dataList,
          },
          {
            type: 'category',
            data: dataList,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {},
          {
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
              color: '#1AD8E2',
            },
          },
          {
            name: '基尼指数测试集准确率',
            type: 'line',
            data: gini_test,
            lineStyle: {
              color: '#5DF412',
            },
          },
          {
            name: '信息熵训练集准确率',
            type: 'line',
            data: entropy_train,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: '#FF0505',
            },
          },
          {
            name: '信息熵测试集准确率',
            type: 'line',
            data: entropy_test,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: '#5500FF',
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>

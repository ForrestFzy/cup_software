<template>
  <div style="margin-left: 10%;width: 80%;padding-bottom: 5%;  ">
    <el-scrollbar height="550px">
      <h2>分析步骤</h2>
      <p style="line-height: 200%;text-indent:2em;">1.通过训练集数据来建立决策数模型，得到决策树结构。</p>
      <p style="line-height: 200%;text-indent:2em;">2.通过建立的决策树来计算特征重要性。</p>
      <p style="line-height: 200%;text-indent:2em;">3.将建立的决策树模型应用到训练、测试数据，得到模型的分类评估结果。</p>
      <p style="line-height: 200%;text-indent:2em;">4.由于决策树具有随机性，每次运算的结果不一样，若保存本次训练模型，后续可以直接上传数据代入到本次训练模型进行计算分类。</p>
      <p style="line-height: 200%;text-indent:2em;">5.注：决策树无法像传统模型一样得到确定的方程，在每个决策节点上，所选择的分割特征决定了最终的分类结果，通常通过测试数据分类效果来对模型进行评价。</p>
      <h2>决策树模型结果</h2>
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
      <p style="line-height: 200%;text-indent:2em;">上表展示了决策树模型对电力用户数据的分类结果，分类结果值是拥有最大预测概率的分类组别</p>
      <h1>输出结果2：决策树结构</h1>
      <p>
        <v-chart autoresize :option="option_column1" style="height: 300px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上图展示了决策树结构，内部节点给出了被分枝特征的具体切分情况，即根据某个特征的某个切分值进行划分。</p>
      <p style="text-align: center;width: 50%;margin:auto;">（若节点数大于30，点击下载按钮查看决策树结构）</p>
      <p style="line-height: 200%;text-indent:2em;">
        <li>gini/信息熵用以确定对哪一个特征进行切分。</li>
        <li>样本种类分布是该节点中属于各个分类组别的样本数量，如[10,5,5]表示三种分类组别分别有10、5、5个样本数量。</li>
        <li>分类情况是该节点的样本统一被划分到的分类组别（这是由拥有最大样本量的组别所决定的）。</li>
      </p>
      <h1>输出结果3：具有成本复杂性修剪的后修剪决策树图</h1>
      <p>
        <!-- 后修剪决策树-->
        <v-chart autoresize :option="option_column1" style="height: 500px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上表展示了具有成本复杂性修剪的后修剪决策树的训练集、测试集准确率。</p>
      <h1>输出结果4：基尼指数和信息熵</h1>
      <p>
        <v-chart autoresize :option="option_column" style="height: 600px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上表展示了基尼指数的训练集准确率和测试集准确率。</p>
      <p style="line-height: 200%;text-indent:2em;">上表展示了信息熵的训练集准确率和测试集准确率。</p>

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

bus.on('session3Chart1', (res) => {
  tableData.Tcolumns = res.data.columns
  tableData.data = res.data.data
})
bus.on('session3Chart2', (res) => {
  tableData.Tcolumns = res.data.columns
  tableData.data = res.data.data
})
bus.on('session3Chart3', (res) => {
  tableData.Tcolumns = res.data.columns
  tableData.data = res.data.data
})

const option_column1 = reactive({
  title: {
    text: '',
  },
  legend: {
    data: ['训练集准确率', '测试集准确率', 'Naive Bayes + Sigmoid'],
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: [
      0.0, 0.01, 0.02, 0.03, 0.04, 0.051, 0.061, 0.071, 0.081, 0.091, 0.101,
      0.111, 0.121, 0.131, 0.141, 0.152, 0.162, 0.172, 0.182, 0.192, 0.202,
      0.212, 0.222, 0.232, 0.242, 0.253, 0.263, 0.273, 0.283, 0.293, 0.303,
      0.313, 0.323, 0.333, 0.343, 0.354, 0.364, 0.374, 0.384, 0.394, 0.404,
      0.414, 0.424, 0.434, 0.444, 0.455, 0.465, 0.475, 0.485, 0.495, 0.505,
      0.515, 0.525, 0.535, 0.545, 0.556, 0.566, 0.576, 0.586, 0.596, 0.606,
      0.616, 0.626, 0.636, 0.646, 0.657, 0.667, 0.677, 0.687, 0.697, 0.707,
      0.717, 0.727, 0.737, 0.747, 0.758, 0.768, 0.778, 0.788, 0.798, 0.808,
      0.818, 0.828, 0.838, 0.848, 0.859, 0.869, 0.879, 0.889, 0.899, 0.909,
      0.919, 0.929, 0.939, 0.949, 0.96, 0.97, 0.98, 0.99, 1.0,
    ],
  },

  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '训练集准确率',
      data: [
        1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97,
        0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.836, 0.836, 0.836,
        0.836, 0.836, 0.836, 0.836, 0.836, 0.836, 0.836, 0.836, 0.836, 0.836,
        0.836, 0.836, 0.836, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
        0.418, 0.418, 0.418, 0.418, 0.418, 0.418,
      ],
      type: 'line',
    },
    {
      name: '测试集准确率',
      data: [
        1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97,
        0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.97, 0.758, 0.758, 0.758,
        0.758, 0.758, 0.758, 0.758, 0.758, 0.758, 0.758, 0.758, 0.758, 0.758,
        0.758, 0.758, 0.758, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
        0.424, 0.424, 0.424, 0.424, 0.424, 0.424,
      ],
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

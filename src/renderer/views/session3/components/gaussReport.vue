<template>
  <div style="margin-left: 10%;width: 80%;padding-bottom: 5%;  ">
    <el-scrollbar height="550px">
      <h2>分析步骤</h2>
      <p style="line-height: 200%;text-indent:2em;">1、通过训练集数据来建立高斯朴素贝叶斯模型。</p>
      <p style="line-height: 200%;text-indent:2em;">2、将建立的朴素贝叶斯模型应用到训练、测试数据，得到模型的分类评估结果。</p>
      <p style="line-height: 200%;text-indent:2em;">3、若朴素贝叶斯选择了数据洗牌功能，每次运算的结果不一样，若保存本次训练模型，后续可以直接上传数据代入到本次训练模型进行计算分类。</p>
      <p style="line-height: 200%;text-indent:2em;">4、注：朴素贝叶斯分类器模型无法像传统模型一样得到确定的方程，通常通过测试数据分类效果来对模型进行评价。</p>
      <h2>高斯朴素贝叶斯模型结果</h2>
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
      <p style="line-height: 200%;text-indent:2em;">上表展示了高斯朴素贝叶斯对电力用户数据的分类结果，分类结果值是拥有最大预测概率的分类组别。</p>
      <h1>输出结果2：朴素贝叶斯概率校准图</h1>
      <p>
        <v-chart autoresize :option="option_column1" style="height: 300px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上图中展示了高斯朴素贝叶斯的概率校准图情况。</p>
      <h1>输出结果3：模型评估结果</h1>
      <p style="text-align: center;width: 50%;margin:auto;">
        <el-table :data="AccessData" style="text-align: center;">
          <el-table-column prop="name" label="" />
          <el-table-column prop="acc" label="准确率" />
          <el-table-column prop="recall" label="召回率" />
          <el-table-column prop="precision" label="精确率" />
          <el-table-column prop="f1" label="F1" />
        </el-table>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上表中展示了交叉验证集、训练集和测试集的预测评价指标，通过量化指标来衡量朴素贝叶斯的预测效果。其中，通过交叉验证集的评价指标可以不断调整超参数，以得到可靠稳定的模型。</p>
      <p style="line-height: 200%;text-indent:2em;">
        <li>准确率：预测正确样本占总样本的比例，准确率越大越好。</li>
        <li>召回率：实际为正样本的结果中，预测为正样本的比例，召回率越大越好。</li>
        <li>精确率：预测出来为正样本的结果中，实际为正样本的比例，精确率越大越好。</li>
        <li>F1：精确率和召回率的调和平均，精确率和召回率是互相影响的，虽然两者都高是一种期望的理想情况，然而实际中常常是精确率高、召回率就低，或者召回率低、但精确率高。若需要兼顾两者，那么就可以用F1指标。</li>
      </p>
      <h1>输出结果4：模型训练集、测试集得分随var_smoothing参数变化图</h1>
      <p>
        <v-chart autoresize :option="option_column" style="height: 300px"></v-chart>
      </p>
      <p style="text-indent:2em;"><b>图表说明：</b></p>
      <p style="line-height: 200%;text-indent:2em;">上图中展示了模型训练集、测试集得分随var_smoothing的参数变化情况。</p>

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


const AccessData = [
  {
    name: '训练集',
    acc: 80.56,
    recall: 80.56,
    precision: 45.63,
    f1: 98.65,
  },
  {
    name: '测试集',
    acc: 98.65,
    recall: 98.65,
    precision: 98.65,
    f1: 98.65,
  },
]

const option_column1 = reactive({
  title: {
    text: '',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Naive Bayes', 'Naive Bayes + Isotonic', 'Naive Bayes + Sigmoid'],
  },
  xAxis: {
    type: 'category',
    data: [
      1e-10, 5.264105263157895e-7, 1.052721052631579e-6, 1.5790315789473685e-6,
      2.1053421052631576e-6, 2.631652631578947e-6, 3.1579631578947367e-6,
      3.684273684210526e-6, 4.210584210526316e-6, 4.736894736842106e-6,
      5.2632052631578946e-6, 5.789515789473684e-6, 6.315826315789474e-6,
      6.842136842105263e-6, 7.368447368421053e-6, 7.894757894736842e-6,
      8.421068421052631e-6, 8.947378947368421e-6, 9.473689473684211e-6, 1e-5,
    ],
  },

  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Naive Bayes',
      data: [
        0.7272727272727273, 0.7575757575757576, 0.7272727272727273,
        0.7272727272727273, 0.7878787878787878, 0.8484848484848485,
        0.8484848484848485, 0.8484848484848485, 0.8484848484848485,
        0.8484848484848485, 0.8484848484848485, 0.8484848484848485,
        0.8181818181818182, 0.8181818181818182, 0.8181818181818182,
        0.8181818181818182, 0.8181818181818182, 0.8181818181818182,
        0.8181818181818182, 0.8181818181818182,
      ],
      type: 'line',
    },
    {
      name: 'Naive Bayes + Isotonic',
      data: [
        0.7272727272727273, 0.8181818181818182, 0.8181818181818182,
        0.8484848484848485, 0.8484848484848485, 0.8787878787878788,
        0.8787878787878788, 0.8787878787878788, 0.8787878787878788,
        0.8787878787878788, 0.8787878787878788, 0.8484848484848485,
        0.8484848484848485, 0.8181818181818182, 0.8181818181818182,
        0.8181818181818182, 0.8181818181818182, 0.8181818181818182,
        0.8181818181818182, 0.8181818181818182,
      ],
      type: 'line',
    },
    {
      name: 'Naive Bayes + Sigmoid',
      data: [
        0.7575757575757576, 0.7878787878787878, 0.8181818181818182,
        0.8787878787878788, 0.8787878787878788, 0.8787878787878788,
        0.8787878787878788, 0.8787878787878788, 0.8181818181818182,
        0.8181818181818182, 0.8181818181818182, 0.8181818181818182,
        0.7878787878787878, 0.7878787878787878, 0.7575757575757576,
        0.7272727272727273, 0.7575757575757576, 0.7575757575757576,
        0.7878787878787878, 0.7878787878787878,
      ],
      type: 'line',
    },
  ],
})
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
          data: ['训练集得分', '测试集得分'],
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
          type: 'category',
          boundaryGap: false,
          data: dateList,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '训练集得分',
            type: 'line',
            data: TrainList,
          },
          {
            name: '测试集得分',
            type: 'line',
            data: TestList,
          },
        ],
      },
    }
  },
}
</script>


<style>
</style>

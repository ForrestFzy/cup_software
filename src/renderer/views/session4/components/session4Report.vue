<template>
  <div>
    <el-card class="box-card">
      <div style="margin-left: 10%;width: 80%;padding-bottom: 5%;  ">
        <el-scrollbar height="550px">
          <h2>分析步骤</h2>
          <p style="line-height: 200%;text-indent:2em;">1、通过训练集数据建立LSTM模型，并使用训练后的模型继续向后预测。</p>
          <p style="line-height: 200%;text-indent:2em;">2、将建立的训练集用于训练训练、测试数据，得到模型的预测评估结果。</p>
          <p style="line-height: 200%;text-indent:2em;">3、该模型一共分为两种：单变量的LSTM和多变量的LSTM。请注意在对话框选取合适的模式进行训练和预测。</p>
          <p style="line-height: 200%;text-indent:2em;">4、该文件所选取的文件夹内的每个文件需满足列名一样；</p>
          <p style="line-height: 200%;text-indent:2em;">5、若只有单个文件，请选择其父文件夹；</p>
          <p style="line-height: 200%;text-indent:2em;">6、注：该方法运行时间较长，请耐心等待。</p>
          <h2>LSTM网络预测结果</h2>
          <h1>输出结果1：三个时间单位的预测结果</h1>
          <p style="text-align: left;width: 80%;margin:auto;">
            <el-table :data="tableData.data" border max-height="300" empty-text="正在计算中...">
              <template v-for="(col, index) in tableData.Tcolumns" :key="index">
                <el-table-column :prop="col.prop" :label="col.label" sortable align="center"></el-table-column>
              </template>
            </el-table>
          </p>
          <p style="text-indent:2em;"><b>图表说明：</b></p>
          <p style="line-height: 200%;text-indent:2em;">上表预测了每个用户在未来的3个时间单位内所使用的电力负荷。</p>
          <h1>输出结果2：模型训练损失函数变化</h1>
          <p>
            <v-chart autoresize :option="option_column1" style="height: 400px"></v-chart>
          </p>
          <p style="text-indent:2em;"><b>图表说明：</b></p>
          <p style="line-height: 200%;text-indent:2em;">上图表示的是LSTM模型在训练过程中，模型loss随迭代次数的变化情况。</p>
          <h1>输出结果3：模型评估结果</h1>
          <p style="text-align: center;width: 50%;margin:auto;">
            <el-table :data="AccessData" style="text-align: center;">
              <el-table-column prop="MSE" label="MSE" />
              <el-table-column prop="RMSE" label="RMSE" />
              <el-table-column prop="MAE" label="MAE" />
              <el-table-column prop="R2" label="R2" />
            </el-table>
          </p>
          <p style="text-indent:2em;"><b>图表说明：</b></p>
          <p style="line-height: 200%;text-indent:2em;">上表展示了该LSTM模型在该数据集上的性能。</p>
          <p style="line-height: 200%;text-indent:2em;">
            <li>MSE：均方误差（Mean Squared Error）</li>
          <div style="text-align: center;margin:auto;">
            <math-jax latex="MSE=\frac{1}{n}\sum_{i=1}^n{(\hat{y_i}-y_i)}^2" />
          </div>
          <li>RMSE：均方根误差（Root Mean Square Error）</li>
          <div style="text-align: center;margin:auto;">
            <math-jax latex="MSE=\sqrt{\frac{1}{n}\sum_{i=1}^n{(\hat{y_i}-y_i)}^2}" />
          </div>
          <li>MAE：平均绝对误差（Mean Absolute Error）</li>
          <div style="text-align: center;margin:auto;">
            <math-jax latex="MSE=\frac{1}{n}\sum_{i=1}^n{|\hat{y_i}-y_i|}" />
          </div>
          <li>
            <math-jax latex="R^2" />：确定系数
          </li>
          <div style="text-align: center;margin:auto;font-size=20px;">
            <math-jax latex="R^2=1-\frac{\sum_{i=1}^n{(\hat{y_i}-y_i)}^2}{\sum_{i=1}^n{(y_i-\bar{y})^2}}" />
          </div>
          </p>

        </el-scrollbar>
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

const AccessData = [
  {
    MSE: 80.56,
    RMSE: 80.56,
    MAE: 45.63,
    R2: 98.65,
  },
]

const option_column1 = reactive({
  xAxis: {
    type: 'category',
    data: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        1.98, 1.95, 1.96, 0.56, 0.5, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46, 0.46,
        0.46, 0.46, 0.46, 0.46, 0.46,
      ],
      type: 'line',
      smooth: true,
    },
  ],
})

// 定义表格中的数据
const tableData = reactive({
  loading: false,
  Tcolumns: [
    {
      prop: 1,
      label: '用户',
    },
    {
      prop: 2,
      label: '2010-6-1 00:00',
    },
    {
      prop: 3,
      label: '2010-6-1 00:30',
    },
    {
      prop: 4,
      label: '2010-6-1 01:00',
    },
  ],
  data: [
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
    {
      1: 'ID1',
      2: 0.0023,
      3: 0.9563,
      4: 1.2569,
    },
  ],
})

var dirpath = localStorage.getItem('dirpath')
var date_col = localStorage.getItem('date_col4')
var data_col = localStorage.getItem('y_col4')
proxy.$axios.post('http://127.0.0.1:5000/session4PreThree', {
    dirpath: dirpath,
    date_col: date_col,
    load_col: data_col,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      console.log(res.data)
      tableData.Tcolumns = res.data.columns
      tableData.data = res.data.data
    }
  })
proxy.$axios
  .post('http://127.0.0.1:5000/session4ReadData', {
    dirpath: dirpath,
    date_col: date_col,
    load_col: data_col,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      AccessData.MSE = res.data.evaluate.MSE
      AccessData.RMSE = res.data.evaluate.RMSE
      AccessData.MAE = res.data.evaluate.MAE
      AccessData.MAPE = res.data.evaluate.MAPE
      AccessData.R2 = res.data.evaluate.R2
    }
  })

</script>

<style>
</style>

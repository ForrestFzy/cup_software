<template>
  <div>
    <el-card class="box-card">
      <div style="margin-left: 10%;width: 80%;padding-bottom: 5%;  ">
        <el-scrollbar height="550px">
          <h2>分析步骤</h2>
          <p style="line-height: 200%;text-indent:2em;">1、DBSCAN(Density-Based Spatial Clustering of Applications with Noise)是一个比较有代表性的基于密度的聚类算法。</p>
          <p style="line-height: 200%;text-indent:2em;">2、DBScan需要二个参数： 扫描半径 (eps)和最小包含点数(minPts)。 任选一个未被访问(unvisited)的点开始，找出与其距离在eps之内(包括eps)的所有附近点。</p>
          <p style="line-height: 200%;text-indent:2em;">3、如果 附近点的数量 大于等于 minPts，则当前点与其附近点形成一个簇，并且出发点被标记为已访问(visited)。 然后递归，以相同的方法处理该簇内所有未被标记为已访问(visited)的点，从而对簇进行扩展。</p>
          <p style="line-height: 200%;text-indent:2em;">4、如果 附近点的数量 大于 minPts，则该点暂时被标记作为噪声点。</p>
          <p style="line-height: 200%;text-indent:2em;">5、若如果簇充分地被扩展，即簇内的所有点被标记为已访问，然后用同样的算法去处理未被访问的点。</p>
          <p style="line-height: 200%;text-indent:2em;">6、该方法能够在噪声的空间数据库中发现任意形状的聚类。</p>
          <h2>聚类用户集群划分</h2>
          <h1>输出结果1：用户集群中占比最大的10种因素</h1>
          <el-select v-model="value" placeholder="Select" @change="handleChange">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <p style="text-align: left;margin:auto;">
            <v-chart id="clusterReportChart" autoresize :option="option_column" style="height: 400px; width: 100%;"></v-chart>

          </p>
          <h1>输出结果2：用户聚类降维后的可视化展示</h1>
          <p>
            <el-image style="width: 100%; height: 500px" :src="url" :fit="fit" />
          </p>
          <p style="text-indent:2em;"><b>图表说明：</b></p>
          <p style="line-height: 200%;text-indent:2em;">上图中展示的是将聚类后的数据降维得到的结果，通过将所有属性降到三维，以直观看出模型的聚类性能</p>
          <p style="line-height: 200%;text-indent:2em;">上图中的每一种颜色表示一类人群，由上图可以看出，模型的聚类效果非常优秀。</p>

        </el-scrollbar>
      </div>

    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'
import 'echarts-gl'

const { proxy } = getCurrentInstance()
const router = useRouter()

const x = ref([])
const y = ref([])
const value = ref(0)
const options = reactive([])
const url = ref('http://fcode.ltd/cluster.svg')

const filepath = reactive(localStorage.getItem('session5FilePath'))
var percent = localStorage.getItem('percent')
var func = localStorage.getItem('func5')
proxy.$axios
  .post('http://127.0.0.1:5000/sessionReportChart', {
    filepath: filepath,
    del_percent: percent,
    func: func,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      x.value = res.data.x
      y.value = res.data.y
      for (var i = 0; i < res.data.x.length; i++) {
        options.push({
          value: i,
          label: '第' + (i + 1).toString() + '类',
        })
      }
      // 设置图的内容
      var chartDom = document.getElementById('clusterReportChart')
      var myChart = echarts.init(chartDom)
      myChart.clear()
      myChart.setOption({
        title: {
          left: 'center',
          text: '第一类',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
        },
        dataZoom: [
          //加上dataZoom可实现缩放
          {
            type: 'inside',
            xAxisIndex: 0,
          },
        ],
        xAxis: {
          type: 'category',
          data: x._rawValue[0],
          axisLabel: {
            formatter: function (name) {
              return name.length > 10 ? name.slice(0, 10) + '...' : name
            },
          },
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: y._rawValue[0],
            type: 'line',
          },
        ],
      })
    }
  })

const handleChange = (val) => {
  // 设置图的内容
  var chartDom = document.getElementById('clusterReportChart')
  var myChart = echarts.init(chartDom)
  myChart.clear()
  myChart.setOption({
    title: {
      left: 'center',
      text: '第一类',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    dataZoom: [
      //加上dataZoom可实现缩放
      {
        type: 'inside',
        xAxisIndex: 0,
      },
    ],
    xAxis: {
      type: 'category',
      data: x._rawValue[val],
      axisLabel: {
        formatter: function (name) {
          return name.length > 10 ? name.slice(0, 10) + '...' : name
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: y._rawValue[val],
        type: 'line',
      },
    ],
  })
}

const AccessData = [
  {
    MSE: 80.56,
    RMSE: 80.56,
    MAE: 45.63,
    R2: 98.65,
  },
]

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
</script>



<style>
</style>

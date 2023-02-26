<template>
  <div>
    <el-card>

      <template #header>
        <div class="card-header">
          <span>
            <el-select v-model="prop_col" placeholder="下拉选择属性" @change="handleChange">
              <el-option v-for="col in session5.Tcolumns" :key="col.prop" :label="col.label" :value="col.label" />
            </el-select>
          </span>
          <span></span>
          <span></span>
          <el-button class="button" text @click="dialogVisible=true">看图指南</el-button>
        </div>
      </template>
      <el-scrollbar height="550px">
        <v-chart autoresize :option="option_column1" style="height: 500px"></v-chart>
        <v-chart autoresize :option="option_column2" style="height: 600px;"></v-chart>
      </el-scrollbar>
    </el-card>

    <el-dialog v-model="dialogVisible" title="看图指南" width="30%" :before-close="handleClose">
      <span>用于分析各类人群在单个属性上的数据分布情况</span>
      <p>在左侧下拉框选中目标属性后，就会自动出现数据分布的图像，适合顶点分析某类属性在各类人群中的数据分布情况，对各类人群中的某个属性做出分析</p>
      <template #footer>
        <span class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
          <el-button type="primary" @click="dialogVisible = false">我已知晓</el-button>
        </span>
      </template>
    </el-dialog>
  </div>

</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const { proxy } = getCurrentInstance()
const router = useRouter()

const dialogVisible = ref(false)

const prop_col = ref('')
const session5 = reactive({
  Tcolumns: [],
})

const filepath = reactive(localStorage.getItem('session5FilePath'))
var percent = localStorage.getItem('percent')
var func = localStorage.getItem('func5')
// 显示下拉框
proxy.$axios
  .post('http://127.0.0.1:5000/session5Columns', {
    filepath: filepath,
    del_percent: percent,
    func: func,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      session5.Tcolumns = res.data.columns
    }
  })
// 接受图形的数据
const testName = ["高价值用户", "潜力型用户", "大众型用户", "低价值用户"]
const lineData = ref([])
const handleChange = () => {
  proxy.$axios
    .post('http://127.0.0.1:5000/session5PaintOne', {
      filepath: filepath,
      del_percent: percent,
      prop_col: prop_col._rawValue,
      func: func,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        option_column1.series = []
        lineData.value = res.data.data
        // console.log(res.data.content)
        option_column1.dataset.source = res.data.content
        option_column2.dataset.source = res.data.content
        option_column1.series = []
        option_column2.series = []
        option_column2.title = []
        for (var i = 1; i < res.data.length + 1; i++) {
          option_column1.series.push({ type: 'bar' })
          var x = (25 * ((i % 3) + 1)).toString() + '%'
          var y = (35 * Math.ceil(i / 3)).toString() + '%'
          var y2 = (35 * Math.ceil(i / 3) + 15).toString() + '%'
          option_column2.series.push({
            type: 'pie',
            radius: '25%',
            center: [x, y],
            encode: {
              itemName: res.data.content[0][0],
              value: res.data.content[0][i],
            },
          })
          option_column2.title.push({
            subtext: res.data.content[0][i],
            left: x,
            top: y2,
            textAlign: 'center',
          })
        }
      }
    })
}

const option_column1 = reactive({
  title: [
    {
      text: '用户集群的属性对比',
      left: 'center',
    },
  ],
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  dataset: {
    source: [],
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  dataZoom: {
    // 放大和缩放
    type: 'inside',
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      fontSize: 16,
    },
  },
  yAxis: {
    axisLabel: {
      fontSize: 16,
    },
  },
  series: [],
})

const option_column2 = reactive({
  title: [
    {
      text: '',
      left: 'center',
      top: '0%',
    },
  ],
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      fontSize: 16,
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  dataset: {
    source: [],
  },
  series: [,],
})
</script>

<style>
</style>

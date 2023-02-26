<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>数据预览</span>
        <span>文件：{{filepath.split("\\")[filepath.split("\\").length-1]}}
          <el-tooltip content="由于数据量较大，因此这里只展示前5列的50行数据，要想预览更多数据，请下载" placement="right" effect="light">
            <el-icon>
              <svg t="1655708068861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2153" width="64" height="64">
                <path d="M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z" p-id="2154" fill="#1296db"></path>
              </svg>
            </el-icon>
          </el-tooltip>
        </span>

        <el-button class="button" text @click="downloadData5">导出数据</el-button>
      </div>
    </template>
    <el-table v-loading="loading" :data="tableData.data" border max-height="520" empty-text="正在打开..." style="width: 100%; height: 100%;fontSize: 16px;">
      <template v-for="(col, index) in tableData.Tcolumns" :key="index">
        <!-- <el-table-column v-if="col.prop==1" fixed :prop="col.prop" :label="col.label" align="center"></el-table-column> -->
        <el-table-column :prop="col.prop" :label="col.label" align="center"></el-table-column>
      </template>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from '../../../views/public.js'

const { proxy } = getCurrentInstance()
const router = useRouter()
const { ipcRenderer } = require('electron')
const loading = ref(false)
const filepath = reactive(localStorage.getItem('session5FilePath'))
var percent = localStorage.getItem('percent')
var func = localStorage.getItem('func5')

bus.on('session5Loading', (data) => {
  loading.value = data
})

// 定义表格中的数据
const tableData = reactive({
  loading: false,
  Tcolumns: [],
  data: [],
})

proxy.$axios
  .post('http://127.0.0.1:5000/session5ReadData', {
    filepath: filepath,
    del_percent: percent,
    func: func,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      tableData.Tcolumns = res.data.columns
      tableData.data = res.data.data
      loading.value = false
    }
  })

const downloadData5 = () => {
  var url =
    'http://127.0.0.1:5000/download1?filepath=' +
    localStorage.getItem('session5FilePath')
  ipcRenderer.send('download', url)
}
</script>

<style>
</style>

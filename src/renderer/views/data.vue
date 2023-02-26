<template>
  <div class="data-content" v-loading="tableData.loading" element-loading-text="正在打开..." :element-loading-svg="svg">
    <el-card class="data-card">
      <template #header>
        <div class="card-header">
          <span>数据预览</span>
          <span>文件路径：{{tableData.filePath}}</span>
          <el-button class="button" text @click="downloadData">下载数据</el-button>
        </div>
      </template>
      <el-table :data="tableData.data" border max-height="600" empty-text="正在打开..." style="width: 100%; height: 100%; font-size: 16px;">
        <template v-for="(col, index) in tableData.Tcolumns" :key="index">
          <el-table-column :prop="col.prop" :label="col.label" align="center"></el-table-column>
        </template>
      </el-table>
      <div class="demo-pagination-block" style="margin:auto;text-align:center;">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :small="false" :disabled="disabled" :background="true" layout="prev, pager, next, jumper" :total="100" @current-change="handleCurrentChange" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref, getCurrentInstance } from 'vue'
import bus from './public.js'

const { proxy } = getCurrentInstance()
const { ipcRenderer } = require('electron')

// 表格的高度需要自定义为当前窗口高度的0.9倍

// 定义正在加载的图标样式：
const svg = `<svg t="1655430476330" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2634" width="64" height="64"><path d="M571.392 87.074133l-0.631467 0.8704-356.9152 465.92c-10.222933 14.4384-12.544 32.512-3.669333 48.503467l2.013867 3.310933c8.618667 14.677333 23.808 22.766933 40.891733 22.766934l190.122667-0.017067-45.841067 270.08-0.631467 2.679467c-4.437333 21.128533 6.144 39.5776 24.832 48.401066l2.372267 1.024 0.529067 0.324267c5.12 2.696533 10.7008 4.215467 16.4352 4.642133l3.464533 0.136534c13.755733 0 26.368-5.410133 36.078933-15.121067a34.133333 34.133333 0 0 0 3.7376-4.437333L812.032 472.576a34.133333 34.133333 0 0 0 5.632-13.090133c2.048-10.376533 2.048-20.48-0.375467-30.173867a34.133333 34.133333 0 0 0-2.645333-7.133867l-1.6384-3.003733c-8.6528-14.557867-23.773867-22.596267-40.789333-22.596267l-162.833067-0.017066 46.165333-272.093867a34.133333 34.133333 0 0 0 0.477867-5.700267l-0.068267-3.072c-0.9216-18.312533-9.984-34.2016-26.760533-41.2672l-1.143467-0.426666-1.006933-0.597334c-19.694933-10.581333-41.984-4.539733-55.671467 13.6704z m2.833067 108.5952l-38.894934 229.3248-0.341333 2.491734a34.133333 34.133333 0 0 0 33.9968 37.358933l164.898133-0.017067-254.856533 360.379734 38.229333-225.1776 0.341334-2.491734a34.133333 34.133333 0 0 0-33.979734-37.376H294.980267l279.2448-364.4928z" fill="#1296db" p-id="2635"></path><path d="M828.672 559.616a34.133333 34.133333 0 0 1 30.122667 54.698667l-99.874134 135.0656-55.7568-39.389867 100.608-136.055467 0.256-0.3584a34.048 34.048 0 0 1 24.644267-13.943466z" fill="#1296db" p-id="2636"></path></svg>`

const pageSize = ref(100) // 表示当前页数
const currentPage = ref(1) // 表页面的大小
// 定义表格中的数据
const tableData = reactive({
  filePath: '',
  loading: false,
  Tcolumns: [],
  data: [],
})
const dirTableData = reactive({
  columns: [],
  data_list: [],
  subfile: [],
})
var sessionType = localStorage.getItem('sessionType')
if (sessionType === 'file') {
  var fileName = localStorage.getItem('session1FilePath')
    proxy.$axios.post('http://127.0.0.1:5000/uploadfile', {
    path: fileName,
  }).then(function (res) {
    console.log(res.data)
  })
  proxy.$axios
    .post('http://127.0.0.1:5000/getFileContent', {
      filename: fileName,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        tableData.Tcolumns = res.data.columns
        tableData.data = res.data.data
        tableData.filePath = localStorage.getItem('session1FilePath')
        localStorage.setItem('columns', res.data.columns)
      }
    })
} else if (sessionType === 'dir') {
  var fileName = localStorage.getItem('session1DirPath')
  proxy.$axios
    .post('http://127.0.0.1:5000/getDirContent', {
      dirpath: fileName,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        console.log(res.data)
        dirTableData.columns = res.data.columns
        dirTableData.data_list = res.data.data
        dirTableData.subfile = res.data.subfile

        pageSize.value = 100 / res.data.data.length
        tableData.Tcolumns = dirTableData.columns
        tableData.data = dirTableData.data_list[0]
        tableData.filePath = dirTableData.subfile[0]
        localStorage.setItem('columns', res.data.columns)
      }
    })
}

// 换页调用方法
const handleCurrentChange = (val) => {
  tableData.data = dirTableData.data_list[val - 1]
  tableData.filePath = dirTableData.subfile[val - 1]
  localStorage.setItem('session1FilePath', tableData.filePath)
}

// 点击下载，传参下载的链接即可
const downloadData = () => {
  var url = 'http://127.0.0.1:5000/download1?filepath=' + tableData.filePath
  ipcRenderer.send('download', url)
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  /* background-color: rgb(31,34,82); */
}

.data-content {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

/* 卡片头部标签的样式 */
.card-header {
  height: 20px;
}
</style>

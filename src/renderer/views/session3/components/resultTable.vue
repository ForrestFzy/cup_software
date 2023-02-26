<template>
  <el-card class="data-card">
    <template #header>
      <div class="card-header">
        <span>数据预览</span>
        <span>高价值用户预测</span>
        <el-button class="button" text @click="downloadData">下载数据</el-button>
      </div>
    </template>
      <el-table :data="tableData.data" border max-height="520" empty-text="正在计算中..." style="font-size:16px;width:100%;height:100%;">
        <template v-for="(col, index) in tableData.Tcolumns" :key="index">
          <el-table-column :prop="col.prop" :label="col.label" sortable  align="center"></el-table-column>
        </template>
      </el-table>
  </el-card>
</template>

<script setup>
import {reactive} from 'vue'
import bus from '../../public.js'
const { ipcRenderer } = require('electron')
// 定义表格中的数据
const tableData = reactive({
  loading: false,
  Tcolumns: [],
  data: [],
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
// 点击下载，传参下载的链接即可
const downloadData = () => {
  var url = "http://127.0.0.1:5000/download1?filepath=" + localStorage.getItem('session3Name')
  ipcRenderer.send('download', url)
}
</script>

<style>

</style>

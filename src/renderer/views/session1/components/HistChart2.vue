<template>
  <el-card class="data-card">
    <template #header>
      <div class="card-header">
        <span>数据预览</span>
        <span>平均缴费次数与平均缴费金额</span>
        <el-button class="button" text @click="downloadData">下载数据</el-button>
      </div>
    </template>
    <el-table :data="tableData.data" border max-height="500" empty-text="正在打开..." style="width: 100%; height: 100%; font-size: 16px;">
      <template v-for="(col, index) in tableData.Tcolumns" :key="index">
        <el-table-column :prop="col.prop" :label="col.label" align="center"></el-table-column>
      </template>
    </el-table>
  </el-card>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import bus from '../../public.js'
const { ipcRenderer } = require('electron')

// 定义表格中的数据
const tableData = reactive({
  loading: false,
  Tcolumns: [],
  data: [],
})

bus.on('chart1data', (data) => {
  tableData.Tcolumns = data.columns
  tableData.data = data.data
})
// 点击下载，传参下载的链接即可
const downloadData = () => {
  var url = 'http://127.0.0.1:5000/download1?filepath=' + localStorage.getItem('savePath1')
  ipcRenderer.send('download', url)
}
</script>

<style>


</style>

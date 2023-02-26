<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>数据预览</span>
        <el-button class="button" text>下载数据</el-button>
      </div>
    </template>
    <el-table :data="tableData" height="280" style="width: 100%;">
      <el-table-column prop="date" label="日期" width="110" />
      <el-table-column prop="name" label="姓名" width="80" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-card>

</template>

<script setup>
// 定义表格中的数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style>

</style>

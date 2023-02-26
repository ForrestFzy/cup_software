<template>
  <div class="about">
    <el-card style="height: 100%;">
      <div class="about_left">
        <el-image style="width: 300px; height: 300px" :src="url" :fit="fit" />
        <h1>EUS电力用户分析系统</h1>
        <h4>version:1.0.0</h4>
        <h4>email:forfziy@163.com</h4>
        <h4>info:软件杯</h4>
      </div>

      <div class="about_right">
        <h1 style="line-height: 200%;text-indent:2em;text-align: center;font-weight: bold;width: 80%;">
          {{isupdate.title}}
        </h1>
        <p v-if="isupdate.title=='有更新'">
          version:{{isupdate.version}}
        </p>
        <p v-if="isupdate.title=='有更新'">
          更新内容：{{isupdate.content}}
        </p>
        <el-button type="primary" @click="downloadNewVersion" v-if="isupdate.title=='有更新'">点击下载</el-button>
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

const url = "http://fcode.ltd/EUS.ico"

const isupdate = reactive({
  title: '',
  content: '',
  url: '',
  version: '',
})

proxy.$axios.post('http://127.0.0.1:5000/update').then(function (res) {
  if (res.data.code === 200) {
    console.log(res.data)
    isupdate.title = res.data.data[0].title
    isupdate.content = res.data.data[0].content
    isupdate.url = res.data.data[0].link
    isupdate.version = res.data.data[0].version
  }
})

const downloadNewVersion = () => {
  ipcRenderer.send('download', isupdate.url)
}
</script>

<style>
.about {
  height: 100%;
}
.about .el-card__body {
  height: 90%;
}
.about_left {
  width: 40%;
  height: 100%;
  float: left;
  text-align: center;
  margin-top: 6%;
}
.about_right {
  width: 50%;
  height: 100%;
  float: right;
  text-align: center;
  margin-top: 6%;
}
</style>

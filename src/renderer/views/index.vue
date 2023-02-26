<template>
  <div class="main">
    <div class="left">
      <div class="leftContent">
        <h2 style="font-weight: normal">电力智能分析系统</h2>
        <h3 style="font-weight: normal">启动</h3>

        <el-upload class="upload-demo" action="#" :file-list="fileupload.fileList" accept=".*" :limit="1" :on-change="filehandleChange">
          <el-button type="text">
            <el-icon>
              <Files />
            </el-icon>打开文件...
          </el-button>
        </el-upload>

        <el-upload class="upload-demo" action="#" :file-list="dirupload.fileList" :limit="100" :on-change="dirhandleChange">
          <el-button type="text">
            <el-icon>
              <Folder />
            </el-icon>打开文件夹...
          </el-button>
        </el-upload>

        <h3 style="font-weight: normal">最近打开</h3>
        <el-tooltip v-for="i, index in last.data" :key="index" class="box-item" effect="light" :content="i" placement="right-start">
          <el-button type="text" @click="clickPath(i)">
            <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: inline-block;width: 38%;">
              {{i.toString().split('\\')[i.toString().split('\\').length-1]}}
              <span style="color: rgb(204,204,204); padding-left: 20px;">{{i}}</span>
            </div>
          </el-button>
        </el-tooltip>
        <el-button type="text">More...</el-button>
      </div>
    </div>

    <div class="right">
      <div class="rightContent">
        <el-button type="primary" @click="toGuide">
          <el-icon>
            <Guide />
          </el-icon>操作指南
        </el-button>
        <el-button type="primary" @click="toOfficialWeb">
          <el-icon>
            <Monitor />
          </el-icon>查看官网
        </el-button>
        <el-button type="primary" @click="toVideo">
          <el-icon>
            <VideoPlay />
          </el-icon>视频介绍
        </el-button>
        <el-button type="primary" @click="tologin">
          <el-icon>
            <svg t="1655135763429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2475" width="64" height="64">
              <path d="M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z" fill="#ffffff" p-id="2476"></path>
            </svg>
          </el-icon>退出登录
        </el-button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from './public.js'

const { ipcRenderer } = require('electron')
const { shell } = require('electron')
const router = useRouter()
const { proxy } = getCurrentInstance()

const changWindowSize = () => {
  ipcRenderer.send('LoginOut')
}

onMounted(() => {
  changWindowSize()
})

const count = ref(0)

// 最近文件的列表(自动获取)
const last = reactive({
  data: [
    { name: 'test', path: 'f://test/tets/tets' },
    { name: 'test2', path: 'f://test/tets/tets2' },
  ],
})
proxy.$axios
  // .post('http://cupback.fcode.ltd/getlastpath')
  .post('http://127.0.0.1:5000/getlastpath')
  .then(function (res) {
    last.data = res.data.data
  })
const fileupload = reactive({
  name: '',
  fileList: [],
})
const dirupload = reactive({
  name: '',
  fileList: [],
})

const toVideo = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/display')
}
const toGuide = () => {
  shell.openExternal('http://cupweb.fcode.ltd/#/guide')
}
const toOfficialWeb = () => {
  shell.openExternal('http://cupweb.fcode.ltd')
}
const tologin = () => {
  router.push('login')
}

// 文件选中后调用的函数
const filehandleChange = (file, fileList) => {
  localStorage.setItem('session1FilePath', file.raw.path)
  localStorage.setItem('sessionType', 'file')
  if (router.currentRoute._value.path === '/data') {
    // router.go(0)
    pass
  } else {
    router.push('/data')
  }
}
// // 选中文件夹上传的函数
const dirhandleChange = (file, fileList) => {
  localStorage.setItem('session1DirPath', file.raw.path)
  localStorage.setItem('sessionType', 'dir')
  if (router.currentRoute._value.path === '/data') {
    // router.go(0)
    pass
  } else {
    router.push('/data')
  }
}

// 点击最近打开文件列表的点击事件
const clickPath = (path) => {
  // 如果该路径是文件的路径，那么：
  var pathList = path.split('.')
  var xlsx = pathList[pathList.length - 1] == 'xlsx'
  var xls = pathList[pathList.length - 1] == 'xls'
  var csv = pathList[pathList.length - 1] == 'csv'
  if (xlsx | xls | csv) {
    localStorage.setItem('session1FilePath', path)
    localStorage.setItem('sessionType', 'file')
    if (router.currentRoute._value.path === '/data') {
      // router.go(0)
      pass
    } else {
      router.push('/data')
    }
  } else {
    localStorage.setItem('session1DirPath', path)
    localStorage.setItem('sessionType', 'dir')
    if (router.currentRoute._value.path === '/data') {
      // router.go(0)
      pass
    } else {
      router.push('/data')
    }
  }
}

// 选择文件夹
nextTick(() => {
  document.getElementsByClassName('el-upload__input')[1].webkitdirectory = true
})
</script>

<style>
/* 整体的样式 */
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  /* overflow: hidden; */
}
#app > div {
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46);
  color: rgb(204, 204, 204);
}
/* 以上均为整体的样式 */

/* 左侧的样式 */
.left {
  /* background-color: bisque; */
  width: 50%;
  height: 100%;
  float: left;
  text-align: left;
}

/* 按钮左对齐的样式 */
.left .el-button {
  justify-content: left;
}
.right .el-button {
  justify-content: right;
  min-width: 300px;
  min-height: 60px;
  margin: 10px;
}
.left .el-button + .el-button {
  margin-left: 0;
}

.right {
  /* background-color: blueviolet; */
  width: 50%;
  height: 100%;
  float: right;
  text-align: left;
}

.leftContent {
  position: relative;
  left: 50%;
  top: 17%;
  width: 25%;
  height: 16%;
  margin-left: -10%;
  margin-top: -8%;
}

.rightContent {
  position: relative;
  left: 30%;
  top: 30%;
  width: 25%;
  height: 16%;
  margin-left: -20%;
  margin-top: -8%;
  color: white;
}
.leftContent .el-icon {
  margin-right: 10px;
}
.rightContent .el-icon {
  margin-right: 10px;
}
.rightConleftContenttent .el-icon {
  margin-right: 10px;
}
</style>

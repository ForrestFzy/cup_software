<template>
  <div class="msg_main">
    <div class="msg_left">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>常见问题</span>
          </div>
        </template>
        <el-scrollbar height="600px">
          <el-card class="box-content">
            <template #header>
              <div class="card-content">
                <span>我的文件打开是空白？</span>
              </div>
            </template>
            这是因为：（1）文件的格式可能不属于表格类型的文件；（2）该表格文件只能够含有合并列或者合并行导致软件无法读取；（3）该文件可能已加密，该软件不支持加密后的文件；
          </el-card>

        </el-scrollbar>
      </el-card>

    </div>
    <div class="msg_right">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>我的反馈</span>
            <el-button class="button" type="primary" @click="msgClicked">留言反馈</el-button>
          </div>
        </template>
        <el-empty description="无" v-show=emptyVisible />
        <el-scrollbar height="600px">
          <el-card class="box-content" v-for="data, index in card.data" :key="index">
            <template #header>
              <div class="card-content">
                <span>{{data.title}}</span> &emsp;<span style="color: red;" v-if="data.replied==false">已回复</span>
              </div>
            </template>
            {{data.content}}
          </el-card>
        </el-scrollbar>
      </el-card>

      <el-dialog v-model="dialogFormVisible" title="留言反馈">
        <el-form :model="input">
          <el-form-item label="问题">
            <el-input v-model="input.title" placeholder="请输入问题" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="msgConfirmed">提交</el-button>
          </span>
        </template>
      </el-dialog>

    </div>
  </div>

</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const { shell } = require('electron')
const router = useRouter()
const { proxy } = getCurrentInstance()

const emptyVisible = ref(true)
const dialogFormVisible = ref(false)
const input = reactive({
  title: '',
  content: '',
})
const card = reactive({
  data: [],
})
const msgClicked = () => {
  dialogFormVisible.value = true
}
const msgConfirmed = () => {
  dialogFormVisible.value = false
  proxy.$axios
    .post('http://127.0.0.1:5000/insert_msg', {
      title: input.title,
      content: input.content,
    })
    .then(function (res) {
      if (res.data.code === 200) {
        ElMessage.success('提交成功')
        router.go(0)
      }
    })
}
proxy.$axios.post('http://127.0.0.1:5000/select_msg').then(function (res) {
  if (res.data.code === 200) {
    card.data = res.data.data
    if (res.data.data.length > 0) {
      emptyVisible.value = false
    }
  }
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
#app > div > div {
  height: 100%;
}
.msg_main {
  width: 100%;
  height: 100%;
}
.msg_main .msg_left {
  float: left;
  width: 48%;
  height: 100%;
  /* background-color: aqua; */
  margin: 10px 0px 0px 10px;
}
.msg_main .msg_right {
  float: right;
  width: 48%;
  height: 100%;
  /* background-color: yellow; */
  margin: 10px 10px 10px 0px;
}
.box-content {
  margin-top: 10px;
}
</style>

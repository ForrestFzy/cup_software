<template>
  <div class="login_wrap">
    <div style="width: 50%;text-align:center;margin:auto;color:#fff;">
    <h1>智能电力分析系统<br>用科技点亮未来</h1>
      <!-- <marquee style="text-align:center;color:#fff;font-size: 36px;" scrolldelay="1000" scrollamount="100">智能电分析系统，用科技点亮未来</marquee> -->
    </div>
    <div class="login">
      <h1>电力客户行为智能分析系统</h1>
      <el-form :model="form" label-width="100px" class="loginform">
        <el-form-item label="用户名：">
          <el-input v-model="form.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <el-form-item>
          <span>*注：用户名和密码可任意填写！</span>
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const { ipcRenderer } = require('electron')
const router = useRouter()
const { proxy } = getCurrentInstance()

const option_column = reactive({
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: '智能电力分析系统，用科技点亮未来',
          fontSize: 48,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#fff',
          lineWidth: 1,
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0],
              },
            },
            {
              // Stop for a while.
              percent: 0.8,
              style: {
                fill: 'transparent',
              },
            },
            {
              percent: 1,
              style: {
                fill: 'white',
              },
            },
          ],
        },
      },
    ],
  },
})

const changWindowSize = () => {
  ipcRenderer.send('LoginOut')
}

onMounted(() => {
  changWindowSize()
})

const form = reactive({
  p: 0,
  name: 'admin',
  password: '123456',
})

const onSubmit = () => {
  ElMessage.success('登录成功！')
  router.push('/index')
}
</script>

<style>
/* 页面整体的样式 */
body {
  margin: 0;
  width: 100%;
  height: 100%;
  /* 去除滑动栏 */
  overflow: hidden;
}
/* 页面整体的样式 */
.login_wrap {
  width: 100%;
  height: 700px;
  background-image: url('../assets/images/login_background.gif');
}
/* 中间登录部分的样式 */
.login {
  width: 40%;
  height: 80%;
  margin: auto;
  text-align: center;
  padding-top: 8%;
}
/* 中间登录部分的标题的样式 */
.login h1 {
  color: white;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}
.login .el-input__inner {
  font-size: 17px;
}
.loginform .el-form-item__label {
  color: white;
  font-size: 17px;
}

.el-button {
  width: 130px;
  font-size: 17px;
}

.login_wrap .el-form-item__content {
  color: white;
  font-size: 17px;
}

#gg marquee {
  text-align: center;
}
</style>

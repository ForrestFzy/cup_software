<template>
  <div>
    <el-card>

      <template #header>
        <div class="card-header">
          <span>
          </span>
          <h1>集群用户多特征分析</h1>
          <span></span>
        </div>
      </template>
      <el-scrollbar height="550px">
        <img src="../../../assets/images/热力图.png" alt="" style="width: 100%;">
      </el-scrollbar>
    </el-card>


  </div>

</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const { proxy } = getCurrentInstance()
const router = useRouter()

const filepath = reactive(localStorage.getItem('session5FilePath'))
var percent = localStorage.getItem('percent')
var func = localStorage.getItem('func5')

</script>

<style>
</style>

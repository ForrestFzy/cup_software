<template>

  <div>
    <div class="view_o1_left" style="width: 70%; float: left;padding:0;margin:0;">
      <el-card style="padding: 0;">
        <template #header>
          <div class="card-header">
            <span></span>
            <span>
              <h1>智能定价策略</h1>
            </span>
            <span></span>
          </div>
        </template>
        <!-- <v-chart autoresize :option="option_column" style="height: 550px"></v-chart> -->
      </el-card>

    </div>
    <div style="width: 30%; float: right;">
    <el-card style="padding: 0;">
        <template #header>
          <div class="card-header">
            <span></span>
            <span>
              <h1>定价策略</h1>
            </span>
            <span></span>
          </div>
        </template>
        
        
      </el-card>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import bus from '../../public.js'

const { proxy } = getCurrentInstance()
const router = useRouter()

ElMessage.success('正在计算中...')


</script>

<style>
.view_o1_left .el-card__body {
  padding: 0;
}
</style>

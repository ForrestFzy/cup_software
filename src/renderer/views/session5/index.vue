<template>
  <div>
    <el-container>
        <el-header>
          <div class="session3-head">
            <el-row>
              <el-col :span="8">
                <el-button class="session3-button" @click="showChart(1)">
                  <el-icon :size="50">
                    <svg t="1655296589967" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21668" width="64" height="64">
                      <path d="M960 591.424V368.96c0-0.288 0.16-0.512 0.16-0.768S960 367.68 960 367.424V192a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v175.424c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768v222.464c0 0.288-0.16 0.512-0.16 0.768s0.16 0.48 0.16 0.768V864a32 32 0 0 0 32 32h832a32 32 0 0 0 32-32v-271.04c0-0.288 0.16-0.512 0.16-0.768S960 591.68 960 591.424z m-560-31.232v-160H608v160h-208z m208 64V832h-208v-207.808H608z m-480-224h208v160H128v-160z m544 0h224v160h-224v-160zM896 224v112.192H128V224h768zM128 624.192h208V832H128v-207.808zM672 832v-207.808h224V832h-224z" p-id="21669" fill="#1296db"></path>
                    </svg>
                  </el-icon>
                  <div class="btn-text">
                    用户集群智能集成
                    <br>
                    
                  </div>
                </el-button>
              </el-col>
              <el-col :span="8">
                <el-button class="session3-button" @click="showChart(2)">
                  <el-icon :size="50">
                    <svg t="1655296698557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22656" width="64" height="64">
                      <path d="M154.68661162 328.42831573l-1.28709316 0.64354657v364.89095508l357.81194092 188.23739678V506.36896719L154.68661162 328.42831573z" fill="#FFFFFF" p-id="22657"></path>
                      <path d="M868.37985459 328.75008945L511.21145938 140.83446552 168.52286445 321.02752959l-13.83625283 7.40078613 356.52484775 177.94065147 4.18305323-1.93064063 353.95066143-175.04469052V329.0718623l-0.96531944-0.32177285zM515.3945126 504.43832656l-4.18305323 1.93064063 4.18305323-1.93064063z" fill="#91D5FF" p-id="22658"></path>
                      <path d="M939.8135331 294.32034336a59.84983916 59.84983916 0 0 0-25.42009307-26.70718623L538.56219219 68.75723955a58.88451885 58.88451885 0 0 0-54.70146563 0L108.35125244 266.32606396a58.24097227 58.24097227 0 0 0-15.44511973 13.83625284 64.35466612 64.35466612 0 0 0-9.65320049 12.54915966 59.84983916 59.84983916 0 0 0-6.43546581 25.7418668v386.12799405a59.20629258 59.20629258 0 0 0 32.17733261 52.1272793l375.50947413 197.56882352a59.20629258 59.20629258 0 0 0 26.70718622 7.72255987h4.50482696a56.31033252 56.31033252 0 0 0 22.84590586-6.11369297l375.509475-197.56882441a59.20629258 59.20629258 0 0 0 32.17733261-52.12727842V318.45334326a56.63210625 56.63210625 0 0 0-6.4354667-24.1329999z m-70.46835908 35.07329268l-353.95066142 175.04469052-4.18305323 2.25241348v375.50947412L153.07774472 693.96281739V329.0718623l13.83625284-7.40078613 344.29746182-180.83661064 357.16839521 187.91562392z" fill="#40A9FF" p-id="22659"></path>
                    </svg>
                  </el-icon>
                  <div class="btn-text">
                    集群用户多特征分析
                    <br>
                    
                  </div>
                </el-button>
              </el-col>
              <el-col :span="8">
                <el-button class="session3-button" @click="showChart(3)">
                  <el-icon :size="50">
                    <svg t="1655296907973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23298" width="64" height="64">
                      <path d="M371.776 85.333333v117.397334h98.133333V85.333333h64v117.397334h98.133334V85.333333h64v117.397334h119.338666v110.933333h115.989334v64H815.36v98.133333h115.989333v64H815.36v98.133334h115.989333v64H815.36v112h-119.338667v117.44h-64v-117.44h-98.133333v117.44h-64v-117.44h-98.133333v117.44h-64v-117.44H204.181333v-112H85.333333v-64h118.848v-98.133334H85.333333v-64h118.848v-98.133333H85.333333v-64h118.848v-110.933333h103.594667V85.333333h64z m379.605333 181.397334h-483.2v483.2h483.2v-483.2z m-98.133333 98.133333v286.933333h-286.933333v-286.933333h286.933333z m-64 64h-158.933333v158.933333h158.933333v-158.933333z" fill="#1677FF" p-id="23299"></path>
                    </svg>
                  </el-icon>
                  <div class="btn-text">
                    集群属性占比分析
                    <br>
                    
                  </div>
                </el-button>
              </el-col>
              <!-- <el-col :span="6">
                <el-button class="session3-button" @click="showChart(4)">
                  <el-icon :size="50">
                    <svg t="1655297020288" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24233" width="64" height="64">
                      <path d="M807.16 929.13H215a72.08 72.08 0 0 1-72-72V264.56a72.08 72.08 0 0 1 72-72h592.16a72.08 72.08 0 0 1 72 72v592.57a72.08 72.08 0 0 1-72 72z m-568.16-96h544.16V288.56H239z" fill="#2C77E5" p-id="24234"></path>
                      <path d="M691.14 320.19H331.06a60.07 60.07 0 0 1-60-60V114.8a60.07 60.07 0 0 1 60-60h360.08a60.07 60.07 0 0 1 60 60v145.39a60.07 60.07 0 0 1-60 60z m-324.08-96h288.08V150.8H367.06z" fill="#1AD8E2" p-id="24235"></path>
                      <path d="M255.45 399.86m48 0l237.19 0q48 0 48 48l0 0q0 48-48 48l-237.19 0q-48 0-48-48l0 0q0-48 48-48Z" fill="#2C77E5" p-id="24236"></path>
                      <path d="M255.45 587.13m48 0l290.36 0q48 0 48 48l0 0q0 48-48 48l-290.36 0q-48 0-48-48l0 0q0-48 48-48Z" fill="#2C77E5" p-id="24237"></path>
                    </svg>
                  </el-icon>
                  <div class="btn-text">
                    报告预览
                    <br>
                    (集群划分)
                  </div>
                </el-button>
              </el-col> -->
            </el-row>
          </div>
        </el-header>
        <el-main>
          <clusterMain v-show="control.chart1"></clusterMain>
          <clusterView v-show="control.chart2"></clusterView>
          <clusterModel v-show="control.chart3"></clusterModel>
          <clusterReport v-show="control.chart4"></clusterReport>
        </el-main>
      </el-container>
  </div>
</template>

<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import bus from '../public.js'
import { ElMessage } from 'element-plus'
// import clusterMain from "./components/clusterMain.vue"
// import clusterView from "./components/clusterView.vue"
// import clusterModel from "./components/clusterModel.vue"
import clusterReport from "./components/clusterReport.vue"
import clusterMain from "./components/view_o3.vue"
import clusterView from "./components/view_o2.vue"
import clusterModel from "./components/clusterView.vue"

const { proxy } = getCurrentInstance()
const router = useRouter()

// 控制组件的显示与否
const control = reactive({
  chart1: true,
  chart2: false,
  chart3: false,
  chart4: false,
})
const showChart = (showid) => {
  if (showid == 1) {
    control.chart1 = true
    control.chart2 = false
    control.chart3 = false
    control.chart4 = false
  } else if (showid == 2) {
    control.chart1 = false
    control.chart2 = true
    control.chart3 = false
    control.chart4 = false
  }
  else if (showid == 3) {
    control.chart1 = false
    control.chart2 = false
    control.chart3 = true
    control.chart4 = false

  } else if (showid == 4) {
    control.chart1 = false
    control.chart2 = false
    control.chart3 = false
    control.chart4 = true
  }
}
</script>


<style>
</style>

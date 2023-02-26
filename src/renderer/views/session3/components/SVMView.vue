<template>
  <el-card class="data-card">
    <!-- <template #header>
      <div>
        <el-select v-model="svm.kernel" class="m-2" placeholder="Select">
          <el-option label="linear" value="linear" />
          <el-option label="poly" value="poly" />
          <el-option label="rbf" value="rbf" />
          <el-option label="sigmoid" value="sigmoid" />
          <el-option label="precomputed" value="precomputed" />
        </el-select>
      </div>
    </template> -->
    <div>
      <el-scrollbar height="600px">
        <v-chart autoresize :option="option_column1" style="height: 600px"></v-chart>
        <v-chart autoresize :option="option_column2" style="height: 600px"></v-chart>
        <v-chart autoresize :option="option_column3" style="height: 600px"></v-chart>
        <v-chart autoresize :option="option_column4" style="height: 600px"></v-chart>
      </el-scrollbar>
    </div>
  </el-card>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import bus from '../../public.js'

const svm = reactive({
  kernel: 'rbf',
})

const dataList = ref([])
const linearTrain = ref([])
const linearTest = ref([])
const polyTrain = ref([])
const polyTest = ref([])
const rbfTrain = ref([])
const rbfTest = ref([])
const sigmoidTrain = ref([])
const sigmoidTest = ref([])
const precomputedTrain = ref([])
const precomputedTest = ref([])

bus.on('session3Chart3', (data) => {
  dataList.value = data.dataList
  linearTrain.value = data.linear_train
  linearTest.value = data.linear_test
  polyTrain.value = data.poly_train
  polyTest.value = data.poly_test
  rbfTrain.value = data.rbf_train
  rbfTest.value = data.rbf_test
  sigmoidTrain.value = data.sigmoid_train
  sigmoidTest.value = data.sigmoid_test
  precomputedTrain.value = data.precomputed_train
  precomputedTest.value = data.precomputed_test
})

const option_column1 = reactive({
  title: {
    text: 'linear核性能随最大迭代次数的变化',
    left: 'center',
  },
  xAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'category',
    data: dataList,
  },
  yAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'value',
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      data: linearTrain,
      type: 'line',
    },
    {
      data: linearTest,
      type: 'line',
    },
  ],
})
const option_column2 = reactive({
  title: {
    text: 'poly核性能随最大迭代次数的变化',
    left: 'center',
  },
  xAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'value',
  },
  series: [
    {
      data: polyTrain,
      type: 'line',
    },
    {
      data: polyTest,
      type: 'line',
    },
  ],
})
const option_column3 = reactive({
  title: {
    text: 'rbf核性能随最大迭代次数的变化',
    left: 'center',
  },
  xAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'value',
  },
  series: [
    {
      data: rbfTrain,
      type: 'line',
    },
    {
      data: rbfTest,
      type: 'line',
    },
  ],
})
const option_column4 = reactive({
  title: {
    text: 'sigmoid核性能随最大迭代次数的变化',
    left: 'center',
  },
  xAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'category',
    data: dataList,
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    axisLabel: {
      fontSize: 16,
    },
    type: 'value',
  },
  series: [
    {
      data: sigmoidTrain,
      type: 'line',
    },
    {
      data: sigmoidTest,
      type: 'line',
    },
  ],
})
</script>

<style>
</style>

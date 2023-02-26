<template>
  <el-card class="data-card">
    <template #header>
      <div style="text-align: center; margin: auto;">
        <h3>多项式核逼近的可扩展学习</h3>
      </div>
    </template>

    <el-scrollbar height="500px">
      <p style="text-indent:2em;padding: 0px 10% 0px 10%;">
        在本系统中的支持向量机中，这里暂不阐述。
      </p>
      <div style="text-align:center;">
        <math-jax latex="R_a(T)=R(T)+\alpha|\tilde{T}|" />
      </div>
      <div style="text-indent:2em;padding: 0px 10% 0px 10%;">
        <h3>结论</h3>
        <li>核化支持向量机模型的性能最优，但其时间也会更长，且随着样本数的增多，其时间增长会更快</li>
        <li>提供用户选择接口，可自愿选择是否启用核化支持向量机</li>
        <li>当基于其他内核的支持向量机不能取得较好效果时，可启用核化支持向量机，大概率能得到更好的性能</li>
      </div>
      <h3 style="text-align:center;">几种不同内核的支持向量机准确率-时间比较</h3>
      <v-chart autoresize :option="option_column1" style="height: 500px"></v-chart>
      <p style="text-indent:2em;padding: 0px 10% 0px 10%;">
      <h3>参考文献：</h3>
      [1] Pham, Ninh and Rasmus Pagh. “Fast and scalable polynomial kernels via explicit feature maps.” KDD ‘13 (2013). https://doi.org/10.1145/2487575.2487591
      </p>

    </el-scrollbar>

  </el-card>

</template>


<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
const option_column1 = reactive({
  xAxis: {
    name: '时间',
  },
  yAxis: {
    min: 70,
    max: 100,
    name: '准确率',
    position: 'left',
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      symbolSize: 20,
      data: [[0.8, 75.62]],
      type: 'scatter',
    },
    {
      symbolSize: 20,
      data: [[1.3, 77.68]],
      type: 'scatter',
    },
    {
      symbolSize: 20,
      data: [[2.4, 78.24]],
      type: 'scatter',
    },
    {
      label: '123',
      show: true,
      symbolSize: 20,
      data: [[4.2, 88.56]],
      type: 'scatter',
    },
  ],
})
</script>

<style>
</style>

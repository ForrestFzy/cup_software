<template>
  <div>
    <el-card class="box-card">
      <v-chart autoresize :option="option_column" style="height: 350px"></v-chart>
    </el-card>
  </div>
</template>

<script>
import bus from '../views/public.js'
import { ref } from 'vue'
const u1 = ref(0)
const u2 = ref(0)
const u3 = ref(0)
const u4 = ref(0)
bus.on('piechart', (data)=>{
  u1.value = data[0]
  u2.value = data[1]
  u3.value = data[2]
  u4.value = data[3]
})

export default {
  data() {
    return {
      option_column: {
        title: {
          text: '归类百分比',
          left: 'left',
          top: '0',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: '占比',
            type: 'pie',
            radius: [20, 160],
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: u1, name: '高价值型客户' },
              { value: u2, name: '大众型客户' },
              { value: u4, name: '潜力型客户' },
              { value: u3, name: '低价值型客户' },
            ],
          },
        ],
      },
    }
  },
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

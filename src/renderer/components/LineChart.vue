<template>
  <div>
    <el-card class="box-card">
      <v-chart autoresize :option="option_column" style="height: 300px"></v-chart>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option_column: {
        dataZoom: [
          {
            type: 'inside',
            show: true,
            start: 0,
            end: 30,
            xAxisIndex: [0],
          },
        ],
        title: {
          text: '平均缴费金额',
          left: '40%',
        },
        tooltip: {},
        xAxis: {
          name: '用户',
          type: 'category', // 离散变量
          nameLocation: 'center', // 位置
          show: 'true', // 是否显示
          interval: 0,  // 名称显示全
          nameGap: 30,  // 与横轴之间的间距
          data: [
            '1000001',
            '1000002',
            '1000003',
            '1000004',
            '1000005',
            '1000006',
            '1000007',
            '10000008',
          ],
        },
        yAxis: {
          name: '平均缴费金额',
          nameLocation: 'center', // 位置
          nameGap: 30,  // 与纵轴之间的间距
          position: 'left',
        },
        series: [
          {
            name: '平均缴费金额',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 30, 40],
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

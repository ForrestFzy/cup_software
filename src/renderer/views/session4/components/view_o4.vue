<template>
  <div>
    <div style="width: 70%;height:100%;float: left;">
      <el-card class="box-card">
        <!-- <v-chart autoresize id="map" style="height: 580px"></v-chart> -->
        <v-chart autoresize id="mapChange" style="height: 580px"></v-chart>
      </el-card>
    </div>
    <div style="width: 30%;height:100%;float: right;" id="view_o4_ana" v-loading="view_o4_loading">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>
              <el-switch v-model="All.delivery" />
            </span>
            <span>
              <h1>电力调度决策</h1>
            </span>
            <!-- <span></span> -->
            <el-button @click="resetList" type="primary">一键清空</el-button>
          </div>
        </template>
        <p>智能推荐调度决策：</p>
        <el-scrollbar height="550px">
          <ul class="infinite-list" style="overflow: auto">
            <li v-for="(i, index) in All.dateList" :key="i" class="infinite-list-item">{{All.dateList.length-index}}： {{ i }}</li>
          </ul>
          <!-- <v-chart autoresize :option="mapBoard" id="mapBoard" style="height: 400px;"></v-chart> -->
        </el-scrollbar>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'
import irelandJson from '../../../assets/json/ireland.json'

const { proxy } = getCurrentInstance()
const router = useRouter()

const All = reactive({
  dateList: [],
  delivery: true,
})
const resetList = () => {
  All.dateList = []
}
const view_o4_loading = ref(true)
setTimeout(() => {
  view_o4_loading.value = false
}, 1000)

const Irish = () => {
  var chartDom = document.getElementById('map')
  var myChart = echarts.init(chartDom)
  myChart.clear()
  myChart.showLoading()
  echarts.registerMap('IRI', irelandJson)
  myChart.hideLoading()
  const option = reactive({
    title: {
      text: '爱尔兰电力地图',
      subtext: All4.all_date[All4.flag],
      sublink: '',
      left: 'right',
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: 'right',
      min: 500000,
      max: 38000000,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
      text: ['高负荷', '低负荷'],
      calculable: true,
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: '电力负荷',
        type: 'map',
        roam: true,
        map: 'IRI',
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: 'Carlow', value: 4822023 },
          { name: 'Cavan', value: 731449 },
          { name: 'Clare', value: 632323 },
          { name: 'Cork', value: 2949131 },
          { name: 'Donegal', value: 38041430 },
          { name: 'Dublin', value: 19317568 },
          { name: 'Galway', value: 3590347 },
          { name: 'Kerry', value: 917092 },
          { name: 'Kildare', value: 6553255 },
          { name: 'Kilkenny', value: 5187582 },
          { name: 'Laois', value: 9919945 },
          { name: 'Leitrim', value: 1392313 },
          { name: 'Limerick', value: 1595728 },
          { name: 'Longford', value: 12875255 },
          { name: 'Louth', value: 6537334 },
          { name: 'Mayo', value: 3074186 },
          { name: 'Meath', value: 2885905 },
          { name: 'Monaghan', value: 4380415 },
          { name: 'Offaly', value: 4601893 },
          { name: 'Roscommon', value: 1329192 },
          { name: 'Sligo', value: 5884563 },
          { name: 'Tipperary', value: 6646144 },
          { name: 'Waterford', value: 9883360 },
          { name: 'Westmeath', value: 5379139 },
          { name: 'Wexford', value: 2984926 },
          { name: 'Wicklow', value: 6021988 },
        ],
      },
    ],
  })
  myChart.setOption(option)
}

const IrishChange = () => {
  var chartDom = document.getElementById('mapChange')
  var myChart = echarts.init(chartDom)
  myChart.clear()
  myChart.showLoading()
  echarts.registerMap('IRI', irelandJson)
  myChart.hideLoading()
  const option = reactive({
    title: {
      text: '',
      subtext: All4.all_date[All4.flag],
      sublink: '',
      left: 'right',
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: 'right',
      min: 0,
      max: 20000,
      inRange: {
        color: [
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
      text: ['高负荷', '低负荷'],
      calculable: true,
    },
    toolbox: {
      show: true,
      //orient: 'vertical',
      left: 'left',
      top: 'top',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: '电力负荷',
        type: 'map',
        roam: true,
        map: 'IRI',
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: 'Carlow', value: 0 },
          { name: 'Cavan', value: 0 },
          { name: 'Clare', value: 0 },
          { name: 'Cork', value: 0 },
          { name: 'Donegal', value: 0 },
          { name: 'Dublin', value: 0 },
          { name: 'Galway', value: 0 },
          { name: 'Kerry', value: 0 },
          { name: 'Kildare', value: 0 },
          { name: 'Kilkenny', value: 0 },
          { name: 'Laois', value: 0 },
          { name: 'Leitrim', value: 0 },
          { name: 'Limerick', value: 0 },
          { name: 'Longford', value: 0 },
          { name: 'Louth', value: 0 },
          { name: 'Mayo', value: 0 },
          { name: 'Meath', value: 0 },
          { name: 'Monaghan', value: 0 },
          { name: 'Offaly', value: 0 },
          { name: 'Roscommon', value: 0 },
          { name: 'Sligo', value: 0 },
          { name: 'Tipperary', value: 0 },
          { name: 'Waterford', value: 0 },
          { name: 'Westmeath', value: 0 },
          { name: 'Wexford', value: 0 },
          { name: 'Wicklow', value: 0 },
        ],
      },
    ],
  })
  myChart.setOption(option)
}

const changeIrish = () => {
  proxy.$axios.post('http://127.0.0.1:5000/getMapData').then(function (res) {
    var chartDom = document.getElementById('map')
    var myChart = echarts.init(chartDom)
    myChart.clear()
    myChart.showLoading()
    echarts.registerMap('IRI', irelandJson)
    myChart.hideLoading()
    const option = reactive({
      title: {
        text: '爱尔兰电力地图',
        subtext: All4.all_date[All4.flag],
        sublink: '',
        left: 'right',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        text: ['高负荷', '低负荷'],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: '电力负荷',
          type: 'map',
          roam: true,
          map: 'IRI',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: res.data.data,
        },
      ],
    })
    myChart.setOption(option)
  })
}

const changeIrishChange = () => {
  proxy.$axios
    .post('http://127.0.0.1:5000/getMapChangeData')
    .then(function (res) {
      for (var i = 0; i < res.data.text.length; i++) {
        All.dateList.unshift(res.data.text[i])
      }
      var chartDom = document.getElementById('mapChange')
      var myChart = echarts.init(chartDom)
      myChart.clear()
      myChart.showLoading()
      echarts.registerMap('IRI', irelandJson)
      myChart.hideLoading()
      const option = reactive({
        title: {
          text: '',
          subtext: All4.all_date[All4.flag],
          sublink: '',
          left: 'right',
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 1000000,
          inRange: {
            color: [
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026',
            ],
          },
          text: ['高负荷', '低负荷'],
          calculable: true,
        },
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: '电力负荷',
            type: 'map',
            roam: true,
            map: 'IRI',
            emphasis: {
              label: {
                show: true,
              },
            },
            data: res.data.data,
          },
        ],
      })
      myChart.setOption(option)
    })
}

const mapBoard = reactive({
  title: {
    text: '电力调度',
    subtext: '',
    top: 0,
    left: 0,
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: (function () {
      var list = []
      for (var i = 1; i <= 28; i++) {
        list.push(i + 2000 + '')
      }
      return list
    })(),
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: ['red', 'yellow'],
    calculable: true,
  },
  radar: {
    indicator: [
      { text: 'Carlow', max: 400 },
      { text: 'Cavan', max: 400 },
      { text: 'Dublin', max: 400 },
      { text: 'Cork', max: 400 },
      { text: 'Donegal', max: 400 },
      { text: 'Clare', max: 400 },
      { text: 'Galway', max: 400 },
      { text: 'Kerry', max: 400 },
      { text: 'Kildare', max: 400 },
      { text: 'Kilkenny', max: 400 },
    ],
  },
  series: (function () {
    var series = []
    for (var i = 1; i <= 28; i++) {
      series.push({
        type: 'radar',
        symbol: 'none',
        lineStyle: {
          width: 1,
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(0,250,0,0.3)',
          },
        },
        data: [
          {
            value: [
              (40 - i) * 10,
              (38 - i) * 4 + 60,
              (30 - i) * 4 + 60,
              i * 5 + 10,
              i * 4 + 10,
              i * 10,
              i * 8,
              i * 9,

              (i * i) / 2,
            ],
            name: i + 2000 + '',
          },
        ],
      })
    }
    return series
  })(),
})

const All4 = reactive({
  flag: 0,
  all_date: [],
})
var dirpath = localStorage.getItem('dirpath')
var date_col = localStorage.getItem('date_col4')
var data_col = localStorage.getItem('y_col4')
proxy.$axios
  .post('http://127.0.0.1:5000/session4ReadData', {
    dirpath: dirpath,
    date_col: date_col,
    load_col: data_col,
  })
  .then(function (res) {
    if (res.data.code === 200) {
      All4.all_date = res.data.date
    }
  })

onMounted(() => {
  // Irish()
  IrishChange()
  setInterval(() => {
    All4.flag += 1
    // changeIrish()
    if (All.delivery) {
      changeIrishChange()
    }
  }, 2000)
})
</script>

<style>
</style>

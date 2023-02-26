import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";
import App from './App.vue'
import router from './router'
import './router/guard'
import { errorHandler } from './utils/error'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'echarts'
// import echartsGL from 'echarts-gl'
import ECharts from 'vue-echarts'
import './assets/styles/global.css'

import axios from "axios"
import VueAxios from 'vue-axios'

import './assets/styles/font.css'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
errorHandler(app)
app.component('v-chart', ECharts)
app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$echartsGL = echartsGL 
function onMathJaxReady() {
  const el = document.getElementById("elementId");
  renderByMathjax(el);
}

initMathJax({}, onMathJaxReady);

app.use(router as any).use(ElementPlus).use(VueAxios, axios).use(MathJax).mount('#app')

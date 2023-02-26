import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import index from '@renderer/views/index.vue'
import login from '@renderer/views/login.vue'
import Page404 from '@renderer/views/404.vue'
import home from '@renderer/views/home.vue'
import data from '@renderer/views/data.vue'
import session1 from '@renderer/views/session1/index.vue'
import session2 from '@renderer/views/session2.vue'
import session3 from '@renderer/views/session3/index.vue'
import session4 from '@renderer/views/session4/index.vue'
import session5 from '@renderer/views/session5/index.vue'
import about from '@renderer/views/about.vue'
import message from '@renderer/views/message.vue'
import update from '@renderer/views/update.vue'

// 这里是一轮评审之前更改的软件界面
import index2 from '@renderer/views/index_o.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: Page404,
  },
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/login',
    name: 'login2',
    component: login,
  },
  {
    path: '/index',
    name: 'index',
    component: index2,
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: '/data',
        name: 'data',
        component: data,
      },
      {
        path: '/session1',
        name: 'session1',
        component: session1,
      },
      {
        path: '/session2',
        name: 'session2',
        component: session2,
      },
      {
        path: '/session3',
        name: 'session3',
        component: session3,
      },
      {
        path: '/session4',
        name: 'session4',
        component: session4,
      },
      {
        path: '/session5',
        name: 'session5',
        component: session5,
      },
      {
        path: '/about',
        name: 'about',
        component: about,
      },
      {
        path: '/message',
        name: 'message',
        component: message,
      },
      {
        path: '/update',
        name: 'update',
        component: update,
      },
    ]
  },
]

export default createRouter({
  history: createWebHashHistory(), // Importantly, createWebHashHistory() use for redirect multi window,
  routes: routes,
})

import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../view/index.vue'
import About from '../view/about.vue'
import Tools from '@/view/tools/index.vue'
import Date from '@/view/date/index.vue'

const routes = [
  { path: '/', component: Home, meta: { title: '主页' }, },
  { path: '/about', component: About, meta: { title: '关于' }, },
  {
    path: '/tool',
    component: Tools,
    meta: { title: '工具' },
  },
  {
    path: '/tools',
    children: [
      {
        path: 'date', component: Date,
        meta: { title: '时间转换', desc: '用于时间戳和时间之间进行转换' }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
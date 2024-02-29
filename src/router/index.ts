import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../view/index.vue'
import About from '../view/about.vue'
import Tools from '@/view/tools/index.vue'
import Words from '@/view/words/index.vue'
import Date from '@/view/date/index.vue'
import URL from '@/view/url/index.vue'

const routes = [
  { path: '/', redirect: '/tool' },
  // { path: '/about', component: About, meta: { title: '关于' }, },
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
      {
        path: 'url', component: URL,
        meta: { title: 'URLCode编码', desc: '用于URLCode快速编码、解码的工具' }
      },
    ]
  },
  {
    path: '/words',
    component: Words,
    meta: { title: '单词本' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
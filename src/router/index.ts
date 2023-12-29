import { createRouter,createWebHashHistory } from "vue-router";

import Home from '../view/index.vue'
import About from '../view/about.vue'
import Tools from '@/view/tools/index.vue'

const routes = [
  { path:'/', component: Home},
  { path:'/about', component: About},
  { path:'/tools', component: Tools},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
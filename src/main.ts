import { createApp } from 'vue'
import'normalize.css/normalize.css'
import App from './App.vue'
import naive from 'naive-ui'
import VueDiff from 'vue-diff'
import 'vue-diff/dist/index.css';
import CodeDiff from 'v-code-diff'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import router from './router/index'

const app = createApp(App)
app.use(router)
app.use(naive)
app.use(VueDiff)
app.use(CodeDiff)
app.mount('#app')

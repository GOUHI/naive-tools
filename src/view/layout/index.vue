<template>
  <div class="main">
    <n-layout has-sider class="layout">
      <n-layout-sider bordered content-style="padding: 24px;">
        <Menu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered>
          <!-- 这里是头部数据 -->
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <n-breadcrumb>
            <n-breadcrumb-item v-for="item in breadcrumb" :key="item.path" @click="handleToRouter(item)">{{ item.name }}</n-breadcrumb-item>
          </n-breadcrumb>
          <div style="padding: 20px;">
            <router-view></router-view>
          </div>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import Menu from './menu.vue'
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()
const router = useRouter()
console.log(route);
console.log(route.path);
console.log(router);

// const newRoute = computed(() => {
//   return route
// })
type BreadcrumbItem = { name: string, path: string }
let breadcrumb = ref<BreadcrumbItem[]>([])


watch(() => route, () => {
  breadcrumb.value = []
  for (const i of route.matched) {
    if(i.path === '/tools') {
      breadcrumb.value.push({ name: '工具', path: '/tool' })
    }else{
      breadcrumb.value.push({ name: String(i.meta.title), path: i.path })
    }
  }
},{deep:true})

/**
 * 路由跳转
 * @param item
 */
const handleToRouter = (item:{path: string})=>{
  if(item.path === route.path) {
    return false
  }
  // 点击进行跳转
  router.push({
    path: item.path
  })
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.layout {
  height: 100%;
}

.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
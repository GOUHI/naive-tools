<template>
  <div class="main">
    <n-layout has-sider class="layout">
      <n-layout-sider bordered content-style="padding: 24px;">
        <Menu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered>
          颐和园路
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>
<script lang="ts" setup>
import Menu from './menu.vue'
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.layout{
  height: 100%;
}
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
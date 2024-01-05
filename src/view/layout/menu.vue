<template>
  <div>
    <div class="logo-box">
      <img src="/public/assets/logo.png" alt="" class="logo">
    </div>
    <div class="menu-box">
      <template v-for="item in router.options.routes">
        <router-link :to="item.path"  :class="menu === item.path ? 'menu-item menu-select' : 'menu-item '" @click="handleMenu(item.path)" v-if="item.meta"> {{ item.meta?.title }}</router-link>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const menu = ref(route.path)
const handleMenu = (v:string) => {
  menu.value = v
}
</script>
<style scoped lang="less">
.logo-box {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  .logo{
    object-fit: cover;
    width: 60%;
    border-radius: 4px;
  }
}

.menu-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 50px;
  .menu-item{
    margin: 10px 0;
    font-size: 16px;
    color: #333;
    font-weight: 500;
    cursor: pointer;
  }
  a {
    text-decoration:none
  }
  .menu-select {
    color: #FF9900;
  }
  .menu-item:hover {
    color: #FF9900;
  }
}
</style>
<template>
  <div>
    <div class="logo-box">
      <img src="/public/assets/logo.png" alt="" class="logo">
    </div>
    <div class="menu-box">
      <router-link :to="item.to" v-for="item in menuList" class="menu-item"> {{ item.name }}</router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const menuList = ref([
  {to: '/',name: '主页'},
  {to: '/tools',name: '工具'},
  {to: '/about',name: '单词本'},
  {to: '/about',name: '关于'}
])
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
  .menu-item:hover {
    color: #2A84F0;
  }
}
</style>
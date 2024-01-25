<template>
  <div class="main">
    <div class="tools-box">
      <div class="tools-type-box">
        编程工具
      </div>
      <div class="tools-body-box">
        <div class="tools-item-box" v-for="item in toolsList" @click="handleToolsItem(item.path)">
          <div class="title">{{item.meta?.title }}</div>
          <div class="desc">{{item.meta?.desc }}</div>
        </div>
      </div>
    </div>


  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const toolsList = router.options.routes.filter(i => i.path === '/tools')[0].children
// 点击进行跳转工具页面
const handleToolsItem = (path: string) => {
  console.log(path);
  router.push({
    path: '/tools/' + path
  })
}
</script>
<style scoped lang="less">
.tools-box {
  .tools-type-box{
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .tools-body-box{
    display: flex;
    flex-wrap: wrap;
    .tools-item-box{
      width: 350px;
      border:1px solid #eee;
      padding: 20px;
      border-radius: 4px;
      margin-right: 20px;
      margin-bottom: 20px;
      .title{
        font-size: 16px;
        font-weight: 500;
        color:#FF9900;
      }
      .desc {
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 控制显示行数 */
        height: 50px;
        color:#909399;
      }
    }
    .tools-item-box:hover {
      cursor: pointer;
      background-color: #fafafa;
    }
  }
}
</style>
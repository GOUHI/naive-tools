<template>
  <div class="main">
    <div class="tools-box">
      <div class="tools-type-box">
        编程工具
      </div>
      <div class="tools-body-box">
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
        <div class="tools-item-box">
          <div>时间转换</div>
          <div>用于时间转换</div>
        </div>
      </div>
    </div>


  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const toolsList = ref([
  {name:'简易工具'}
])
</script>
<style scoped lang="less">
.main {
  margin: 20px;
}

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
    }
    .tools-item-box:hover {
      cursor: pointer;
      background-color: #fafafa;
    }
  }
}
</style>
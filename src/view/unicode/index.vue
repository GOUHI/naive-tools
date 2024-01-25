<template>
  <div class="main">
    <div class="input-box">
      <n-input
        v-model:value="form.beforeText"
        type="textarea"
        :autosize="{
          minRows: 10,
          maxRows: 10
        }"
        placeholder="请把你需要转换的内容粘贴在这里"
      />
      <n-input
        v-model:value="form.laterText"
        type="textarea"
        :autosize="{
          minRows: 10,
          maxRows: 10
        }"
        style="margin-left:40px;"
        placeholder="转换后的结果"
      />
    </div>
    <div class="btn">
      <n-space>
        <n-button type="info">中文转Unicode</n-button>
        <n-button type="info">Unicode转中文</n-button>
        <n-button strong secondary type="info">清空</n-button>
      </n-space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const form = ref({
  beforeText: '',
  laterText: ''
})
</script>
<style scoped lang="less">
.input-box{
  display: flex;
  align-items: center;
}
.btn{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
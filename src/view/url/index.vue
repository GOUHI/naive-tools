<template>
  <div class="main">
    <div class="input-box">
      <n-input v-model:value="text" type="textarea" :autosize="{
        minRows: 10,
        maxRows: 10
      }" placeholder="请把你需要转换的内容粘贴在这里" />
    </div>
    <div class="btn">
      <n-space>
        <n-button type="info" @click="handleURLEncode">URLEncode编码</n-button>
        <n-button type="info" @click="handleURLDecode">URLDecode解码</n-button>
        <n-button strong secondary type="info" @click="handleEmpty">清空</n-button>
      </n-space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const text = ref('')
const handleURLEncode = () => {
  text.value = encodeURIComponent(text.value)
}
const handleURLDecode = () => {
  text.value = decodeURIComponent(text.value)
}
const handleEmpty = () => {
  text.value = ''
}
</script>
<style scoped lang="less">
.input-box {
  display: flex;
  align-items: center;
}

.btn {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
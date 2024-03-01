<template>
  <div class="main">
    <h3>内容输入</h3>
    <div class="input-box">
      <n-input v-model:value="oldText" type="textarea" :autosize="{
        minRows: 10,
        maxRows: 10
      }" placeholder="请把你需要对比的内容粘贴在这里" />
      <div style="width: 20px;"></div>
      <n-input v-model:value="newText" type="textarea" :autosize="{
        minRows: 10,
        maxRows: 10
      }" placeholder="请把你需要对比的内容粘贴在这里" />
    </div>
    <div>
      <h3>对比内容</h3>
      <Diff theme="light" language="plaintext" :prev="oldText" :current="newText" virtualScroll></Diff>
    </div>
    <div class="btn">
      <n-space>
        <n-button type="info" @click="handleRepetitionText" :loading="loading">重复</n-button>
        <n-button type="info" @click="handleRemoveRepetitionText">去重</n-button>
        <n-button strong secondary type="info" @click="handleEmpty">清空</n-button>
      </n-space>
    </div>
    <div>
      <div v-if="repetitionText">
        <h3>重复数据</h3>
        <n-input v-model:value="repetitionText" readonly type="textarea" :autosize="{
          minRows: 10,
          maxRows: 10
        }"/>
      </div>
      <div v-if="removeRepetitionText">
        <h3>去重数据</h3>
        <n-input v-model:value="removeRepetitionText" readonly type="textarea" :autosize="{
          minRows: 10,
          maxRows: 10
        }"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const oldText = ref('')
const newText = ref('')
const repetitionText = ref('')
const removeRepetitionText = ref('')
const loading = ref(false)
const handleRepetitionText = () => {
  repetitionText.value = ''
  removeRepetitionText.value = ''
  loading.value = true
  repetitionText.value = findRepeatedChars(oldText.value,newText.value, 1)
  loading.value = false
}
const handleRemoveRepetitionText = () => {
  repetitionText.value = ''
  removeRepetitionText.value = ''
  loading.value = true
  removeRepetitionText.value = findRepeatedChars(oldText.value,newText.value, 2)
  loading.value = false
}
const handleEmpty = () => {
  oldText.value = ''
  newText.value = ''
  repetitionText.value = ''
  newText.value = ''
}

function findRepeatedChars(str1: string, str2: string, type: number) {
  let repeated = ''; // 存放重复的字符
  for (let i = 0; i < str1.length; i++) {
    if( type === 1) {
      if (str2.includes(str1[i])) {
        repeated += str1[i];
      }
    }else {
      if (!str2.includes(str1[i])) {
        repeated += str1[i];
      }
    }
  }
  return repeated;
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
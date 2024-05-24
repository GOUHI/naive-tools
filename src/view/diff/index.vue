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
      <div class="style-box">
        <h3>对比内容</h3>
        <div style="margin-left: 10px;width: 180px;">
          <n-space vertical>
            <n-select v-model:value="style" :options="styleOptions" @update:value="handleUpdateValue" />
          </n-space>
        </div>
        <div style="margin-left: 10px;width: 180px;">
          <n-space vertical>
            <n-select v-model:value="languages" filterable placeholder="请选择文本格式" :options="languagesOptions" />
          </n-space>
        </div>
      </div>
      <Diff v-if="style === 'diff'" theme="light" :language="languages" :prev="oldText" :current="newText" virtualScroll></Diff>
      <code-diff v-if="style === 'git'" theme="light" :language="languages" :old-string="oldText" :new-string="newText" output-format="side-by-side"></code-diff>
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
const styleOptions = ref([
  {label: '对比样式', value: 'diff'},
  {label: 'GIT样式', value: 'git'},
])
const style = ref('diff')
const languagesOptions = ref([
  {label: '纯文本', value: 'plaintext'},
  {label: 'xml', value: 'xml'},
  {label: 'markdown', value: 'markdown'},
  {label: 'javascript', value: 'javascript'},
  {label: 'json', value: 'json'},
  {label: 'css', value: 'css'},
  {label: 'typescript', value: 'typescript'}
])
const languages = ref('plaintext')
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

// 判断对比样式赋值可选样式格式
const handleUpdateValue = (value: string) => {
  if(value === 'diff') {
    languagesOptions.value = [
      {label: '纯文本', value: 'plaintext'},
      {label: 'xml', value: 'xml'},
      {label: 'markdown', value: 'markdown'},
      {label: 'javascript', value: 'javascript'},
      {label: 'json', value: 'json'},
      {label: 'css', value: 'css'},
      {label: 'typescript', value: 'typescript'}
    ]
  }
  if(value === 'git') {
    languagesOptions.value = [
      {label: '纯文本', value: 'plaintext'},
      {label: 'xml', value: 'xml'},
      {label: 'javascript', value: 'javascript'},
      {label: 'json', value: 'json'},
      {label: 'yaml', value: 'yaml'},
      {label: 'python', value: 'python'},
      {label: 'java', value: 'java'},
      {label: 'bash', value: 'bash'},
      {label: 'sql', value: 'sql'}
    ]
  }
  languages.value = 'plaintext'
}
</script>
<style scoped lang="less">
.input-box {
  display: flex;
  align-items: center;
}
.style-box{
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
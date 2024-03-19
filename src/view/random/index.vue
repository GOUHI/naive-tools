<template>
  <div class="random-box">
    <div class="option-box">
      <div>
        <n-radio-group v-model:value="type" name="radiogroup">
          <n-space>
            <n-radio v-for="item in typeOptions" :key="item.value" :value="item.value">
              {{ item.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
      </div>
      <div style="margin-top: 10px;">
        <n-space>
          <n-radio :checked="transform === 'small'" value="small" @change="handleTransformChange">小写</n-radio>
          <n-radio :checked="transform === 'big'" value="big" @change="handleTransformChange">大写</n-radio>
        </n-space>
      </div>
      <div style="margin-top: 10px; width: 200px;">
        <n-input-number v-model:value="length" :min='2' :max='99999' />
      </div>
      <div style="margin-top: 10px;">
        <n-button type="info" @click="handleRandom">
          生成
        </n-button>
      </div>
    </div>
    <div style="margin-top: 20px;">
      <n-input v-model:value="random" type="textarea" :autosize="{ minRows: 6 }" readonly placeholder=""/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const typeOptions = [
  { value: 'string', label: '纯字符' },
  { value: 'number', label: '纯数字' },
  { value: 'strAndNum', label: '字符和数字' },
].map((s) => {
  s.value = s.value.toLowerCase();
  return s;
})
const letter = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const length = ref(10)
const type = ref('string')
const transform = ref('small')
const random = ref('')
const handleTransformChange = (e: Event) => {
  transform.value = (e.target as HTMLInputElement).value
}
const handleRandom = () => {
  let str = ''
  if (type.value === 'string') {
    str = letter
  } else if (type.value === 'number') {
    str = number
  } else {
    str = letter + number
  }
  // 循环获取数据
  let result = '';
  //遍历
  for(let i = 0; i<length.value; i++){
    // 取随机下标
    let index = Math.floor(Math.random() * str.length);
    //拼接在result后面
    result += str[index];
  }
  if(transform.value === 'small') {
    result = result.toLowerCase()
  }
  if(transform.value === 'big') {
    result = result.toUpperCase()
  }
  random.value = result
}
</script>
<style scoped lang="less">
.random-box {}
</style>
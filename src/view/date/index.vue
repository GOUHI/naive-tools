<template>
  <div>
    <div class="timestamp-to-datetime">
      <div class="title">
        Unix时间戳（Unix timestamp）
      </div>
      <n-space justify="center" class="timestamp-box">
        <n-input v-model:value="form.timestamp" type="text" placeholder="请输入时间戳" clearable @clear="handleClear" />
        <n-select v-model:value="form.type" :options="typeOptions" :consistent-menu-width="false" />
        <n-button strong secondary type="primary" @click="handleConvert">转换</n-button>
        <n-input v-model:value="form.datetime" readonly placeholder="" />
      </n-space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import moment from 'moment';
import { useMessage } from 'naive-ui'

const message = useMessage()
const form = ref({
  timestamp: moment().unix(),
  type: 'second',
  datetime: ''
})

const typeOptions = [
  {
    label: '秒',
    value: 'second'
  },
  {
    label: '毫秒',
    value: 'millisecond'
  },
]

const handleConvert = () => {
  if(!form.value.timestamp) {
    return message.error('需要转换的timestamp不能为空')
  }
  form.value.datetime = moment(form.value.timestamp * (form.value.type === 'second' ? 1000 : 1)).format('YYYY-MM-DD HH:mm:ss')
}

const handleClear = () => {
  form.value.datetime = ''
}
</script>
<style lang="less" scoped>
.timestamp-to-datetime{
  .title{
    font-weight: 500;
    margin-bottom: 10px;
  }
  .timestamp-box{
    // border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
</style>
<template>
  <div class="iso-box">
    <div class="title">
      ISO 8601格式
    </div>
    <n-space justify="center" class="input-box">
      <n-input class="lang" v-model:value="form.iso" type="text" placeholder="请输入ISO格式的时间" clearable @clear="handleClear" />
      <n-button strong secondary type="primary" @click="handleConvert">转换成日期</n-button>
      <n-input v-model:value="form.datetime" readonly placeholder="" />
    </n-space>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import moment from 'moment';
import { useMessage } from 'naive-ui'

const message = useMessage()
const form = ref({
  iso: moment().format(),
  datetime: ''
})

const handleConvert = () => {
  if(!form.value.iso) {
    return message.error('需要转换的iso格式时间不能为空')
  }
  form.value.datetime = moment(form.value.iso).format('YYYY-MM-DD HH:mm:ss')
}

const handleClear = () => {
  form.value.datetime = ''
}
</script>
<style lang="less" scoped>
.iso-box {
  margin-top: 50px;
  .title{
    font-weight: 500;
    margin-bottom: 10px;
  }
  .input-box{
    // border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
}
.lang{
  width: 270px !important;
}
</style>
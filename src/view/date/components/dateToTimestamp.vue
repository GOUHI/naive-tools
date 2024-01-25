<template>
  <div class="date-box">
    <div class="title">
      日期格式
    </div>
    <n-space justify="center" class="input-box">
      <n-input v-model:value="form.year" class="lang" type="text" />年
      <n-input v-model:value="form.month" class="lang" type="text" />月
      <n-input v-model:value="form.date" class="lang" type="text" />日
      -
      <n-input v-model:value="form.hour" class="lang" type="text" />时
      <n-input v-model:value="form.minute" class="lang" type="text" />分
      <n-input v-model:value="form.second" class="lang" type="text" />秒
      <n-button strong secondary type="primary" @click="handleConvert">转换成时间戳</n-button>
      <n-input v-model:value="form.timestamp" readonly placeholder="" />
      <n-button strong secondary type="warning" @click="handleClear">重置</n-button>
    </n-space>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import moment from 'moment';
import { useMessage } from 'naive-ui'

const message = useMessage()
const form = ref({
  year: moment().weekYear(),
  month: moment().month() + 1,
  date: moment().date(),
  hour: moment().hour(),
  minute: moment().minute(),
  second: moment().second(),
  timestamp: ''
})

const handleConvert = () => {
  if (!form.value.year || !form.value.month || !form.value.date || !form.value.hour || !form.value.minute || !form.value.second) {
    return message.error('需要转换的iso格式时间不能为空')
  }
  const datetimeText = form.value.year + '-' + form.value.month + '-' + form.value.date + ' ' + form.value.hour + ':' + form.value.minute + ':' + form.value.second
  const datetime = moment(datetimeText).unix()
  form.value.timestamp = datetime.toString()
}

const handleClear = () => {
  form.value.year = moment().weekYear()
  form.value.month = moment().month() + 1
  form.value.date = moment().date()
  form.value.hour = moment().hour()
  form.value.minute = moment().minute()
  form.value.second = moment().second()
  form.value.timestamp = ''
}
</script>
<style lang="less" scoped>
.date-box {
  margin-top: 50px;

  .title {
    font-weight: 500;
    margin-bottom: 10px;
  }

  .input-box {
    // border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  }
}

.lang {
  width: 60px !important;
}
</style>
<template>
  <div>
    Unix时间戳（Unix timestamp）
    <n-input v-model:value="form.timestamp" placeholder="请输入时间戳" />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import moment from 'moment';

const form = reactive({
  timestamp: moment().valueOf()
})
</script>
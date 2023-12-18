<template>
  <div>
    <n-card title="李狗嗨的工具站" style="margin-bottom: 12px">
    <n-tabs type="line" animated>
      <n-tab-pane name="date" tab="时间转换">
        <Date />
      </n-tab-pane>
      <n-tab-pane name="fun" tab="常用函数">
        常用函数
      </n-tab-pane>
      <n-tab-pane name="word" tab="单词本">
        单词本
      </n-tab-pane>
    </n-tabs>
  </n-card>
  </div>
</template>
<script lang="ts" setup>
import Date from '../components/date.vue'
</script>
<style scoped>
.n-card.n-card--bordered {
  border: unset;
}
</style>
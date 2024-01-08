<template>
  <div>
    <div class="timestamp-to-datetime">
      <TimestampToDate></TimestampToDate>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TimestampToDate from './components/timestampToDate.vue';
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
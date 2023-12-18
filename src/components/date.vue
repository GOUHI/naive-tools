<template>
  <div class="date-main">
    <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
    {{ value }}
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const value = ref(null)
</script>
<template>
  <div class="words-box">
    <div class="search-box">
      <n-space>
        <n-input v-model:value="keywords" type="text" placeholder="请输入需要查询的单词或者翻译" style="min-width: 280px" @keydown.enter.native="handleInput" clearable @clear="handleClear"/>
        <n-button type="warning" @click="handleInput" :loading="loading">搜索</n-button>
      </n-space>
    </div>
    <div class="card-box">
      <template v-if="list.table.length">
        <div class="card" v-for="item in list.table">
          <div class="head-box">
            <div style="display:flex;align-items:center;">
              <span>{{ item.word }}</span>
              <n-button quaternary round type="success" size="small" style="margin-left:10px;">复制</n-button>
            </div>
            <div class="audio-box" @click="paly(item.audio)">
              <n-icon size="24">
                <AudioTwotone />
              </n-icon>
            </div>
          </div>
          <div class="translate-box">
            <span>{{ item.translate }}</span>
            <n-tag :bordered="false" size="small" style="margin-left:10px;"> 常见释义 </n-tag>
          </div>
          <div class="explain-box">
            <div class="item" v-if="item.n">
              <n-ellipsis style="max-width: 350px">
                n.：{{ item.n }}
              </n-ellipsis>
            </div>
            <div class="item" v-if="item.v">
              <n-ellipsis style="max-width: 350px">
                v.：{{ item.v }}
              </n-ellipsis>
            </div>
            <div class="item" v-if="item.vt">
              <n-ellipsis style="max-width: 350px">
                vt.：{{ item.vt }}
              </n-ellipsis>
            </div>
            <div class="item" v-if="item.adj">
              <n-ellipsis style="max-width: 350px">
                adj.：{{ item.adj }}
              </n-ellipsis>
            </div>
          </div>
        </div>
      </template>
      <div v-else style="width: 100%;margin-top:100px;">
        <n-empty description="暂无数据" />
      </div>
    </div>
  </div>

  <audio ref="audioRef"></audio>
</template>
<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { AudioTwotone } from '@vicons/antd'
import { wordsList } from './word.ts'
const list = reactive({
  table: [...wordsList]
})
const audioRef = ref<HTMLAudioElement>()
const paly = (audio) => {
  audioRef.value!.src = new URL(audio, import.meta.url).href
  // 播放 暂停也同理
  audioRef.value?.play()
}

const loading = ref(false)
const keywords = ref('')
const handleInput = () => {
  loading.value = true
   // 创建一个新的列表，用于存储过滤后的元素
   const filteredList = list.table.filter(item => {
    // 判断单词是否符合
    const wordState = item.word.includes(keywords.value);
    // 判断释义是否符合
    const translateState = item.translate.includes(keywords.value);
    // 如果单词或释义符合条件，则返回 true，否则返回 false
    return wordState || translateState;
  });

  // 将过滤后的列表重新赋值给原始的 list
  list.table.splice(0, list.table.length, ...filteredList);
  loading.value = false
}
const handleClear = () => {
  list.table = [...wordsList]
}
</script>
<style scoped lang="less">
.words-box {
  .search-box {
    margin-bottom: 20px;
  }
  .card-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .card {
      width: 350px;
      height: 180px;
      background-image: linear-gradient(200deg, #ffde7d, #f8f3d4);
      border-radius: 8px;
      padding: 20px;
      .head-box {
        font-size: 40px;
        display: flex;
        justify-content: space-between;
        .audio-box {
          cursor: pointer;
        }
      }
      .translate-box {
        display: flex;
        align-items: center;
        font-size: 20px;
      }
      .explain-box {
        font-size: 14px;
        color: #909399;
        margin-top: 5px;
        .item {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
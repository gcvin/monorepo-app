<template>
  <cus-check-all-tsx
    v-slot="{ index }"
    v-model:checkedList="checkedList"
    v-model:checkedAll="checkedAll"
    :list="list"
    item-style="display:block"
  >
    <el-rate
      :model-value="index % 6"
      :colors="[
        'var(--el-color-primary)',
        'var(--el-color-primary)',
        'var(--el-color-primary)',
      ]"
    />
  </cus-check-all-tsx>
  <!-- <cus-check-all
    v-slot="{ index }"
    v-model:checkedList="checkedList"
    v-model:checkedAll="checkedAll"
    :list="list"
    item-style="display:block"
  >
    <el-rate
      :model-value="index % 6"
      :colors="[
        'var(--el-color-primary)',
        'var(--el-color-primary)',
        'var(--el-color-primary)',
      ]"
    />
  </cus-check-all> -->
  <cus-back-top-tsx>
    <van-button type="primary" icon="star" round></van-button>
  </cus-back-top-tsx>
  <!-- <cus-back-top>
    <van-button type="primary" icon="star" round></van-button>
  </cus-back-top> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref(
  new Array(30).fill(null).map((_, i) => ({ id: i, label: i + 1 }))
)

const checkedList = ref([1])
const checkedAll = ref(false)
</script>

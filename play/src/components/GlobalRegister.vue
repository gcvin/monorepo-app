<template>
  <gcvin-check-all-tsx
    v-slot="{ index }"
    v-model:checked-list="checkedList"
    v-model:checked-all="checkedAll"
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
  </gcvin-check-all-tsx>
  <!-- <gcvin-check-all
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
  </gcvin-check-all> -->
  <gcvin-back-top-tsx>
    <van-button type="primary" icon="star" round />
  </gcvin-back-top-tsx>
  <!-- <gcvin-back-top>
    <van-button type="primary" icon="star" round></van-button>
  </gcvin-back-top> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref(
  new Array(30).fill(null).map((_, i) => ({ id: i, label: i + 1 }))
)

const checkedList = ref([1])
const checkedAll = ref(false)
</script>

<template>
  <!-- <CheckAllTsx
    v-slot="{ index }"
    v-model:checkedList="checkedList"
    v-model:checkedAll="checkedAll"
    :list="list"
    item-style="display:block"
  >
    <ElRate
      :model-value="index % 6"
      :colors="[
        'var(--el-color-primary)',
        'var(--el-color-primary)',
        'var(--el-color-primary)',
      ]"
    />
  </CheckAllTsx> -->
  <CheckAll
    v-slot="{ index }"
    v-model:checkedList="checkedList"
    v-model:checkedAll="checkedAll"
    :list="list"
    item-style="display:block"
  >
    <ElRate
      :model-value="index % 6"
      :colors="[
        'var(--el-color-primary)',
        'var(--el-color-primary)',
        'var(--el-color-primary)',
      ]"
    />
  </CheckAll>
  <!-- <BackTopTsx>
    <Button type="primary" icon="star" round></Button>
  </BackTopTsx> -->
  <BackTop>
    <Button type="primary" icon="star" round></Button>
  </BackTop>
</template>

<script lang="ts" setup>
import { ElRate } from 'element-plus'
import { Button } from 'vant'
import { BackTop, BackTopTsx, CheckAll, CheckAllTsx } from '@gcvin/ui'
import { ref } from 'vue'

const list = ref(
  new Array(30).fill(undefined).map((_, i) => ({ id: i, label: i + 1 }))
)

const checkedList = ref([1])
const checkedAll = ref(false)
</script>

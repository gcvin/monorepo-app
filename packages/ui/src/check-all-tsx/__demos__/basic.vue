<template>
  <cus-check-all-tsx
    v-model:checked-all="checkedAll"
    v-model:checked-list="checkedList"
    :list="list"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkedList = ref([0])
const checkedAll = ref(false)
const list = ref([
  { id: 0, label: 'text_1' },
  { id: 1, label: 'text_2' },
])
</script>

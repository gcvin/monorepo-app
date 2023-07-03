<template>
  <cus-editable-tsx :text="text" @change="(value) => (text = value)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('test')
</script>

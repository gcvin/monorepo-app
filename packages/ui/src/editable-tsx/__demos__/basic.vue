<template>
  <editable-tsx :text="text" @change="(value) => (text = value)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EditableTsx } from '@gcvin/ui'

const text = ref('test')
</script>

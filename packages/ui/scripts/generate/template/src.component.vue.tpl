<template>
  <div :class="bem()"><%= pascalCaseName %></div>
</template>

<script lang="ts" setup>
import { createNamespace } from '../../utils'
import { <%= camelCaseName %>Props } from './props'

const [_, bem] = createNamespace('<%= name %>')

defineOptions({
  name: 'gcvin-<%= name %>',
})

defineProps(<%= camelCaseName %>Props)
</script>

<template>
  <div id="back-top-target">
    <div class="content"></div>
    <back-top target="#back-top-target" />
  </div>
</template>

<script lang="ts" setup>
import { BackTop } from '@gcvin/ui'
</script>

<style scoped>
#back-top-target {
  height: 200px;
  overflow-y: auto;
}

.content {
  height: 1000px;
}
</style>

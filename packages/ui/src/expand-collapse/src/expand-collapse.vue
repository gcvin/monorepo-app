<template>
  <div :class="bem()">
    <div
      ref="textRef"
      :class="{ ellipsis: !isExpand }"
      :style="{ '-webkit-line-clamp': props.line, width: props.width }"
    >
      {{ props.text }}
    </div>
    <template v-if="showExpand">
      <a v-if="!isExpand" class="action" @click="isExpand = true">展开</a>
      <a v-else class="action" @click="isExpand = false">收起</a>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { createNamespace } from '../../utils'
import { expandCollapseProps } from './props'

const [_, bem] = createNamespace('expand-collapse')

defineOptions({
  name: 'cus-expand-collapse',
})

const props = defineProps(expandCollapseProps)

const isExpand = ref(true)
const showExpand = ref(false)
const textRef = ref<HTMLDivElement | null>(null)

const init = () => {
  if (!textRef.value) return
  const style = getComputedStyle(textRef.value)
  if (parseInt(style.height) / parseInt(style.lineHeight) > props.line) {
    isExpand.value = false
    showExpand.value = true
  }
}

watch(
  () => props.text,
  () => init()
)

onMounted(() => init())
</script>

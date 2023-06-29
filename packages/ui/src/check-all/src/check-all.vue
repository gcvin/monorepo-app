<template>
  <div :class="bem()">
    <el-checkbox
      :indeterminate="indeterminate"
      :model-value="checkedAll && !indeterminate"
      @change="onCheckAll"
    >
      <slot name="header"> 全选 ({{ checkedList.length }})</slot>
    </el-checkbox>
    <el-checkbox-group :model-value="checkedList" @change="onCheckAllGroup">
      <el-checkbox
        v-for="(item, index) in list"
        :key="item.id + ''"
        :label="item.id"
        :disabled="item.disabled"
        :style="itemStyle"
      >
        <slot :item="item" :index="index">{{ item.label }}</slot>
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import type { CheckboxValueType } from 'element-plus'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'
import { computed } from 'vue'
import { createNamespace } from '../../utils'
import { checkAllProps } from './props'

const [_, bem] = createNamespace('check-all')

defineOptions({
  name: 'cus-check-all',
})

const props = defineProps(checkAllProps)
const emit = defineEmits<{
  (e: 'update:checkedAll', checked: boolean): void
  (e: 'update:checkedList', list: CheckboxValueType[]): void
}>()

const indeterminate = computed(() => {
  return (
    !!props.checkedList.length && props.checkedList.length !== props.list.length
  )
})

const onCheckAll = () => {
  if (props.checkedAll) {
    emit('update:checkedAll', false)
    emit('update:checkedList', [])
  } else {
    emit('update:checkedAll', true)
    emit(
      'update:checkedList',
      props.list.map((item) => item.id)
    )
  }
}

const onCheckAllGroup = (val: CheckboxValueType[]) => {
  emit('update:checkedList', val)
  if (val.length === props.list.length) {
    emit('update:checkedAll', true)
  } else {
    emit('update:checkedAll', false)
  }
}
</script>

import { computed, defineComponent } from 'vue'
import { createNamespace } from '../../utils'
import { checkAllTsxProps } from './props'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'
import type { CheckboxValueType } from 'element-plus'

const [name, bem] = createNamespace('check-all-tsx')

export default defineComponent({
  name,

  props: checkAllTsxProps,

  emits: ['update:checkedAll', 'update:checkedList'],

  setup(props, { emit, slots }) {
    const indeterminate = computed(() => {
      return (
        !!props.checkedList.length &&
        props.checkedList.length !== props.list.length
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

    return () => (
      <div class={bem()}>
        <ElCheckbox
          indeterminate={indeterminate.value}
          model-value={props.checkedAll && !indeterminate.value}
          onChange={onCheckAll}
        >
          <slot name="header"> 全选 ({props.checkedList.length})</slot>
        </ElCheckbox>
        <ElCheckboxGroup
          model-value={props.checkedList}
          onChange={onCheckAllGroup}
        >
          {props.list.map((item, index) => (
            <ElCheckbox
              key={item.id}
              label={item.id}
              disabled={item.disabled}
              style={props.itemStyle}
            >
              {slots.default ? slots.default({ item, index }) : item.label}
            </ElCheckbox>
          ))}
        </ElCheckboxGroup>
      </div>
    )
  },
})

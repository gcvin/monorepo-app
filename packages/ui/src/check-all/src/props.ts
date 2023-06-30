import { makeRequiredProp, makeStringProp } from 'vant/es/utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { CheckboxValueType, CheckboxGroupValueType } from 'element-plus'

export type CheckAllItem = {
  id: CheckboxValueType
  label: string | number | boolean | object
  disabled?: boolean
}

export const checkAllProps = {
  /**
   * 选项列表，列表项必须包含 id、label 属性
   */
  list: makeRequiredProp<PropType<CheckAllItem[]>>(Array),
  /**
   * 选项样式
   */
  itemStyle: makeStringProp(''),
  /**
   * 已选列表，列表项为 id
   */
  checkedList: makeRequiredProp<PropType<CheckboxGroupValueType>>(Array),
  /**
   * 是否全选
   */
  checkedAll: makeRequiredProp(Boolean),
}

export type CheckAllProps = ExtractPropTypes<typeof checkAllProps>

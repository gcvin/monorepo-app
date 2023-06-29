import { makeRequiredProp, makeStringProp } from 'vant/es/utils'
import type { PropType, ExtractPropTypes } from 'vue'
import type { CheckboxValueType, CheckboxGroupValueType } from 'element-plus'

export type CheckAllTsxItem = {
  id: CheckboxValueType
  label: string | number | boolean | object
  disabled?: boolean
}

export const checkAllTsxProps = {
  /**
   * 类型定义
   */
  list: makeRequiredProp<PropType<CheckAllTsxItem[]>>(Array),
  itemStyle: makeStringProp(''),
  checkedList: makeRequiredProp<PropType<CheckboxGroupValueType>>(Array),
  checkedAll: makeRequiredProp(Boolean),
}

export type CheckAllTsxProps = ExtractPropTypes<typeof checkAllTsxProps>

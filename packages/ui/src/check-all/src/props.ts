import { makeRequiredProp, makeStringProp } from 'vant/es/utils'
import type { PropType, ExtractPropTypes } from 'vue'

export type checkAllItem = {
  id: string | number
  label: string | number | boolean | object
  disabled?: boolean
}

export const checkAllProps = {
  /**
   * 类型定义
   */
  list: makeRequiredProp<PropType<checkAllItem[]>>(Array),
  itemStyle: makeStringProp(''),
  checkedList: makeRequiredProp<PropType<(string | number)[]>>(Array),
  checkedAll: makeRequiredProp(Boolean),
}

export type CheckAllProps = ExtractPropTypes<typeof checkAllProps>

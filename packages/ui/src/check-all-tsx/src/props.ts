import { makeRequiredProp, makeStringProp } from 'vant/es/utils'
import type { PropType, ExtractPropTypes } from 'vue'

export type CheckAllTsxItem = {
  id: string | number
  label: object | string | number | boolean
  disabled?: boolean
}

export const checkAllTsxProps = {
  /**
   * 类型定义
   */
  list: makeRequiredProp<PropType<CheckAllTsxItem[]>>(Array),
  itemStyle: makeStringProp(''),
  checkedList: makeRequiredProp<PropType<(string | number)[]>>(Array),
  checkedAll: makeRequiredProp(Boolean),
}

export type CheckAllTsxProps = ExtractPropTypes<typeof checkAllTsxProps>

import { makeNumberProp, makeStringProp } from 'vant/es/utils'
import type { ExtractPropTypes } from 'vue'

export const expandCollapseProps = {
  /**
   * 类型定义
   */
  line: makeNumberProp(3),
  text: makeStringProp(''),
  width: makeStringProp('100%'),
}

export type ExpandCollapseProps = ExtractPropTypes<typeof expandCollapseProps>

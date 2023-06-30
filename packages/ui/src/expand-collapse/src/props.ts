import { makeNumberProp, makeRequiredProp, makeStringProp } from 'vant/es/utils'
import type { ExtractPropTypes } from 'vue'

export const expandCollapseProps = {
  /**
   * 显示行数
   */
  line: makeNumberProp(3),
  /**
   * 显示文本
   */
  text: makeRequiredProp(String),
  /**
   * 显示宽度
   */
  width: makeStringProp('100%'),
  /**
   * 文本行高
   */
  lineHeight: makeRequiredProp(String),
}

export type ExpandCollapseProps = ExtractPropTypes<typeof expandCollapseProps>

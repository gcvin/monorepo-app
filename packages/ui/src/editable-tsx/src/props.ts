import { makeStringProp } from 'vant/es/utils'
import type { ExtractPropTypes } from 'vue'

export const editableTsxProps = {
  /**
   * 文字内容
   */
  text: makeStringProp(''),
}

export type EditableTsxProps = ExtractPropTypes<typeof editableTsxProps>

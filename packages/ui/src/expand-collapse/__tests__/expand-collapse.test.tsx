import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { ExpandCollapse } from '../index'

describe('ExpandCollapse', () => {
  test('render', async () => {
    const wrapper = mount(
      () => (
        <ExpandCollapse
          text="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
          width="200px"
          line={3}
          style={{ lineHeight: '24px' }}
        />
      ),
      { attachTo: document.body }
    )

    await nextTick()
    expect(wrapper.text()).toContain('测试')
  })
})

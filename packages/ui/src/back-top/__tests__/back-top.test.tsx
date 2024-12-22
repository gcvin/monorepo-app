import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { BackTop } from '../index'

describe('BackTop.vue', () => {
  test('render', async () => {
    const wrapper = mount(
      (_: any, { emit }: any) => (
        <div class="target" style="height: 100px; overflow: auto">
          <div style="height: 10000px; width: 100%">
            <BackTop
              target=".target"
              visibilityHeight={2000}
              right={100}
              bottom={200}
              onClick={emit('click')}
            />
          </div>
        </div>
      ),
      { attachTo: document.body }
    )
    await nextTick()
    expect(wrapper.find('.gcvin-back-top').exists()).toBe(false)

    wrapper.element.scrollTop = 2000
    await wrapper.trigger('scroll')
    expect(wrapper.find('.gcvin-back-top').exists()).toBe(true)
    expect(wrapper.find('.gcvin-back-top').attributes('style')).toBe(
      'right: 100px; bottom: 200px;'
    )

    await wrapper.find('.gcvin-back-top').trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
    await wrapper.trigger('scroll')
    await new Promise((resolve) => setTimeout(resolve, 200))
    expect(wrapper.element.scrollTop).toBe(0)
    expect(wrapper.find('.gcvin-back-top').exists()).toBe(false)
    wrapper.unmount()
  })

  test('not existed target', async () => {
    const onMount = () => mount(() => <BackTop target="not-existed-target" />)

    expect(onMount).toThrowError('target is not existed')
  })
})

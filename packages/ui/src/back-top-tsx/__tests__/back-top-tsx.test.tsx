import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { BackTopTsx } from '../index'

describe('BackTopTsx.vue', () => {
  test('render', async () => {
    const wrapper = mount(
      (_: any, { emit }: any) => (
        <div class="target" style="height: 100px; overflow: auto">
          <div style="height: 10000px; width: 100%">
            <BackTopTsx
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
    expect(wrapper.find('.gcvin-back-top-tsx').exists()).toBe(false)

    wrapper.element.scrollTop = 2000
    await wrapper.trigger('scroll')
    expect(wrapper.find('.gcvin-back-top-tsx').exists()).toBe(true)
    expect(wrapper.find('.gcvin-back-top-tsx').attributes('style')).toBe(
      'right: 100px; bottom: 200px;'
    )

    await wrapper.find('.gcvin-back-top-tsx').trigger('click')
    expect(wrapper.emitted('click')).toBeDefined()
    await wrapper.trigger('scroll')
    await new Promise((resolve) => setTimeout(resolve, 200))
    expect(wrapper.element.scrollTop).toBe(0)
    expect(wrapper.find('.gcvin-back-top-tsx').exists()).toBe(false)
    wrapper.unmount()
  })

  test('default slot', async () => {
    const wrapper = mount(
      () => (
        <div class="target" style="height: 100px; overflow: auto">
          <div style="height: 1000px; width: 100%">
            <BackTopTsx target=".target">default slot</BackTopTsx>
          </div>
        </div>
      ),
      {
        attachTo: document.body,
      }
    )

    await nextTick()
    wrapper.element.scrollTop = 200
    await wrapper.trigger('scroll')
    expect(wrapper.text()).equals('default slot')
  })

  test('not existed target', async () => {
    const onMount = () =>
      mount(() => <BackTopTsx target="not-existed-target" />)

    expect(onMount).toThrowError('target is not existed')
  })
})

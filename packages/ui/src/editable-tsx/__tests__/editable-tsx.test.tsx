import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { EditableTsx } from '../index'

describe('EditableTsx', () => {
  test('render', async () => {
    const wrapper = mount(() => <EditableTsx text="test" />)
    await nextTick()
    expect(wrapper.text()).toBe('test')
  })
})

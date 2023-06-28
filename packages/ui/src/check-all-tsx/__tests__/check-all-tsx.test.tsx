import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CheckAllTsx } from '../index'

describe('CheckAllTsx', () => {
  test('render', async () => {
    const wrapper = mount(CheckAllTsx, {
      props: {
        list: [{ id: 0, label: 1 }],
        checkedAll: false,
        checkedList: [0],
      },
    })
    await nextTick()
    expect(wrapper.find('.is-checked').text()).toBe('1')
  })
})

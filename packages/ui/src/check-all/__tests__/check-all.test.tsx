import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CheckAll } from '../index'

describe('CheckAll', () => {
  test('render', async () => {
    const wrapper = mount(CheckAll, {
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

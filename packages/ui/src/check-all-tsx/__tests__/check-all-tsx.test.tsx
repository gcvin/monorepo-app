import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { CheckAllTsx } from '../index'
import type { CheckAllTsxItem } from '../index'
import type { CheckboxGroupValueType } from 'element-plus'
import { ElCheckbox, ElCheckboxGroup } from 'element-plus'

describe('CheckAllTsx', () => {
  test('render', async () => {
    const list = ref([
      { id: 0, label: '1' },
      { id: 1, label: '2' },
    ])
    const checkedAll = ref(false)
    const checkedList = ref<CheckboxGroupValueType>([0])
    const wrapper = mount(
      () => (
        <CheckAllTsx
          list={list.value}
          checkedAll={checkedAll.value}
          checkedList={checkedList.value}
          onUpdate:checkedAll={(val) => (checkedAll.value = val)}
          onUpdate:checkedList={(val) =>
            (checkedList.value = val as CheckboxGroupValueType)
          }
        />
      ),
      { attachTo: document.body }
    )

    await nextTick()
    const checkbox = wrapper.findComponent(ElCheckbox)
    const checkboxGroup = wrapper.findComponent(ElCheckboxGroup)
    expect(checkedAll.value).toBe(false)
    expect(checkedList.value).toStrictEqual([0])

    await checkbox.find('input').trigger('click')
    expect(checkedAll.value).toBe(true)
    expect(checkedList.value).toStrictEqual([0, 1])

    await checkbox.find('input').trigger('click')
    expect(checkedAll.value).toBe(false)
    expect(checkedList.value).toStrictEqual([])

    await checkboxGroup.findAll('input')[0].trigger('click')
    expect(checkedAll.value).toBe(false)
    expect(checkedList.value).toStrictEqual([0])

    await checkboxGroup.findAll('input')[1].trigger('click')
    expect(checkedAll.value).toBe(true)
    expect(checkedList.value).toStrictEqual([0, 1])
  })

  test('default slot', async () => {
    const wrapper = mount(
      () => (
        <CheckAllTsx
          list={[{ id: 0, label: '1' }]}
          checkedAll={true}
          checkedList={[0]}
        >
          {({ index, item }: { index: number; item: CheckAllTsxItem }) =>
            `index: ${index}, id: ${item.id}, label: ${item.label}`
          }
        </CheckAllTsx>
      ),
      {
        attachTo: document.body,
      }
    )

    await nextTick()
    const checkbox = wrapper.findAllComponents(ElCheckbox)[1]
    expect(checkbox.text()).equals('index: 0, id: 0, label: 1')
  })
})

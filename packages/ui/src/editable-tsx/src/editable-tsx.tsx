import { defineComponent, nextTick, ref } from 'vue'
import { createNamespace } from '../../utils'
import { editableTsxProps } from './props'
import { ElInput } from 'element-plus'
import type { InputInstance } from 'element-plus'

const [name, bem] = createNamespace('editable-tsx')

export default defineComponent({
  name,

  props: editableTsxProps,

  emits: ['change'],

  setup(props, { emit }) {
    const inputRef = ref<InputInstance | null>(null)
    const isEdit = ref(false)
    const inputText = ref('')

    const onClick = () => {
      isEdit.value = true
      inputText.value = ''
      nextTick(() => inputRef.value?.focus())
    }
    const onBlur = () => {
      isEdit.value = false
      if (inputText.value) {
        emit('change', inputText.value)
      }
    }
    const onKeydown = (event: Event) => {
      if ((event as KeyboardEvent).code === 'Enter') {
        onBlur()
      }
    }

    return () => (
      <div class={bem()} onClick={onClick}>
        {isEdit.value ? (
          <ElInput
            v-model={inputText.value}
            ref={inputRef}
            placeholder={props.text}
            onBlur={onBlur}
            onKeydown={onKeydown}
          />
        ) : (
          props.text
        )}
      </div>
    )
  },
})

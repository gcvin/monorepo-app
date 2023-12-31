import { defineComponent } from 'vue'
import { createNamespace } from '../../utils'
import { <%= camelCaseName %>Props } from './props'

const [name, bem] = createNamespace('<%= name %>')

export default defineComponent({
  name,

  props: <%= camelCaseName %>Props,

  setup() {
    return () => <div class={bem()}><%= pascalCaseName %></div>
  },
})

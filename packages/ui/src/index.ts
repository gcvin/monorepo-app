import type { App } from 'vue'
import { BackTop } from './back-top'
import { BackTopTsx } from './back-top-tsx'
import { CheckAll } from './check-all'
import { CheckAllTsx } from './check-all-tsx'
import { ExpandCollapse } from './expand-collapse'
import { EditableTsx } from './editable-tsx'

export * from './back-top'
export * from './back-top-tsx'
export * from './check-all'
export * from './check-all-tsx'
export * from './expand-collapse'
export * from './editable-tsx'

const components = [
  /* 阻止 prettier 格式化 */
  BackTop,
  BackTopTsx,
  CheckAll,
  CheckAllTsx,
  ExpandCollapse,
  EditableTsx,
]

export function install(app: App) {
  components.forEach((item) => {
    if ('install' in item) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  install,
}

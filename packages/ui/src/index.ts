import type { App } from 'vue'
import { BackTop } from './back-top'
import { BackTopTsx } from './back-top-tsx'
import { CheckAll } from './check-all'
import { CheckAllTsx } from './check-all-tsx'

export * from './back-top'
export * from './back-top-tsx'
export * from './check-all'
export * from './check-all-tsx'

const components = [BackTop, BackTopTsx, CheckAll, CheckAllTsx]

export function install(app: App) {
  components.forEach((item) => {
    if (item.install!) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  install,
}

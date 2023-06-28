import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block'
import Cus from '@ui/src'
import '@ruabick/vitepress-demo-block/dist/style.css'
import 'vant/lib/index.css'
import 'element-plus/dist/index.css'
import '@ui/src/index.scss'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
    app.use(Cus)
  },
}

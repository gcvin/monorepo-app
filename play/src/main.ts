import './assets/main.css'

import { createApp } from 'vue'

// GlobalRegister
// import Vant from 'vant'
// import ElementPlus from 'element-plus'
// import Gcvin from '@ui/src'
// import GlobalRegister from './components/GlobalRegister.vue'
// import 'vant/lib/index.css'
// import 'element-plus/dist/index.css'
// import '@ui/src/index.scss'

// const app = createApp(GlobalRegister)
// app.use(Vant)
// app.use(ElementPlus)
// app.use(Gcvin)
// app.mount('#app')

// ImportRegister
import ImportRegister from './components/ImportRegister.vue'
import 'vant/lib/index.css'
import 'element-plus/dist/index.css'
import '@ui/src/index.scss'

const app = createApp(ImportRegister)
app.mount('#app')

// AutoRegister
// import AutoRegister from './components/AutoRegister.vue'

// const app = createApp(AutoRegister)
// app.mount('#app')

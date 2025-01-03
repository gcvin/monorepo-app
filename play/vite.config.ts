import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Components from 'unplugin-vue-components/vite'
// import {
//   VantResolver,
//   ElementPlusResolver,
// } from 'unplugin-vue-components/resolvers'
// import { GcvinResolver } from '@gcvin/ui/lib/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // Components({
    //   resolvers: [VantResolver(), ElementPlusResolver(), GcvinResolver()],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('../packages/ui', import.meta.url)),
    },
  },
})

import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'
import { sidebar } from './sidebar'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/monorepo-app' : '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.bunny.net/css?family=fira-sans:400,400i,600,600i',
      },
    ],
  ],

  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: ({ filePath }) => {
        const path = filePath.replace('component/', '')
        return `https://github.com/gcvin/monorepo-app/edit/main/packages/ui/src/${path}`
      },
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present gcvin',
    },

    nav: [{ text: '组件', link: sidebar['/component/'][0].items[0].link }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gcvin/monorepo-app' },
    ],

    sidebar,
  },
  vite: {
    plugins: [genTemp(), vueJsx()],
    resolve: {
      alias: {
        '@ui': fileURLToPath(new URL('../../../packages/ui', import.meta.url)),
      },
    },
    build: {
      cssMinify: false,
    },
    ssr: { noExternal: ['element-plus', 'vant'] },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  buildEnd() {
    process.exit(0)
  },
})

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      clearMocks: true,
      environment: 'happy-dom',
      testTransformMode: {
        web: ['\\.[jt]sx$'],
      },
      coverage: {
        include: ['src/*/**', '!**/__demos__/**', '!**/style/**'],
      },
    },
  })
)

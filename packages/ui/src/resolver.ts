import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components/types'
import { kebabCase } from 'unplugin-vue-components'

const isSSR = Boolean(
  process.env.SSR ||
    process.env.SSG ||
    process.env.VITE_SSR ||
    process.env.VITE_SSG
)

const moduleType = isSSR ? 'lib' : 'es'

export interface CusResolverOptions {
  /**
   * import style css or scss along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'scss'
}

function getSideEffects(
  dirName: string,
  options: CusResolverOptions
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR) return

  if (importStyle === 'scss') {
    return `@gcvin/ui/${moduleType}/${dirName}/style/scss`
  } else {
    return `@gcvin/ui/${moduleType}/${dirName}/style/index`
  }
}

/**
 * Resolver for Cus
 *
 * @link https://github.com/gcvin/monorepo-app
 */
export function CusResolver(
  options: CusResolverOptions = {}
): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Cus')) {
        const partialName = name.slice(3)
        return {
          name: partialName,
          from: `@gcvin/ui/${moduleType}`,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}

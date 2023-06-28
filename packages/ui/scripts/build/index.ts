import { series, parallel } from 'gulp'
import {
  clean,
  buildModules,
  buildFull,
  buildStyle,
  generateTypes,
  generateHelper,
} from './task'

const __defProp = Object.defineProperty
;(globalThis as any).__name = (target: any, value: any) =>
  __defProp(target, 'name', { value, configurable: true })

export default series(
  clean,
  parallel(buildModules, buildFull, buildStyle, generateTypes, generateHelper)
)

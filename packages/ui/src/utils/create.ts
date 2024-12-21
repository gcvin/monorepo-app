import { createBEM, createTranslate } from 'vant/es/utils'

export function createNamespace(name: string) {
  const prefixedName = `gcvin-${name}`
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName),
  ] as const
}

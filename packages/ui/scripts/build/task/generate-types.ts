import { src, dest } from 'gulp'
import { root, outputEsm, outputCjs } from '../utils/paths'

export const generateTypes = async () => {
  const { execa } = await import('execa')
  await execa('vue-tsc', ['-p', 'tsconfig.json'], {
    cwd: root,
  })

  await new Promise((resolve) => {
    src(`${outputEsm}/**/*.d.ts`)
      .pipe(dest(`${outputCjs}`))
      .on('end', resolve)
  })
}

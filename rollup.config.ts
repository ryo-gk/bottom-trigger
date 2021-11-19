import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const bundle = config => ({
  ...config,
  input: 'lib/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: pkg.browser,
        format: 'iife',
        sourcemap: true,
      },
      {
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        plugins: [
          terser()
        ]
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: pkg.types,
      format: 'es',
    },
  }),
]

import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import pkg from './package.json'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'



export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      external: ['axios']
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      external: ['axios']
    }
  ],
  plugins: [
    external({}),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    json(),
    commonjs({include: /node_modules/})
  ]
}

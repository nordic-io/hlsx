import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const FOLDERS = [
  {
    name: ''
  },
  {
    name: '/components'
  },
  {
    name: '/utils'
  }
]

const generateRollupConfigs = () =>
  FOLDERS.map(
    ({
      name,
      outputs = [],
      plugins = [],
      typescriptProps = {},
      external = [],
      additionalConfigs = {}
    }) => ({
      input: `src${name}/index.ts`,
      output: [
        {
          file: `core${name}/index.js`,
          format: 'cjs'
        },
        {
          file: `core${name}/index.esm.js`,
          format: 'esm'
        },
        ...outputs
      ],
      plugins: [
        commonjs(),
        peerDepsExternal(),
        resolve(),
        terser(),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: true,
          declarationDir: `core${name}`,
          include: [`src${name}/**/*`],
          ...typescriptProps
        }),
        ...plugins
      ],
      external: [
        'baseui',
        'react',
        'react-dom',
        'styletron-engine-atomic',
        'styletron-react',
        ...external
      ],
      ...additionalConfigs
    })
  )

export default generateRollupConfigs()

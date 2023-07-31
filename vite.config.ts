import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { peerDependencies } from './package.json'

import {
  VITE_BUILD_LIB_ENTRIES,
  VITE_RESOLVE_ALIASES
} from './configs/constants'

export default defineConfig({
  build: {
    lib: {
      entry: VITE_BUILD_LIB_ENTRIES,
      formats: ['cjs', 'es']
    },
    minify: 'terser',
    outDir: 'core',
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      plugins: [
        typescript({
          tsconfig: './tsconfig.json',
          declaration: true,
          declarationDir: 'core',
          include: ['src/**/*'],
          exclude: ['**/*.stories.{ts,tsx}', '**/*.test.{tx,tsx}']
        })
      ],
      treeshake: 'recommended'
    },
    ssr: true
  },
  plugins: [react()],
  resolve: {
    alias: VITE_RESOLVE_ALIASES
  }
})

import { defineConfig } from 'vitest/config'

import { VITE_RESOLVE_ALIASES } from './constants'

export default defineConfig({
  test: {
    alias: VITE_RESOLVE_ALIASES,
    coverage: {
      src: ['src'],
      exclude: [
        '**/*.d.ts',
        '**/*.types.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        '**/*.overrides.{ts,tsx}',
        '**/*.styles.{ts,tsx}',
        '**/index.{ts,tsx}',
        '**/constants.{ts,tsx}'
      ]
    },
    env: {},
    environment: 'jsdom',
    globals: true,
    reporters: ['default'],
    setupFiles: ['./configs/setup.vitest.ts']
  }
})

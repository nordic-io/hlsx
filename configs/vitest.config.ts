import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    env: {},
    alias: {},
    coverage: {
      all: true,
      src: ['src'],
      exclude: [
        '__mocks__',
        '**/*.d.ts',
        '**/*.types.ts',
        '**/index.ts',
        '**/*.styles.ts',
        '**/constants',
      ],
    },
    environment: 'jsdom',
    reporters: ['default'],
    setupFiles: './configs/setup.vitest.ts',
  },
})

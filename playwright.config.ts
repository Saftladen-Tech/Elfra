import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'
import { host } from 'happy-dom/lib/PropertySymbol.js'

export default defineConfig<ConfigOptions>({
  use: {
    nuxt: {
      host: "http://localhost:3000"
    },
  },
  // ...
})

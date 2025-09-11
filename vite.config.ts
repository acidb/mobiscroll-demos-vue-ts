import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dyndateplugin from './dyndateplugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: { chunkSizeWarningLimit: 2048 },
  plugins: [vue(), vueJsx(), dyndateplugin()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

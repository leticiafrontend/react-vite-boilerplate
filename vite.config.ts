import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(function () {
  return {
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@assets': resolve(__dirname, '/src/assets'),
        '@components': resolve(__dirname, '/src/components'),
        '@hooks': resolve(__dirname, '/src/hooks'),
        '@modules': resolve(__dirname, '/src/modules'),
        '@pages': resolve(__dirname, '/src/pages'),
        '@routes': resolve(__dirname, '/src/routes'),
        '@store': resolve(__dirname, '/src/store'),
        '@styles': resolve(__dirname, '/src/styles'),
        '@utils': resolve(__dirname, '/src/utils'),
      },
    },
  }
})

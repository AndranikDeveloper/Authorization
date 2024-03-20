import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '/src/components'),
      '@hooks': path.resolve(__dirname, '/src/hooks'),
      types: path.resolve(__dirname, '/src/types'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@fonts': path.resolve(__dirname, '/src/fonts'),
      '@store': path.resolve(__dirname, '/src/store'),
    },
  },
});

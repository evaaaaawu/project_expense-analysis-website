import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, resolve } from 'url'; // 靜態導入 path 模組中的 fileURLToPath 函數

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'sass': resolve(__dirname, 'src/sass'),
      'pages': resolve(__dirname, 'src/pages'),
      'components': resolve(__dirname, 'src/components'),
      'context': resolve(__dirname, 'src/context'),
      'assets': resolve(__dirname, 'src/assets'),
      'api': resolve(__dirname, 'src/api'),
      // 使用 resolve 確保路徑正確
    },
  },
});

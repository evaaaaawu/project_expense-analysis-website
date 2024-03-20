import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, resolve } from 'url'; // 靜態導入 path 模組中的 fileURLToPath 函數

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pages': resolve(__dirname, 'src/pages'), // 使用 resolve 確保路徑正確
    },
  },
});

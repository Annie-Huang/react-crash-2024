import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

// If your app is created with create-react-app, then you do the proxy in package.json. Here you do it in vite.config.ts
// https://vitejs.dev/config/server-options.html#server-proxy
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

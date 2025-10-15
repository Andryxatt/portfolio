import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // ← це має відповідати репозиторію GitHub: andryxatt.github.io/**portfolio**
});

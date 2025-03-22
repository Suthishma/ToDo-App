import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ToDo-App/', // Ensure the repository name is correct and has slashes
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG'], // Include .PNG files as assets
  plugins: [svgr(),react()],
})

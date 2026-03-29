import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['dis-logo.svg'],
      manifestFilename: 'manifest.json',
      manifest: {
        name: 'DISCA Receipt',
        short_name: 'DISCA Receipt',
        description: 'DIS Cricket Academy Receipt Management Engine',
        theme_color: '#172554',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'dis-logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'dis-logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ],
})

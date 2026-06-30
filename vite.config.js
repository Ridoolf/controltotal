import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function pluginSeo() {
  let siteUrl = ''

  return {
    name: 'seo-url',
    configResolved(config) {
      siteUrl = (config.env.VITE_SITE_URL || '').replace(/\/$/, '')
    },
    transformIndexHtml(html) {
      if (!siteUrl) {
        return html
          .replace(/<link rel="canonical"[^>]*>\s*/g, '')
          .replace(/<meta property="og:url"[^>]*>\s*/g, '')
          .replace(/<meta property="og:image"[^>]*>\s*/g, '')
          .replace(/<meta name="twitter:image"[^>]*>\s*/g, '')
      }

      return html.replaceAll('__SITE_URL__', siteUrl)
    },
  }
}

export default defineConfig({
  plugins: [react(), pluginSeo()],
})

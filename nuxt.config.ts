import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  alias: {
    'content': fileURLToPath(new URL('./functions', import.meta.url))
  },
  css: ['~/assets/css/myfile.less'],
  components: [
    '~/components',
  ],
  content: [
    '~/content',
    '~/functions',
  ],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/tailwindcss']
})


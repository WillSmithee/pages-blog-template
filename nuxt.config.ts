import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_DOMAIN: process.env.BASE_DOMAIN
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


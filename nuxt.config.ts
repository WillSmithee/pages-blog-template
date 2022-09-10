import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  // plugins: ['~/plugins/ckeditor-nuxt'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/tailwindcss']
  // modules: ['@nuxt/content', '@nuxt/ui']
})

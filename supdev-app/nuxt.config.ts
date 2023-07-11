export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@sidebase/nuxt-auth'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },
  runtimeConfig: {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
  },
  auth: {
    globalAppMiddleware: true,
  }
})

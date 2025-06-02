// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  components: true,
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.includes('-'),
    },
  },
  plugins: [
    { src: '~/plugins/pcds.client.ts', mode: 'client' },
    { src: '~/plugins/vee-validate.ts', mode: 'client' },
  ],
  modules: ['@pinia/nuxt'],
})

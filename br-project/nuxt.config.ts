// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head : {
      title: "Belén Rubiales Art",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    }
  },
  components : [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

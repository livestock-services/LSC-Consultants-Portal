export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    port: process.env.PORT,
    host: process.env.HOST 
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL 
  },

   target: 'static',
  //target: 'server',

  head: {
    title: 'LSCS Consultants Portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/vue-json-excel.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
   // proxy: true,
   // prefix: process.env.NUXT_ENV_NEW_API_URL,
   //  https: true,
     baseURL: process.env.NUXT_ENV_NEW_API_URL,
  },
  
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // proxy: {
  //   '/api/': {
  //     target: process.env.NUXT_ENV_NEW_API_URL,
  //     pathRewrite: { '^/api/': '' },
  //   },

  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      web_accessible_resources: ["assets/LSC2.png"],
      lang: 'en'
    },
    icon: {
      source:'static/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // router: {
  //   middleware: ['auth'],
  // },


  auth: {
    redirect: {
      
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/',
    
    },

    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 30000,
          global: true,
         // required: true,
          type: ''
        },
        user: {
          property: false,
          autoFetch: true
        },

        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName:'token' },
          logout: { url: '/auth/logout', method: 'get' },
          user:false // { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG,
    cosmicReadKey: process.env.COSMIC_READ_KEY,
    public: {
      cosmicBucketSlug: process.env.COSMIC_BUCKET_SLUG
    }
  },
  
  app: {
    head: {
      title: 'Professional Services Showcase',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Discover our professional services, meet our team, and explore our success stories' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' 
        }
      ],
      script: [
        {
          src: '/dashboard-console-capture.js',
          type: 'text/javascript'
        }
      ]
    }
  },
  
  typescript: {
    strict: true,
    typeCheck: true
  }
})
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'makotia.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'makotia portfolio' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hs6a" },
      { name: "twitter:creator", content: "@hs6a" },
      { name: "twitter:image", content: "https://makotia.me/makotia_icon.png" },
      { name: "og:image", content: "https://makotia.me/makotia_icon.png" },
      { name: "og:url", content: "https://makotia.me" },
      { name: "og:type", content: "website" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css', rel: 'stylesheet'},
      { href: 'https://fonts.googleapis.com/css?family=Roboto', rel:'stylesheet' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mtg-card-search/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "./node_modules/bootstrap/scss/_functions.scss";
        @import "./node_modules/bootstrap/scss/_mixins.scss";
        @import "@/scss/_variables.scss";
        `
      }
    }
  }
}

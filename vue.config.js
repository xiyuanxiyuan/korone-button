const production_url = process.env.NODE_ENV === 'production' && process.env.IS_VERCEL === 'true'
  ? 'https://korone.lonelyion.com'
  : '/';

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: production_url
}

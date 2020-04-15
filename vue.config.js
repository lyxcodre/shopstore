module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'router': '@/router',
        'views': '@/views'
      }
    }
  }
}

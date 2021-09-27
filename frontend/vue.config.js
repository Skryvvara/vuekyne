module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  chainWebpack: (config) => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Darkyne'
      args[0].hash = true
      return args
    });
  },
  configureWebpack: {
    output: {
      filename: `[name].[hash].js`,
      chunkFilename: `[name].[chunkhash].js`,
    }
  },
}
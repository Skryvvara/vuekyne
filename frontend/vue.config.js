module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    },
    chainWebpack: config => {
      config.optimization.splitChunks({
        ...config.optimization.get('splitChunks'),
        automaticNameDelimiter: '-'
      }),
      config.optimization.usedExports(true),
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Darkyne'
        return args
      })
    }
  }
module.exports = {
  // 配置跨域代理
  devServer: {
    port: 9802, // 端口号
    proxy: {
      '/api': {
        target: 'http://47.96.39.11:31415',
        pathRewrite: { '^/api': '' }
      }
    }
  },

  // 这个到打包的时候再加上！！！
  // '/线上地址'
  publicPath: 'http://cdn.conghucai.site/myblog/page/'
}

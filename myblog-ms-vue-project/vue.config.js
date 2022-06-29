module.exports = {
  // 配置跨域代理
  devServer: {
    port: 9803, // 端口号
    proxy: {
      '/api': {
        target: 'http://192.168.0.9:31416',
        pathRewrite: { '^/api': '' }
      }
    }
  },

  // 这个到打包的时候再加上！！！
  // '/线上地址'
  // publicPath: '/http://192.168.0.9:31416/'
  publicPath: 'http://cdn.conghucai.site/myblog-ms/page/'
}

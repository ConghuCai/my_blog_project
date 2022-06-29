module.exports = {
  // 配置跨域代理
  devServer: {
    port: 9802, // 端口号
    proxy: {
      '/api': {
        target: 'http://后端服务器url',
        pathRewrite: { '^/api': '' }
      }
    }
  },

  // 这个打包的时候会加上！！！
  publicPath: 'http://cdn.conghucai.site/myblog/page/'
}

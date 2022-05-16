const proxy = require('http-proxy-middleware');

module.exprots = function(app) {
  app.use(
    proxy('/api1', {  // api1是需要转发的请求，遇见/api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',  // 请求转发给谁，配置转发目标地址
      changeOrigin: true,  // 控制服务器收到的请求头中Host的值
      pathRewrite: {'^/api1': ''}  // 重写请求路径 去除请求前缀，保证交给后台服务器的是正常请求地址（必须配置）
    }),

    // changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
    // changeOrigin设置为false时，服务器收到的请求头中的host为：localhost: 3000
    // changeOrigin默认值为false，但是我们一般将changeOrigin值设为true
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    }),
  );
}
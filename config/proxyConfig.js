/**
 * Created by chenjie on 2018/4/12.
 */
module.exports = {
  proxy: {
    '/apis': {
      target: 'https://www.exaple.com',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apis': ''   //需要rewrite的,
      }
    }
  }
}

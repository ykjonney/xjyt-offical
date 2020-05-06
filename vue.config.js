const webpack=require('webpack');
// 引入等比适配插件
/* const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
}) */

// 使用等比适配插件
/* module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
} */

/* const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 75
    }
  }<br>//在generateLoaders方法中添加px2remLoader

const loaders = [cssLoader,px2remLoader] */
module.exports = {
    assetsDir:'static',
    /*proxyTable: {
        '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
            target: 'https://www.hqz.com', //源地址 
            changeOrigin: true, //改变源 
            pathRewrite: {
                '^/api': 'https://www.hqz.com' //路径重写 
           }
       }
    },*/
   // 地址的起点
    publicPath:"/",
    productionSourceMap:false,
    chainWebpack:config=>{
            /*config.externals={
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'element-ui': 'ELEMENT's
            }*/
        //移除prefetch插件
        config.plugins.delete("prefetch");
        //移除preload插件
        config.plugins.delete("preload");
        //压缩代码
        config.optimization.minimize(true);
        //分割代码
        config.optimization.splitChunks({
            chunks:'all'
        })
    },

};
require("babel-polyfill")
/* module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: { app: './src/main.js' },
  //百度地图配置20180518
  externals: {
    "BMap": "BMap"
  },

} */
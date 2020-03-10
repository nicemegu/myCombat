// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
  // return path.join(__dirname, '..', dir)
}
module.exports = {
  //vue脚手架2----> vue脚手架3的配置
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // import Vue from 'vue/dist/vue.esm.js'
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
  },
  //配置数据代理，解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        //目标地址
        target: 'http://localhost:4000',
        //是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
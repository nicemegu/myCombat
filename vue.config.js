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
}
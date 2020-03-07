module.exports = {
  plugins: {
    //此处注释掉，解决 报错
    /** Replace Autoprefixer browsers option to Browserslist config.
  Use browserslist key in package.json or .browserslistrc file.

  Using browsers option can cause errors. Browserslist config 
  can be used for Babel, Autoprefixer, postcss-normalize and other tools.

  If you really need to use option, rename it to overrideBrowserslist.   

  Learn more at:
  https://github.com/browserslist/browserslist#readme
  https://twitter.com/browserslist */
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*']
    }
  }
}
//引入vue
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入路由器
import router from './router'
import '../tools/fit'
//引入vue插件
//设置是否提示信息
Vue.config.productionTip=false
new Vue({
  el:'#app',
  components:{
    App
  },
  //模板
  template:'<App />',
  //注册
  router
})
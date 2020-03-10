//引入Vue
import Vue from 'vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由配置
import routes from './routes'
//声明使用
Vue.use(VueRouter)
export default new VueRouter({
  //去掉地址栏上的#号
  mode: 'history',
  //注册
  routes
})
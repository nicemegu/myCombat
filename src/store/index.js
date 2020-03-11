//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//引入主页数据
import home from './models/home'
//引入分类数据
import sort from './models/sort'
//引入值得买数据
import goodvalue from './models/goodvalue'
//声明使用
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    home,
    sort,
    goodvalue
  }
})
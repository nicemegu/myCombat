//配置路由
//引入组件
//home首页
import Home from '../pages/Home/Home.vue'
//分类
import Sort from '../pages/Sort/Sort.vue'
//值得买
import GoodValue from '../pages/GoodValue/GoodValue.vue'
//购物车
import Cart from '../pages/Cart/Cart.vue'
//个人
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      ishow:true
    }
  },
  {
    path:'/sort',
    component:Sort,
    meta:{
      ishow:true
    }
  },
  {
    path:'/goodvalue',
    component:GoodValue,
    meta:{
      ishow:true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      ishow:true
    }
  },
  {
    path:'/personal',
    component:Personal
  },
  //重定向
  {
    path:'/',
    component:Home
  }
]

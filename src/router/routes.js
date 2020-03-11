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
//搜索
import Search from '../pages/Search/Search.vue'
//食品列表
import ShopList from '../pages/Sort/ShopList/ShopList.vue'
//
import Cate from '../pages/Home/Cate/Cate.vue'
//登入
import PhoneLogin from '../pages/Login/PhoneLogin.vue'
export default [{
    path: '/home',
    component: Home,
    children: [{

      path: '/home?categoryId=:id',
      component: Cate, 
      meta: {
        isShowTabbar: true
      },
    }],
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/sort',
    component: Sort,
    children: [{
      path: '/sort?categoryId=:id',
      component: ShopList,
      meta: {
        isShowTabbar: true
      },
    }],
    meta: {
      isShowTabbar: true
    },


  },
  {
    path: '/goodvalue',
    component: GoodValue,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowTabbar: true
    }
  },  
  {
    path: '/personal',
    component: Personal,
  },
  {
    path: '/search',
    component: Search
    
  },
  {
    path: '/personal/loginp',
    component: PhoneLogin
  },
  //重定向
  {
    path: '/',
    redirect: '/home'
  }
]
import {
  RECIVE_HOME
} from '../action_type'
//引入发送接口的请求
import {
  reqHome
} from '../../api/index'
const state = {
  
  //首页的数据
  homes: {},
  kingKongModule:[],
  newshop:[],
  flashSaleModule:{},
  indexActivityModule:[],

  //首页导航栏的数据
  cates:[]

}
const mutations = {
  //小图标
  [RECIVE_HOME](state, homes) {
    const {index,indexCateModule} = homes
    state.homes = index
    state.kingKongModule =index.kingKongModule
    state.newshop =index.newItemList
    state.flashSaleModule=index.flashSaleModule
    state.indexActivityModule=index.indexActivityModule


    //首页nav数据
    state.cates = indexCateModule
  }
}
const actions = {
  //小图标
  async Gethome({
    commit
  }) {
    const homes = await reqHome()
    commit(RECIVE_HOME, homes)
    //判断返回的是否有值
    // if (homes.length > 0) {
    //   commit(RECIVE_HOME, homes)
    // }
  }
}
const getter = {}
export default {
  state,
  mutations,
  actions,
  getter
}
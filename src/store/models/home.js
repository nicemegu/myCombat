import {
  RECIVE_HOME
} from '../action_type'
//引入发送接口的请求
import {
  reqHome
} from '../../api/index'
const state = {
  //小图标
  homes: {},
  kingKongModule:[],
  newshop:[],
  flashSaleModule:{},
  indexActivityModule:[]

}
const mutations = {
  //小图标
  [RECIVE_HOME](state, homes) {
    state.homes = homes
    state.kingKongModule =homes.kingKongModule
    state.newshop =homes.newItemList
    state.flashSaleModule=homes.flashSaleModule
    state.indexActivityModule=homes.indexActivityModule
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
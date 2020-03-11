
//引入type
import {RECIVE_SWIPEREIMG} from '../action_type'
//引入接口
import {reqSwiper} from '../../api/index'

const state={
  swiperimg:[]
}
const mutations={
  [RECIVE_SWIPEREIMG](state,swiperimg){
    state.swiperimg = swiperimg
  }
}
const actions={
  async Getswiperimg({commit}){
    //发送请求
    const result = await reqSwiper()
    console.log(result)
    //判断是否响应成功
    if(result.code ==200){
      //成功
      console.log(result.data.navList)
      const swiperimg = result.data.navList
      commit(RECIVE_SWIPEREIMG,swiperimg)
    }
  }
}
const getter={}
export default {
  state,
  mutations,
  actions,
  getter
}
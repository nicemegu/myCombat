//引入type
import { RECIVE_SORT, RECIVE_CATELISTS } from "../action_type";
import { reqSortleft, reqSoltright } from "../../api/index";
const state = {
  sorts: {},
  //左侧导航数据
  categoryL1List: [],
  //右侧导航数据
  cateLists: []
};
const mutations = {
  //左侧导航数据
  [RECIVE_SORT](state, sorts) {
    state.sorts = sorts;
    state.categoryL1List = sorts.categoryL1List;
  },
  [RECIVE_CATELISTS](state, cateLists) {
    state.cateLists = cateLists;
  }
};
const actions = {
  //左侧导航数据
  async Getsort({ commit }) {
    const sorts = await reqSortleft();
    console.log(sorts);
    commit(RECIVE_SORT, sorts);
  },
  //右侧数据
  async Getcate({ commit }) {
    const cateLists = await reqSoltright();
    console.log(cateLists);
    commit(RECIVE_CATELISTS, cateLists);
  }
};
const getter = {};
export default {
  state,
  mutations,
  actions,
  getter
};

<template>
  <div class="sort">
    <header>
      <span slot="middle">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
          class="search"
        />
      </span>
    </header>
    <div class="contentlist">
      <div class="list_left">
        <van-sidebar v-model="activeKey" >
          <van-sidebar-item title="推荐专区" />
          <van-sidebar-item title="宅家防护" />
          <van-sidebar-item title="推荐专区" />
          <van-sidebar-item title="宅家防护" />
          <van-sidebar-item title="5" />
          <van-sidebar-item title="6" />
          <van-sidebar-item title="5" />
          <van-sidebar-item title="5" />
        </van-sidebar>
      </div>
      <div>
        <ShopList />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Sidebar, SidebarItem } from "vant";
Vue.use(Search);
Vue.use(Sidebar);
Vue.use(SidebarItem);
import header from "../../components/Header/Header";
import ShopList from './ShopList/ShopList'
export default {
  name:'Sort',
  data(){
    return {
      activeKey: 0
    }
  },
  components:{
    ShopList,
    
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.sort
  width 100%
  .contentlist
    width 100%
    display flex
    .list_left
      width 82px
      border-right 1px solid #d9d9d9
      border-top 1px solid #d9d9d9
      .van-sidebar
        width 100%
        margin-top 20px
        .van-sidebar-item
          width 100%
          height 45px
          padding 10px
          background-color #fff
</style>

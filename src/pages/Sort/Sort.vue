<template>
  <div class="sort">
    <header>
      <span slot="middle">
        <van-search
          placeholder="请输入搜索关键词"
          input-align="center"
          class="search"
        />
      </span>
    </header>
    <div class="contentlist">
      <div class="list_left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="sort.name"
            v-for="(sort, index) in categoryL1List"
            :key="index"
            @click="changlist(`/sort?categoryId=${sort.id}`)"
          />
        </van-sidebar>
      </div>
      <div>
        <!-- 右侧数据 -->
        <ShopList :obj="obj"/>
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
import ShopList from "./ShopList/ShopList";
//引入辅助函数
import { mapState } from "vuex";
export default {
  name: "Sort",
  data() {
    return {
      activeKey: 0,
      index: 0,
      obj:{}
    };
  },
  methods: {
    changlist(path) {
      if (this.$router.path !== path) {
        this.$router.push(path); //ok;
        //获取当前的id
        const id = this.$route.query.categoryId;
        //获取右边的整体数据
        const result = this.cateLists
        result.forEach((res)=>{
          if(res.id==id){
            this.obj = res
          }
        })
      }
    }
  },
  mounted() {
    this.$store.dispatch("Getsort");
    this.$store.dispatch("Getcate");
  },
  computed: {
    ...mapState({
      categoryL1List: state => state.sort.categoryL1List,
      cateLists: state => state.sort.cateLists
    })
  },
  components: {
    ShopList
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

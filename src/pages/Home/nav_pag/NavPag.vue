<template>
  <div class="Nav">
    <van-tabs class="Tabs" @click="changetab">
      <van-tab class="tab" title="推荐"></van-tab>
      <van-tab
        class="tab"
        :title="cate.name"
        :name="cate.id"
        v-for="(cate, index) in cates"
        :key="index"
      ></van-tab>
    </van-tabs>

  </div>
</template>
<script>
//引入
import Vue from "vue";
import { Tab, Tabs, Popup } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
//引入辅助函数
import { mapState } from "vuex";
export default {
  name: "NavPag",
  data() {
    return {
      catedata: {}
    };
  },
  methods: {
    changetab(name, title) {
      let id = name
      console.log(id);
        //获取整体数据
        const result = this.cates;
        //循环遍历 得到要传入的对象
        result.forEach(res => {
          //根据id值获取数据
          if (res.id == id) {
            this.catedata = res;
          }
        });
        console.log(this.catedata)
    }
  },
  components:{
   
  },
  computed: {
    ...mapState({
      cates: state => state.home.cates
    })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.Nav
  width 100%
  position fixed
  top 45px
  z-index 2
  background-color #fff
  .Tabs
    width 80%
    .tab
      margin-left 30px
</style>

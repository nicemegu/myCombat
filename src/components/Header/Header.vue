<template>
  <header class="header">
    <img
      src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
      alt=""
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
      class="search"
    />
    <div class="btn">登录</div>
  </header>
</template>
<script>
import Vue from "vue";
import { Search, Button } from "vant";
Vue.use(Search);
Vue.use(Button);
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  display flex
  font-size 20px
  position fixed
  display flex
  align-items center
  justify-content space-between
  top 0
  img
    width 70px
    height 25px
  .search
    width 70%
  .btn
    width 40px
    height 24px
    font-size 14px
    line-height 26px
    text-align center
    background-color #fff
    border 1px solid #DD1A21
    border-radius 7px
</style>

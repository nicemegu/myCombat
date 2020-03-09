<template>
  <header class="header">
    <slot name="left">
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
        alt
      />
    </slot>
    <slot name="middle"></slot>
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" class="search" />
    
    <slot name="right"></slot>
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
  width 100%
  height 50px
  display flex
  font-size 20px
  position fixed
  display flex
  align-items center
  justify-content space-around
  top 0
  z-index 2
  background-color #fff
  img
    width 70px
    height 25px
  .search
    width 55%
    padding 0
  .btn
    width 32px
    height 18px
    font-size 12px
    line-height 18px
    text-align center
    background-color #fff
    border 1px solid #DD1A21
    border-radius 7px
    color #DD1A21
</style>

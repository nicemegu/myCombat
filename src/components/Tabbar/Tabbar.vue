<template>
  <footer class="tabbar">
    <a
      href="javascript:;"
      class="tabbar_label "
      @click="goto('/home')"
      :class="{ on: $route.path === '/home' }"
    >
      <span class="label_icon">
        <i class="icon  iconfont icon-home"></i>
      </span>
      <span class="icon_text">首页</span>
    </a>
    <a
      href="javascript:;"
      class="tabbar_label"
      @click="goto('/sort')"
      :class="{ on: $route.path === '/sort' }"
    >
      <span class="label_icon">
        <i class="icon iconfont icon-drawer"></i>
      </span>
      <span class="icon_text">分类</span>
    </a>
    <a href="javascript:;" class="tabbar_label" @click="goto('/goodvalue')" :class="{ on: $route.path === '/goodvalue' }">
      <span class="label_icon">
        <i class="icon iconfont icon-photo"></i>
      </span>
      <span class="icon_text">值得买</span>
    </a>
    <a href="javascript:;" class="tabbar_label" @click="goto('/cart')" :class="{ on: $route.path === '/cart' }">
      <span class="label_icon">
        <i class="icon iconfont icon-TABbar"></i>
      </span>
      <span class="icon_text">购物车</span>
    </a>
    <a href="javascript:;" class="tabbar_label" @click="goto('/personal')"  :class="{ on: $route.path === '/personal' }">
      <span class="label_icon">
        <i class="icon iconfont icon-TABbar1"></i>
      </span>
      <span class="icon_text">个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: "Tabbar",
  methods: {
    goto(path) {
      if (this.$router.path !== path) {
        this.$router.replace(path);
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.tabbar
  width 100%
  height 60px
  position fixed
  bottom 0
  display flex
  font-size 20px
  border-top 1px solid #666
  justify-content space-around
  align-items center
  .tabbar_label
    display flex
    flex-direction column
    &.on
      color #e54f55
    .label_icon
      text-align center
      .icon
        font-size 24px
    .icon_text
      margin-top 3px
      font-size 16px
</style>

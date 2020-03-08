<template>
  <van-tabbar v-model="active" class="Tabbar">
    <van-tabbar-item icon="wap-home-o" @click="goto('/home')"
      >首页</van-tabbar-item
    >
    <van-tabbar-item icon="coupon-o" dot @click="goto('/sort')"
      >分类</van-tabbar-item
    >
    <van-tabbar-item icon="send-gift-o" @click="goto('/goodvalue')"
      >值得买</van-tabbar-item
    >
    <van-tabbar-item icon="shopping-cart-o" @click="goto('/cart')"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="contact" @click="goto('/personal')"
      >个人</van-tabbar-item
    >
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0
    };
  },
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
.Tabbar
  border-top 1px solid #ccc
</style>

<template>
  <div>
    <div class="title">
      <span><van-icon name="wap-home-o" size="28"/></span>
      <img
        src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
        alt=""
      />
      <div class="title_right">
        <span><van-icon name="search" size="28"/></span>
        <span><van-icon name="shopping-cart-o" size="28"/></span>
      </div>
    </div>
    <div class="personalcontent">
      <img src="./imgs/login.png" alt="" />
      <div class="logintype">
        <div class="phone type">
          <span class="phonelogo"></span>
          <span>手机号快捷登录</span>
        </div>
        <div class="mail type">
          <span class="maillogo"></span>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <ul class="list">
        <li>
          <span class="weixin"></span>
          <span>微信</span>
        </li>
        <li class="qqtype">
          <span class="qq"></span>
          <span>QQ</span>
        </li>
        <li>
          <span class="weibo"></span>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.title
  display flex
  justify-content space-between
  align-items center
  height 45px
  padding 0 20px
  img
    width 93px
    height 26px
.personalcontent
  margin 0
  width 100%
  height 580px
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  background-color #f2f5f4
  img
    width 130px
    height 45px
  .logintype
    width 100%
    font-size 16px
    display flex
    flex-direction column
    align-items center
    .type
      width 322px
      height 47px
      color #fff
      display flex
      justify-content center
      align-items center
      .phonelogo
        width 20px
        height 20px
        background-image url(''./imgs/login24.webp'')
        background-size 100% 
        background-position 0 -25px
        margin-right 8px
      .maillogo
        width 20px
        height 20px
        background-image url(''./imgs/login24.webp'')
        background-size 100% 
        background-position 0 0px
        margin-right 8px
      &.phone
        background-color #dd1a21
        margin-bottom 16px
        
      &.mail
        background-color #fff
        color #dd1a21
  .list
    display flex
    li
      font-size 12px
      width 82px
      height 20px
      box-sizing border-box
      padding 0 15px
      line-height 20px
      text-align center
      display flex
      .weixin
        width 20px
        height 20px
        background-image url('./imgs/weixin.png')
        background-size 100% 100%
        margin-right 5px
      .qq
        width 20px
        height 20px
        background-image url('./imgs/qq.png')
        background-size 100% 100%
        margin-right 5px
      .weibo
        width 20px
        height 20px
        background-image url('./imgs/weibo.png')
        background-size 100% 100%
        margin-right 5px
    .qqtype
      border-left 1px solid #000
      border-right 1px solid #000
      
</style>

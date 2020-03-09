<template>
  <div class="cartout">
    <div class="head">
      <span class="home">购物车</span>
      <span class="quan">领券</span>
    </div>
    <div class="extends">
      <ul class="list">
        <li>
          <span class="circle"></span>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span class="circle"></span>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span class="circle"></span>
          <span>满88元免费包邮</span>
        </li>
      </ul>
    </div>
    <div class="login">
      <img src="./imgs/cart.png" alt="">
      <span>去添加点什么吧</span>
      <div class="btn">登录</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cartout
  background-color #f4f4f4
  width 100%
  height 550px
  .head
    width 100%
    height 45px
    display flex
    justify-content space-between
    align-items center
    font-size 16px
    box-sizing border-box
    padding 0 20px
    .quan
      color #dd1a21
  .extends  
    widows 100%
    .list
      height 35px
      display flex
      justify-content space-around
      align-items center
      background-color #eee
      li
        font-size 12px
        display flex
        align-items center
        .circle
          width 3px
          height 3px
          border 1px solid #ccc
          border-radius 50%
          margin-right 3px
          background-color #fff
  .login
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100%
    height 100%
    font-size 16px
    color #999
    .btn
      width 230px
      height 45px
      background-color #dd1a2a
      color #fff
      text-align center
      line-height 45px
      margin-top 30px
    img
      width 120px
      height 120px
    
</style>

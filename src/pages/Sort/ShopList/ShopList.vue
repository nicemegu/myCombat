<template>
  <div class="shop_list">
    <img src="../imgs/shangping.jpg" alt="">
    <div class="shoplist">
      <ul class="list">
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>
        <li>
          <img src="../imgs/shangping.webp" alt="">
          <span>精选好物15元起</span>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shop_list
  width 260px
  padding 15px
  img 
    width 100%
    height 95px
  .shoplist
    width 100%
    margin-top 20px
    .list
      width 100%
      display flex 
      flex-wrap wrap
      justify-content space-around
      li
        width 70px
        height 105px
        display flex
        flex-direction column
        align-items center
        justify-content center
        font-size 13px
        img 
          width 70px
          height 70px
        span 
          width 70px
          height 39px
          text-align center
</style>
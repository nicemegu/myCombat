<template>
  <div>
    <!-- 搜索头部 -->
    <Header />
    <NavPag />
    <Swiper />
    <!-- 展示的小字，轮播图紧贴的地方 -->
    <div class="extend">
      <ul class="extendlist">
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
            alt=""
          /><a href="javaScript:,">网易自营品牌</a>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"
            alt=""
          /><a href="javaScript:,">30天无忧退货</a>
        </li>
        <li>
          <img
            src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"
            alt=""
          /><a href="javaScript:,">48小时快速退款</a>
        </li>
      </ul>
    </div>
    <!-- 展示的商品导航 -->
    <div class="gridnav">
      <van-grid
        icon-size="52px"
        :square="false"
        :border="false"
        :column-num="5"
      >
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
          text="新品首发"
          border="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
          text="居家生活"
          border="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
          text="服饰鞋包"
          border="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
          text="美食酒水"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
          text="个人护理"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
          text="母婴亲子"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
          text="运动旅行"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
          text="数码家电"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
          text="全球特色"
          icon-size="40px"
          square="false"
        />
        <van-grid-item
          icon="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
          text="好货抄底"
          icon-size="40px"
          square="false"
        />
      </van-grid>
    </div>
    <!-- 活动区域 -->
    <div class="content">
      <!-- 限时特惠 -->
      <div class="exhibition ">
        <div class="exhibition_top"></div>
        <div class="exhibition_bottom">
          <div class="exhibition_bottom_top">
            <div class="exhibition_bottom_left"><a href="###"></a></div>
            <div class="exhibition_bottom_right"><a href="###"></a></div>
          </div>
          <div class="exhibition_bottom_bottom">
            <ul class="exhibition_bottom">
              <li>
                <p>48H限购</p>
                <p>女王专属7折起</p>
                <img src="./imgs/4.png" alt="" />
              </li>
              <li>
                <p>女神专属爆款</p>
                <p>女王专属7折起</p>
                <img src="./imgs/tixudao.png" alt="" />
              </li>
              <li>
                <p>48H限购</p>
                <p>女王专属7折起</p>
                <img src="./imgs/longjing.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 新人礼 -->
      <div class="newperson">
        <div class="newperson_title">
          <span></span>
          <p>新人专享礼</p>
          <span></span>
        </div>
        <div class="newPerson_content">
          <div class="content_left">
            <p>新人专享礼包</p>
            <img src="./imgs/xinren.png" alt="" />
          </div>
          <div class="content_right">
            <div class="right_top">
              <div class="text">
                <span>福利社</span>
                <span class="subtitle">今日特价</span>
              </div>

              <img src="./imgs/tehui.png" alt="" />
            </div>
            <div class="right_bottom">
              <span>新人拼团</span>
              <span class="subtitle">一元起包邮</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="hotsale">
        <h3>类目热销榜</h3>
        <div class="hot_top">
          <div>
            <div>
              <span>热销榜</span>
              <span class="hot-line"></span>
              <img src="./imgs/zhijin.webp" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        111
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon, Grid, GridItem } from "vant";
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
import Swiper from "../../components/Swiper/Swiper";
//引入头部
import Header from "../../components/Header/Header";
//引入nav
import NavPag from "./nav_pag/NavPag";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    NavPag,
    Swiper
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.extend
  width 100%
  text-align center
  .extendlist
    display flex
    padding 10px
    li
      width 115px
      height 20px
      font-size 13px
      line-height 20px
      img
        width 15px
        height 15px
        vertical-align bottom
        margin-right 5px
.gridnav
  width 100%
.content
  background-color #eee
  .exhibition
    width 100%
    background-color #fff
    .exhibition_top
      width 100%
      height 120px
      background-image url('./imgs/1.gif')
      background-size 100% 100%
    .exhibition_bottom
      width 100%
      background-color #cc3256
      .exhibition_bottom_top
        display flex
        justify-content space-around
        width 100%
        box-sizing border-box
        padding 15px 15px 0 15px
        div
          width 170px
          height 90px
          background-image url('./imgs/2.png')
          background-size 100% 100%
        .exhibition_bottom_right
          background-image url('./imgs/3.png')
      .exhibition_bottom_bottom
        width 100%
        .exhibition_bottom
          width 100%
          display flex
          justify-content space-around
          box-sizing border-box
          padding 5px
          li
            width 118px
            display flex
            flex-direction column
            align-items center
            font-size 15px
            height 105px
            background-image url(./imgs/bg.png)
            background-size 100% 100%
            margin-bottom 10px
            color #cc3256
            p
              margin-top 5px
            img
              width 67px
              height 67px
  .newperson
    width 100%
    margin 10px 0
    background-color #fff
    .newperson_title
      width 100%
      height 43px
      display flex
      font-size 18px
      align-items center
      justify-content center
      p
        margin 0 10px
      span
        width 16px
        height 1px
        background-color #000
    .newPerson_content
      width 100%
      font-size 18px
      display flex
      margin-bottom 10px
      .content_left
        width 165px
        height 243px
        background-color #F9E9CF
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin 0 3px 20px 20px
        p
          margin 0 30px 25px 0
        img
          width 123px
          height 123px
          margin-bottom 20px
      .content_right
        width 164px
        font-size 18px
        .right_top
          width 170px
          height 120px
          background-color #fbe2d3
          display flex
          .text
            width 80px
            display flex
            flex-direction column
            margin-left 10px
            span
              width 70px
              font-size 20px
              margin-top 10px
            .subtitle
              font-size 14px
          img
            width 97px
            height 97px
        .right_bottom
          width 170px
          height 120px
          background-color #feecc2
          display flex
          flex-direction column
          margin-top 3px
          span
            margin 10px 0 0 10px
          .subtitle
            font-size 14px












.two
 height 200px
 background-color #ccc

</style>

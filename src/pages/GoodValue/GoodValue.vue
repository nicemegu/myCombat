<template>
  <div>
    <div class="header">
      <span class="home"><van-icon name="wap-home-o" size="28"/></span>
      <span class="title">值得买</span>
      <div>
        <span>
          <van-icon name="search" size="28" />
        </span>
        <span>
          <van-icon name="shopping-cart-o" size="28" />
        </span>
      </div>
    </div>
    <div class="content">
      <div class="content_top">
        <div class="content_top_title">
          <img src="./imgs/titile.png" alt="" />
          <span>严选好物 用心生活</span>
        </div>
        <!-- 圆形轮播 -->
        <div class="swiper_out">
          <div class="swiper">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(slide, index) in swiperimg"
                  :key="index"
                >
                  <div class="swiper_list">
                    <img :src="slide.picUrl" alt="" />
                    <span class="list_text1">{{ slide.mainTitle }}</span>
                    <span class="list_text2">{{ slide.viceTitle }}</span>
                  </div>
                </div>
              </div>
              <!-- Add Scrollbar -->
              <div class="swiper-scrollbar"></div>
            </div>
            <!-- <ul class="list">
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
            <li>
              <img src="./imgs/1.png" alt="" />
              <span class="list_text1">9.9超值</span>
              <span class="list_text2">定价直降</span>
            </li>
          </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
//引入辅助函数
import { mapState } from "vuex";
export default {
  name: "GoodValue",
  async mounted() {
    await this.$store.dispatch("Getswiperimg");
    this.$nextTick(() => {
      var swiper = new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        slidesPerView: 4, //一个页面上展示多少个
        slidesPerGroup: 1, //每次滑动的距离
        slidesPerColumn: 2, //显示2行
        observeParents: true,//在加载时初始化 父级元素，解决渲染完成后轮播图展示右边的问题
        observer: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true
        }
      });
    });
  },
  computed: {
    ...mapState({
      swiperimg: state => state.goodvalue.swiperimg
    })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  width 100%
  height 45px
.content
  width 100%
  margin-top 45px
  .content_top
    width 100%
    padding-top 35px
    box-sizing border-box
    background-image url('./imgs/bg.png')
    background-size 100% 100%
    .content_top_title
      width 100%
      box-sizing border-box
      padding-left 10px
      span
        font-size 15px
        color #fff
        vertical-align middle
      img
        width 65px
        height 35px
    .swiper_out
      margin 0 auto
      width 93%
      background-color #fff
      border-radius 10px
      overflow hidden
      box-sizing border-box
      padding 10px
      .swiper
        width 100%
        margin-top 0
        .swiper-container
          width 100%
          height 220px
          .swiper-wrapper
            width 200%
            .swiper-slide
              font-size 16px
              width 88px
              height 100px
              .swiper_list
                width 100%
                height 100px
                display flex
                flex-direction column
                justify-content space-between
                align-items center
                padding 20px 0 0 0
                box-sizing border-box
                img
                  width 60px
                  height 60px
                .list_text1
                  font-size 16px
                .list_text2
                  font-size 10px

          .swiper-scrollbar
            margin-left 50%
            transform translateX(-50%)
            width 30%
            height 3px
            .swiper-scrollbar-drag
              width 25%
              height 3px
              background-color #dd1a21
</style>

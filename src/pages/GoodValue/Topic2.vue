<template>
  <div>
    <div class="header">
      <van-row gutter="20">
        <van-col span="7">
          <van-icon name="wap-home-o" size="12" />
        </van-col>
        <van-col span="9" class="right-img">
          <span class="title">值得买</span>
        </van-col>
        <van-col span="8" class="right-icon">
          <van-icon name="search" />
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
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
                <!-- v-for="(item,index) in topicnav.navList" :key="index" -->
                <div class="swiper-slide" v-for="(item1, index1) in navList" :key="index1">
                  <div class="swiper_list" v-for="(item, index) in item1" :key="index">
                    <img :src="item.picUrl" alt="" />
                    <span class="list_text1">{{ item.mainTitle }}</span>
                    <span class="list_text2">{{ item.viceTitle }}</span>
                  </div>
                </div>
              </div>
              <!-- Add Scrollbar -->
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
        </div>
        <!-- 瀑布屏幕 -->
      </div>
      <div class="box">
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
        <div class="item">
          <img src="./imgs/1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
export default {
  name: 'GoodValue',
  data () {
    return {
      navList: []
    }
  },
  computed: {
    ...mapState(['topicnav'])
  },
  watch: {
    topicnav () {
      let index = 0;
      let newArray = [];
      while (index < this.topicnav.navList.length) {
        newArray.push(this.topicnav.navList.slice(index, index += 2));
      }
      console.log(newArray)
      this.navList = newArray;
    },
  },
  mounted () {
    /* eslint-disable */
    this.$nextTick(() => {
      var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        slidesPerView: 4, //一个页面上展示多少个
        slidesPerGroup: 2, //每次滑动的距离,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      })
    })
  },
  updated () {

  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  font-size 30px
  width 100%
  height 1px
  background-color #fff
  margin 15px 0 0 10px
  .right-icon
    padding-left 40px !important
  .right-img
    .title
      font-size 16px
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
      .swiper
        width 100%
        margin-top 0
        .swiper-container
          width 100%
          height 240px
          .swiper-wrapper
            width 200%
            .swiper-slide
              font-size 16px
              width 88px
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
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
  .box
    margin 30px
    column-count 2
    column-gap 30px
    .item
      margin-bottom 10px
      img
        width 100%
        height 100%
</style>

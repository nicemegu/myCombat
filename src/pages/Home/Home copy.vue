<template>
  <div>
    <!-- 搜索头部 -->
    <Header />

    <div class="Nav">
      <van-tabs class="Tabs" @click="changetab">
        <van-tab class="tab" title="推荐"></van-tab>
        <van-tab
          class="tab"
          :title="cate.name"
          :name="cate.id"
          v-for="(cate, index) in cates"
          :key="index"
        ></van-tab>
      </van-tabs>
    </div>
    <!-- 内容组件 -->
    <HomeContent v-if="isShowindex" />
    <!-- nav导航组件 -->
    <Cate v-else :catedata="catedata" />
  </div>
</template>
<script>
//引入头部
import Header from "../../components/Header/Header";
//引入nav
import NavPag from "./nav_pag/NavPag";
import HomeContent from "./HomeContent/HomeContent";
//y
import Cate from "./Cate/Cate";
//引入辅助函数
import { mapState } from "vuex";
import Vue from "vue";
import { Tab, Tabs, Popup } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
export default {
  name: "Home",
  data() {
    return {
      catedata: {},
      isShowindex: true
    };
  },
  methods: {
    changetab(name, title) {
      //判断是显示index
      if (name !== 0) {
        this.isShowindex = false;
      } else {
        this.isShowindex = true;
      }

      let id = name;
      //获取整体数据
      const result = this.cates;
      //循环遍历 得到要传入的对象
      result.forEach(res => {
        //根据id值获取数据
        if (res.id == id) {
          this.catedata = res;
        }
      });

    }
  },
  computed: {
    ...mapState({
      cates: state => state.home.cates
    })
  },
  // data() {
  //   return {
  //     timeData: []
  //   };
  // },
  // mounted() {
  //   this.$store.dispatch("Gethome");
  // },
  // computed: {
  //   ...mapState({
  //     home: state => state.home.homes,
  //     kingKongModule: state => state.home.kingKongModule,
  //     flashSaleModule: state => state.home.flashSaleModule
  //   })
  // },
  components: {
    Header,

    HomeContent,
    Cate
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swiper
  margin-top 90px
  .Nav
  width 100%
  position fixed
  top 45px
  z-index 2
  background-color #fff
  .Tabs
    width 80%
    .tab
      margin-left 30px
// .extend
//   width 100%
//   text-align center
//   .extendlist
//     display flex
//     padding 10px
//     li
//       width 115px
//       height 20px
//       font-size 13px
//       line-height 20px
//       img
//         width 15px
//         height 15px
//         vertical-align bottom
//         margin-right 5px
// .gridnav
//   width 100%
// .content
//   background-color #eee
//   .exhibition
//     width 100%
//     background-color #fff
//     .exhibition_top
//       width 100%
//       height 120px
//       background-image url('./imgs/1.gif')
//       background-size 100% 100%
//     .exhibition_bottom
//       width 100%
//       background-color #cc3256
//       .exhibition_bottom_top
//         display flex
//         justify-content space-around
//         width 100%
//         box-sizing border-box
//         padding 15px 15px 0 15px
//         div
//           width 170px
//           height 90px
//           background-image url('./imgs/2.png')
//           background-size 100% 100%
//         .exhibition_bottom_right
//           background-image url('./imgs/3.png')
//       .exhibition_bottom_bottom
//         width 100%
//         .exhibition_bottom
//           width 100%
//           display flex
//           justify-content space-around
//           box-sizing border-box
//           padding 5px
//           li
//             width 118px
//             display flex
//             flex-direction column
//             align-items center
//             font-size 15px
//             height 105px
//             background-image url(./imgs/bg.png)
//             background-size 100% 100%
//             margin-bottom 10px
//             color #cc3256
//             p
//               margin-top 5px
//             img
//               width 67px
//               height 67px
//   .newperson
//     width 100%
//     margin 10px 0
//     background-color #fff
//     .newperson_title
//       width 100%
//       height 43px
//       display flex
//       font-size 18px
//       align-items center
//       justify-content center
//       p
//         margin 0 10px
//       span
//         width 16px
//         height 1px
//         background-color #000
//     .newPerson_content
//       width 100%
//       font-size 18px
//       display flex
//       margin-bottom 10px
//       .content_left
//         width 165px
//         height 243px
//         background-color #F9E9CF
//         display flex
//         flex-direction column
//         justify-content center
//         align-items center
//         margin 0 3px 20px 20px
//         p
//           margin 0 30px 25px 0
//         img
//           width 123px
//           height 123px
//           margin-bottom 20px
//       .content_right
//         width 164px
//         font-size 18px
//         .right_top
//           width 170px
//           height 120px
//           background-color #fbe2d3
//           display flex
//           .text
//             width 80px
//             display flex
//             flex-direction column
//             margin-left 10px
//             span
//               width 70px
//               font-size 20px
//               margin-top 10px
//             .subtitle
//               font-size 14px
//           img
//             width 97px
//             height 97px
//         .right_bottom
//           width 170px
//           height 120px
//           background-color #feecc2
//           display flex
//           flex-direction column
//           margin-top 3px
//           span
//             margin 10px 0 0 10px
//           .subtitle
//             font-size 14px
//   .hotsale
//     width 100%
//     box-sizing border-box
//     padding 15px
//     background-color #fff
//     h3
//       width 100%
//       height 50px
//       font-size 16px
//       line-height 50px
//     .hot_top
//       width 100%
//       font-size 15px
//       display flex
//       .hot_top_left
//         width 170px
//         display flex
//         background-color #f9f3e4
//         margin 0 5px 5px 0
//         .left_text
//           width 100px
//           display flex
//           flex-direction column
//           justify-content center
//           margin-left 20px
//           .hot-line
//             width 25px
//             height 2px
//             background-color #333
//             margin-top 10px
//             border-radius 2px
//         img
//           width 100px
//           height 100px
//       .hot_top_right
//         width 170px
//         display flex
//         margin 0 5px 5px 0
//         background-color #ebeff6
//         .right_text
//           width 100px
//           display flex
//           flex-direction column
//           justify-content center
//           margin-left 20px
//           .hot-line
//             width 25px
//             height 2px
//             background-color #333
//             margin-top 10px
//             border-radius 2px
//         img
//           width 100px
//           height 100px
//     .host_list
//       width 100%
//       ul
//         display flex
//         flex-wrap wrap
//         justify-content space-between

//         li
//           width 83px
//           height 90px
//           font-size 12px
//           display flex
//           flex-direction column
//           justify-content center
//           align-items center
//           background-color #f5f5f5
//           margin-bottom 5px

//           img
//             width 60px
//             height 60px
//   .timetobuy
//     width 100%
//     background-color #fff
//     .title
//       width 100%
//       height 50px
//       font-size 16px
//       display flex
//       justify-content space-between
//       align-items center
//       padding 0 20px
//       box-sizing border-box
//       .title_left
//         width 50%
//         height 50px
//         display flex
//         align-items center
//         justify-content space-around
//         .item
//           display inline-block
//           width 22px
//           margin-right 5px
//           color #fff
//           font-size 12px
//           text-align center
//           background-color #333
//           border-radius 3px
//       .more
//         float right
//     .timetobuylist
//       width 100%
//       padding 10px
//       box-sizing border-box
//       margin-top 10px
//       .list
//         width 100%
//         display flex
//         flex-wrap wrap
//         justify-content space-around
//         li
//           width 100px
//           height 145px
//           font-size 14px
//           text-align center
//           span
//             margin-right 10px
//             color #dd1a21
//           img
//             width 105px
//             height 105px
//             background-color #f5f5f5
//           .list_discount
//             font-size 10px
//             text-decoration line-through
//             color #ababab
//   .newproduct
//     width 100%
//     background-color #fff
//     margin-top 10px
//     .title
//       width 100%
//       font-size 16px
//       padding 20px
//       box-sizing border-box
//       display flex
//       justify-content space-between
//     .newproductlist
//       width 100%
//       .list
//         width 100%
//         display flex
//         flex-wrap wrap
//         justify-content space-around
//         li
//           width 105px
//           height 190px
//           display flex
//           flex-direction column
//           font-size 14px
//           .introduce
//             width 100%
//             height 40px
//             text-overflow ellipsis
//             font-size 12px
//           .price
//             color #dd1a21
//             font-size 18px
//           .btn
//             width 50px
//             height 13px
//             border 1px solid #dd1a21
//             border-radius 8px
//             font-size 11px
//             line-height 13px
//             text-align center
//             color #dd1a21
//             margin-top 3px
//           img
//             width 110px
//             height 110px
//             background-color #f5f5f5
//   .bottomnav
//     width 100%
//     background-color #fff
//     margin-top 10px
//     .list
//       width 100%
//       display flex
//       flex-wrap wrap
//       justify-content space-around
//       box-sizing border-box
//       padding  15px
//       li
//         width 170px
//         height 130px
//         display flex
//         flex-direction column
//         font-size 16px
//         background-color #f5f5f5
//         margin-bottom 5px
//         .list_top1
//           font-size 18px
//           margin 15px 0 0 15px
//         .list_top2
//           font-size 14px
//           margin 5px 0 0 15px
//         .list_img
//           width 100%
//           display flex
//           justify-content space-between
//           img
//             width 75px
//             height 75px
//   .bottom
//     width 100%
//     height 125px
//     background-color #414141
//     font-size 16px
//     margin-top 10px
//     box-sizing border-box
//     padding 26px 10px 15px
//     .btn
//       width 100%
//       display flex
//       justify-content center
//       span
//         width 85px
//         height 30px
//         text-align center
//         line-height 30px
//         border 1px solid #fff
//         color #fff
//       .down
//         margin-right 25px
//     .text
//       margin-top 25px
//       font-size 12px
//       color #999
//       text-align center
//       p
//         margin-top 5px








// .clear
// height 50px
</style>

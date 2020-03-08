<template>
<div class="Nav">
 <van-tabs class="Tabs">
    <van-tab class="tab" title="推荐"></van-tab>
    <van-tab class="tab" title="居家生活"></van-tab>
    <van-tab class="tab" title="服饰鞋包"></van-tab>
    <van-tab class="tab" title="美食酒水"></van-tab>
    <van-tab class="tab" title="个人清洁"></van-tab>
    <van-tab class="tab" title="母婴亲子"></van-tab>
    <van-tab class="tab" title="运动旅行"></van-tab>
    <van-tab class="tab" title="数码家电"></van-tab>
    <van-tab class="tab" title="全球特色"></van-tab>
  </van-tabs>

</div>
 
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs ,Popup} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
export default {};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.Nav
  width 100%
  .Tabs
    width 80%
    .tab
      margin-left 30px
</style>
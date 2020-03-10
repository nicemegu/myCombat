<template>
  <div class="out">
    <router-view />
    <Tabbar1 v-show="$route.meta.isShowTabbar" />
  </div>
</template>
<script>
import { reqSoltright } from "./api/index";
//引入底部导航栏组件
import Tabbar1 from "./components/Tabbar/Tabbar1";
//引入适配文件  适配成功
import "../tools/fit";
export default {
  name: "App",
  //注册组件
  components: {
    Tabbar1
  },
  async mounted() {
    const result = await reqSoltright();
    console.log(result);
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>

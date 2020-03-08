<template>
  <div class="out">
    <router-view />
    <Tabbar1 />
  </div>
</template>
<script>
//引入底部导航栏组件
import Tabbar1 from './components/Tabbar/Tabbar1'
//引入适配文件  适配成功
import '../tools/fit'
export default {
  name: 'App',
  //注册组件
  components: {
    Tabbar1
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'></style>
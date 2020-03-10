<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        
      />
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Toast } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>

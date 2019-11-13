<template>
  <div id="app">
    <HeaderRoute ref='header' :getCheckList='checkList' @changeList='changeCheckList'></HeaderRoute>
    <keep-alive include="home">
      <router-view ref='items' :getCheckList='checkList' @changeList='changeCheckList' />
    </keep-alive>
  </div>
</template>

<script>
import HeaderRoute from "./components/mainRoute";
export default {
  data() {
    return {
      checkList: [0, 0] //好题精选的题目下标
    };
  },
  methods: {
    changeCheckList(arr) {
      this.checkList = arr;
    }
  },
  components: {
    HeaderRoute
  }
};
</script>

<style lang="stylus"></style>

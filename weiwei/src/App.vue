<template>
  <div id="app">
    <HeaderRoute></HeaderRoute>
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HeaderRoute from "./components/mainRoute";
export default {
  components: {
    HeaderRoute
  }
};
</script>

<style lang="stylus"></style>

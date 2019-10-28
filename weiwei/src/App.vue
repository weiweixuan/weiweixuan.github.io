<template>
  <div id="app">
    <HeaderRoute></HeaderRoute>
    <router-view />
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

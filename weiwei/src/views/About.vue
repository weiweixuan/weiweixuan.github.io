<template>
  <div class="advanced">
    <h1>This is an about page</h1>
    <van-rate v-model="count" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 3
    };
  }
};
</script>

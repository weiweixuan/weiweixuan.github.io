<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
      />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

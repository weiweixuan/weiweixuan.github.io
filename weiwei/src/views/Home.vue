<template>
  <div class="home">
    <!-- 大图 -->
    <div class="banner">
      <!-- <van-image style="maxWidth:600px" width="80%" src="http://vmcshopmall-nanjing.oss-cn-beijing.aliyuncs.com/frontend-picture/1572359653430.gif" /> -->
      <img class="avator" style="maxWidth:600px" width="80%" src="../assets/main.gif" />
    </div>
    <div class="title">roduers前端进阶</div>
    <div class="subTitle">高级前端进阶之路</div>
    <div>
      <van-button type="primary" color="#3EAF7C" class="btn" to="/Advanced">Get Started</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="stylus">
@media screen and (min-width: 1050px) {
  .home {
    text-align: center;
    transform: translateY(80px);
    font-size: 30px;
    transition: all linear 1s;

    .title {
      font-weight: 700;
      font-size: 48px;
      margin-top: 29px;
    }

    .subTitle {
      font-size: 28px;
      margin-top: 29px;
      color: #6A8BAD;
    }

    .btn {
      border-radius: 5px;
      margin-top: 29px;
    }
  }
}

@media screen and (max-width: 1050px) {
  .home {
    text-align: center;
    transform: translateY(30px);
    transition: all linear 1s;
    font-size: 30px;

    .title {
      font-weight: 700;
      font-size: 30px;
      margin-top: 29px;
    }

    .subTitle {
      font-size: 20px;
      margin-top: 29px;
      color: #6A8BAD;
    }

    .btn {
      border-radius: 5px;
      margin-top: 29px;
    }
  }
}
</style>
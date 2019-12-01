<template>
  <div class="home">
    <div class="top">
      <!-- 大图 -->
      <div class="banner">
        <img
          class="avator"
          style="maxWidth:6rem"
          width="60%"
          src="../assets/main.gif"
        />
      </div>
      <div class="title">{{ home.title }}</div>
      <div class="subTitle">{{ home.subTitle }}</div>
      <div>
        <van-button type="primary" color="#3EAF7C" class="btn" @click="skip">{{
          home.btn
        }}</van-button>
      </div>
      <!-- 底部展示部分 -->
      <div class="bottomList">
        <div class="item" v-for="(item, index) in home.showList" :key="index">
          <div class="titles">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <!-- 页脚商标 -->
    <div class="copyRight">
      {{ home.copyright }}
    </div>
  </div>
</template>

<script>
import { CHANGE_NAVBAR } from "../store/mutation-types/navbar";
import { mapState } from "vuex";
export default {
  name: "home",
  computed: { ...mapState(["home"]) },
  methods: {
    skip() {
      this.$store.commit(CHANGE_NAVBAR, 1);
      this.$router.push("/Advanced");
    }
  },
  mounted() {
    console.log(this.home, "home");
  }
  // activated() {
  //   console.log("组件被缓存了");
  // },
  // deactivated() {
  //   console.log("组件取消缓存了");
  // }
};
</script>

<style lang="stylus">
@media screen and (min-width: 1050px) {
  .home {
    margin-top: .74rem;
    min-height: calc(100vh - .74rem);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: .20rem;
      text-align: center;
      font-size: .16rem;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: .80rem;
    font-size: .30rem;
    transition: all linear 1s;

    .title {
      font-weight: 700;
      font-size: .48rem;
      margin-top: .29rem;
    }

    .subTitle {
      font-size: .28rem;
      margin-top: .29rem;
      color: #6A8BAD;
    }

     .btn {
      width:1.5rem;
      height :.42rem;
      font-size :.16rem;
      border-radius: 5rem;
      margin-top: .29rem;
      line-height :.42rem;
    }
  }

  .bottomList {
    width: 80%;
    max-width: 10rem;
    height: auto;
    margin: .40rem auto 0;
    padding: .10rem 0;
    display: flex;
    border-top: .01rem solid #eaecef;
    border-bottom: .01rem solid #eaecef;

    .item {
      flex: 1;
      padding: .20rem .30rem;

      .titles {
        font-size: .22rem;
        margin-bottom: .10rem;
      }

      .content {
        font-size: .16rem;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1050px) {
  .home {
    margin-top: .74rem;
    min-height: calc(100vh - .74rem);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: .20rem;
      text-align: center;
      font-size: .16rem;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: .50rem;
    transition: all linear 1s;
    font-size: .30rem;

    .title {
      font-weight: 700;
      font-size: .30rem;
      margin-top: .29rem;
    }

    .subTitle {
      font-size: .20rem;
      margin-top: .29rem;
      color: #6A8BAD;
    }

     .btn {
      width:1.5rem;
      height :.42rem;
      font-size :.16rem;
      border-radius: 5rem;
      margin-top: .29rem;
      line-height :.42rem;
    }
  }

  .bottomList {
    width: 80%;
    max-width: 10rem;
    height: auto;
    margin: .40rem auto 0;
    padding: .10rem 0;
    display: flex;
    border-top: .01rem solid #eaecef;
    border-bottom: .01rem solid #eaecef;

    .item {
      flex: 1;
      padding: .20rem .30rem;

      .titles {
        font-size: .22rem;
        margin-bottom: .10rem;
      }

      .content {
        font-size: .16rem;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    margin-top: .74rem;
    min-height: calc(100vh - .74rem);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: .20rem;
      text-align: center;
      font-size: .12rem;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: .80rem;
    transition: all linear 1s;
    font-size: .30rem;

    .title {
      font-weight: 700;
      font-size: .30rem;
      margin-top: .29rem;
    }

    .subTitle {
      font-size: .20rem;
      margin-top: .29rem;
      color: #6A8BAD;
    }

    .btn {
      width:1.5rem;
      height :.42rem;
      font-size :.16rem;
      border-radius: 5rem;
      margin-top: .29rem;
      line-height :.42rem;
    }
  }

  .bottomList {
    width: 80%;
    height: auto;
    min-width: 3.60rem;
    margin: .20rem auto 0;
    padding: .10rem 0;
    flex-direction: columns;
    border-top: .01rem solid #eaecef;
    border-bottom: .01rem solid #eaecef;

    .item {
      padding: .10rem .30rem;

      .titles {
        font-size: .20rem;
        margin-bottom: .05rem;
        text-align: left;
      }

      .content {
        font-size: .16rem;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}
</style>

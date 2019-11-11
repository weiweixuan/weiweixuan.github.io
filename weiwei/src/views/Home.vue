<template>
  <div class="home">
    <div class="top">
      <!-- 大图 -->
      <div class="banner">
        <img class="avator" style="maxWidth:600px" width="60%" src="../assets/main.gif" />
      </div>
      <div class="title">{{home.title}}</div>
      <div class="subTitle">{{home.subTitle}}</div>
      <div>
        <van-button type="primary" color="#3EAF7C" class="btn" @click="skip">{{home.btn}}</van-button>
      </div>
      <!-- 底部展示部分 -->
      <div class="bottomList">
        <div class="item" v-for='(item,index) in home.showList' :key='index'>
          <div class="titles">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
    <!-- 页脚商标 -->
    <div class="copyRight">
      {{home.copyright}}
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
    margin-top: 74px;
    min-height: calc(100vh - 74px);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: 20px;
      text-align: center;
      font-size: 16px;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: 80px;
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

  .bottomList {
    width: 80%;
    max-width: 1000px;
    height: auto;
    margin: 40px auto 0;
    padding: 10px 0;
    display: flex;
    border-top: 1px solid #eaecef;
    border-bottom: 1px solid #eaecef;

    .item {
      flex: 1;
      padding: 20px 30px;

      .titles {
        font-size: 22px;
        margin-bottom: 10px;
      }

      .content {
        font-size: 16px;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1050px) {
  .home {
    margin-top: 74px;
    min-height: calc(100vh - 74px);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: 20px;
      text-align: center;
      font-size: 16px;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: 30px;
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

  .bottomList {
    width: 80%;
    max-width: 1000px;
    height: auto;
    margin: 40px auto 0;
    padding: 10px 0;
    display: flex;
    border-top: 1px solid #eaecef;
    border-bottom: 1px solid #eaecef;

    .item {
      flex: 1;
      padding: 20px 30px;

      .titles {
        font-size: 22px;
        margin-bottom: 10px;
      }

      .content {
        font-size: 16px;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    margin-top: 74px;
    min-height: calc(100vh - 74px);
    display: flex;
    flex-direction: column;

    .copyRight {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #4e6e8e;
    }
  }

  .top {
    flex: 1;
    text-align: center;
    padding-top: 30px;
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

  .bottomList {
    width: 80%;
    height: auto;
    min-width: 360px;
    margin: 20px auto 0;
    padding: 10px 0;
    flex-direction: columns;
    border-top: 1px solid #eaecef;
    border-bottom: 1px solid #eaecef;

    .item {
      padding: 10px 30px;

      .titles {
        font-size: 20px;
        margin-bottom: 5px;
        text-align: left;
      }

      .content {
        font-size: 16px;
        color: #4E6E8E;
        text-align: left;
      }
    }
  }
}
</style>
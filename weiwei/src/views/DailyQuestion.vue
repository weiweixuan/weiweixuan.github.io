<template>
  <div class="DailyQuestion">
    <!-- 左中右结构 -->
    <div class="left">
      <van-collapse v-model="activeName" accordion>

        <van-collapse-item v-for="(item,keys) in dailyQuestion.leftList" :key='keys' :title="item.title" :name="keys">
          <!-- 子内容遍历 -->
          <div v-for="(child,childKey) in item.list" :key='childKey' :class="{active:keys === checkKey[0] && childKey === checkKey[1],items:true}" @click="handleChange(keys,childKey)">
            {{child.subTitle}}
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="center">
      <div>
        {{content.subTitle}}
      </div>
      <div class="showContent" v-highlight v-for='(item ,keys) in content.answer' :key='keys' v-html="item.code || item.analysis"></div>
      <div>
      </div>

    </div>
    <div class="right">
      <div class="item" v-for=" (item ,keys) in dailyQuestion.rightNotice" :key='keys'>
        <span class="title">{{item.title}}</span>
        <span class="subTitle">{{item.subTitle}}</span>
        <img src="../assets/wx.jpg" class="imgEwm" alt="">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "DailyQuestion",
  data() {
    return {
      activeName: 0,
      checkKey: [0, 0],
      content: {}
    };
  },
  computed: { ...mapState(["dailyQuestion"]) },
  mounted() {
    console.log(this.dailyQuestion, "博文精选");
    this.getContent();
  },
  methods: {
    handleChange(key1, key2) {
      this.checkKey = [key1, key2];
      this.getContent();
    },
    getContent() {
      this.content = this.dailyQuestion.leftList[this.checkKey[0]].list[
        this.checkKey[1]
      ];
    }
  }
};
</script>

<style lang="stylus">
.DailyQuestion {
  display: flex;
  margin-top: 74px;

  .left {
    width: 300px;
    position: fixed;
    top: 75px;
    left: 0;
    height: calc(100vh - 74px);
    border-right: 1px solid #DDE4EC;
    overflow-y: auto;
  }

  .center {
    width: 60%;
    height: 190vh;
    margin: 0 250px 0 300px;
  }

  .right {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 75px;
    right: 0;

    .item {
      margin-top: 50px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        color: #2878FF;
        margin-bottom: 10px;
      }

      .subTitle {
        margin-bottom: 16px;
      }

      .imgEwm {
        width: 150px;
        height: 150px;
      }
    }
  }

  .active {
    color: #3EAF7C;
  }

  .items {
    cursor: pointer;
    transition: all linear 0.25s;

    &:hover {
      transform: translateX(5px);
    }
  }

  .showContent {
    border-radius: 10px;
    font-size: 20px;
  }
}
</style>
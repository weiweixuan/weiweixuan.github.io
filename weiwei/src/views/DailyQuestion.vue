<template>
  <div class="DailyQuestion">
    <!-- 左中右结构 -->
    <div class="left">
      <van-collapse v-model="index" accordion>
        <van-collapse-item style="paddingLeft:10px" v-for="(item,keys) in dailyQuestion.leftList" :key='keys' :title="item.title" :name="keys">
          <!-- 子内容遍历 -->
          <div v-for="(child,childKey) in item.list" :key='childKey' :class="{active:keys === getCheckList[0] && childKey === getCheckList[1],items:true}" @click="handleChange([keys,childKey])">
            {{child.subTitle}}
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <!-- 内容区 -->
    <div class="center">
      <div class="contentTitle">
        {{content.subTitle}}
      </div>
      <div v-for='(item ,keys) in content.answer' :key='keys'>
        <!-- 提示文字 -->
        <div v-if='item.analysis' class="analysis">
          <div class="showInfo">
            <van-icon name="fire" class="sm_title" />
            <span style="marginLeft:6px">小提示</span>
          </div>
          <mavon-editor class="md code" :value="item.analysis" :subfield="false" :defaultOpen="'preview'" :boxShadow='true' :previewBackground='"#fff"' :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true"></mavon-editor>
        </div>
        <!-- 上代码 -->
        <div v-if='item.code'>
          <div class="showInfo">
            <van-icon name="comment" class="sm_title" />
            <span style="marginLeft:6px">上代码</span>
          </div>
          {{item.analysis}}
          <mavon-editor class="md code" :value="complateCode(item.code)" :subfield="false" :defaultOpen="'preview'" :boxShadow='true' :previewBackground='"#fff"' :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true"></mavon-editor>
        </div>
      </div>
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
      index: 0,
      content: {}
    };
  },
  props: ["getCheckList"],

  computed: {
    ...mapState(["dailyQuestion"])
  },
  mounted() {
    this.getContent();
    console.log(this, "thid");
  },
  methods: {
    handleChange(arr) {
      this.$emit("changeList", arr);
      // 显示右侧文章内容
      this.getContent(arr);
    },
    getContent([key1, key2] = [0, 0]) {
      console.log(key1, key2, "iii");
      this.content = this.dailyQuestion.leftList[key1].list[key2];
    },
    complateCode(code) {
      return `\`\`\`javascript
       ${code}
       `;
    },
    changeIndex(i) {
      this.index = i;
    }
  }
};
</script>

<style lang="stylus">
@media screen and (min-width: 1050px) {
  .DailyQuestion {
    display: flex;
    margin-top: 74px;

    .left {
      width: 300px;
      position: fixed;
      top: 75px;
      left: 0;
      height: calc(100vh - 74px);
      border-right: 1px solid #eee;
      overflow-y: auto;
    }

    .center {
      width: calc(100% - 550px);
      margin-left: 300px;
      padding-left: 10px;

      .contentTitle {
        padding: 20px 20px 10px 20px;
        font-weight: 700;
        font-size: 26px;

        &:before {
          content: '';
          padding: 0 3px;
          background: #3eaf7c;
          margin-right: 10px;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #3eaf7c;
        padding: 20px;

        .sm_title {
          color: '#3eaf7c';
          font-size: 24px;
        }
      }

      .code {
        font-size: 20px;
      }
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
      font-size: 14px;
      padding: 3px 0;
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
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .DailyQuestion {
    display: flex;
    margin-top: 74px;

    .left {
      width: 250px;
      position: fixed;
      top: 75px;
      left: 0;
      height: calc(100vh - 74px);
      border-right: 1px solid #eee;
      overflow-y: auto;
    }

    .center {
      width: calc(100% - 250px);
      margin-left: 250px;
      padding-left: 10px;

      .contentTitle {
        padding: 20px 20px 10px 20px;
        font-weight: 700;
        font-size: 26px;

        &:before {
          content: '';
          padding: 0 3px;
          background: #3eaf7c;
          margin-right: 10px;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #3eaf7c;
        padding: 20px;

        .sm_title {
          color: '#3eaf7c';
          font-size: 24px;
        }
      }

      .code {
        font-size: 20px;
      }
    }

    .right {
      display: none;
    }

    .active {
      color: #3EAF7C;
    }

    .items {
      cursor: pointer;
      font-size: 14px;
      padding: 3px 0;
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
}

@media screen and (max-width: 768px) {
  .DailyQuestion {
    display: flex;
    margin-top: 74px;

    .left {
      display: none;
    }

    .center {
      width: 100%;

      .contentTitle {
        padding: 20px 20px 10px 20px;
        font-weight: 700;
        font-size: 20px;

        &:before {
          content: '';
          padding: 0 3px;
          background: #3eaf7c;
          margin-right: 10px;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #3eaf7c;
        padding: 20px;

        .sm_title {
          color: '#3eaf7c';
          font-size: 16px;
        }
      }

      .code {
        font-size: 16px;
      }
    }

    .right {
      display: none;
    }

    .active {
      color: #3EAF7C;
    }

    .items {
      cursor: pointer;
      padding: 3px 0;
      font-size: 14px;
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
}
</style>
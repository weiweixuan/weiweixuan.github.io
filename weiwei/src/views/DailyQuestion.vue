<template>
  <div class="DailyQuestion">
    <!-- 左中右结构 -->
    <div class="left">
      <van-collapse v-model="index" accordion>
        <van-collapse-item
          style="paddingLeft:.10rem"
          v-for="(item, keys) in dailyQuestion.leftList"
          :key="keys"
          :title="item.title"
          :name="keys"
        >
          <!-- 子内容遍历 -->
          <div
            v-for="(child, childKey) in item.list"
            :key="childKey"
            :class="{
              active: keys === getCheckList[0] && childKey === getCheckList[1],
              items: true
            }"
            @click="handleChange([keys, childKey])"
          >
            {{ child.subTitle }}
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <!-- 内容区 -->
    <div class="center">
      <div class="contentTitle">
        {{ content.subTitle }}
      </div>
      <div v-if="content.explanation" class="explanation">
        {{ content.explanation }}
      </div>
      <div v-for="(item, keys) in content.answer" :key="keys">
        <!-- 提示文字 -->
        <div v-if="item.analysis" class="analysis">
          <div class="showInfo">
            <van-icon name="fire" class="sm_title" />
            <span style="marginLeft:.06rem">小提示</span>
          </div>
          <mavon-editor
            class="md code"
            :value="item.analysis"
            :subfield="false"
            :defaultOpen="'preview'"
            :boxShadow="true"
            :previewBackground="'#fff'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
          ></mavon-editor>
        </div>
        <!-- 上代码 -->
        <div v-if="item.code">
          <div class="showInfo">
            <van-icon name="comment" class="sm_title" />
            <span style="marginLeft:.06rem">上代码</span>
          </div>
          {{ item.analysis }}
          <mavon-editor
            class="md code"
            :value="complateCode(item.code)"
            :subfield="false"
            :defaultOpen="'preview'"
            :boxShadow="true"
            :previewBackground="'#fff'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
          ></mavon-editor>
        </div>
      </div>
      <div></div>
    </div>
    <div class="right">
      <div
        class="item"
        v-for="(item, keys) in dailyQuestion.rightNotice"
        :key="keys"
      >
        <span class="title">{{ item.title }}</span>
        <span class="subTitle">{{ item.subTitle }}</span>
        <img src="../assets/wx.jpg" class="imgEwm" alt="" />
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
    margin-top: .74rem;

    .left {
      width: 3rem;
      position: fixed;
      top: .75rem;
      left: 0;
      height: calc(100vh - .74rem);
      border-right: .01rem solid #eee;
      overflow-y: auto;
    }

    .center {
      width: calc(100% - 5.50rem);
      margin-left: 3rem;
      padding-left: .10rem;

      .contentTitle {
        padding: .20rem .20rem .10rem .20rem;
        font-weight: 700;
        font-size: .26rem;

        &:before {
          content: '';
          padding: 0 .03rem;
          background: #3eaf7c;
          margin-right: .10rem;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: .18rem;
        color: #3eaf7c;
        padding: .20rem;

        .sm_title {
          color: '#3eaf7c';
          font-size: .24rem;
        }
      }

      .code {
        font-size: .20rem;
      }

      .explanation {
        padding: 0 .20rem;
        font-size: .20rem;
        &:before {
          content: '补充解释：';
          display: inline-block;
        }
      }
    }

    .right {
      width: 2.50rem;
      height: 100vh;
      position: fixed;
      top: .75rem;
      right: 0;

      .item {
        margin-top: .50rem;
        font-size: .14rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          color: #2878FF;
          margin-bottom: .10rem;
        }

        .subTitle {
          margin-bottom: .16rem;
        }

        .imgEwm {
          width: 1.50rem;
          height: 1.50rem;
        }
      }
    }

    .active {
      color: #3EAF7C;
    }

    .items {
      cursor: pointer;
      font-size: .14rem;
      padding: .03rem 0;
      transition: all linear 0.25s;

      &:hover {
        transform: translateX(.05rem);
      }
    }

    .showContent {
      border-radius: .10rem;
      font-size: .20rem;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1200px) {
  .DailyQuestion {
    display: flex;
    margin-top: .74rem;

    .left {
      width: 2.50rem;
      position: fixed;
      top: .75rem;
      left: 0;
      height: calc(100vh - .74rem);
      border-right: .01rem solid #eee;
      overflow-y: auto;
    }

    .center {
      width: calc(100% - 2.50rem);
      margin-left: 2.50rem;
      padding-left: .10rem;

      .contentTitle {
        padding: .20rem .20rem .10rem .20rem;
        font-weight: 700;
        font-size: .26rem;

        &:before {
          content: '';
          padding: 0 .03rem;
          background: #3eaf7c;
          margin-right: .10rem;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: .20rem;
        color: #3eaf7c;
        padding: .20rem;

        .sm_title {
          color: '#3eaf7c';
          font-size: .24rem;
        }
      }

      .code {
        font-size: .20rem;
      }

      .explanation {
        padding: 0 .20rem;
        font-size: .20rem;
        &:before {
          content: '补充解释：';
          display: inline-block;
        }
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
      font-size: .14rem;
      padding: .03rem 0;
      transition: all linear 0.25s;

      &:hover {
        transform: translateX(.05rem);
      }
    }

    .showContent {
      border-radius: .10rem;
      font-size: .20rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .DailyQuestion {
    display: flex;
    margin-top: .74rem;

    .left {
      display: none;
    }

    .center {
      width: 100%;

      .contentTitle {
        padding: .20rem .20rem .10rem .20rem;
        font-weight: 700;
        font-size: .20rem;

        &:before {
          content: '';
          padding: 0 .03rem;
          background: #3eaf7c;
          margin-right: .10rem;
        }
      }

      .showInfo {
        display: flex;
        align-items: center;
        font-size: .16rem;
        color: #3eaf7c;
        padding: .20rem;

        .sm_title {
          color: '#3eaf7c';
          font-size: .16rem;
        }
      }

      .code {
        font-size: .20rem;
      }

      .explanation {
        padding: 0 .20rem;
        font-size: .20rem;
        &:before {
          content: '补充解释：';
          display: inline-block;
        }
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
      padding: .03rem 0;
      font-size: .14rem;
      transition: all linear 0.25s;

      &:hover {
        transform: translateX(.05rem);
      }
    }

    .showContent {
      border-radius: .10rem;
      font-size: .20rem;
    }
  }
}
</style>

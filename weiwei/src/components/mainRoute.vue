<!-- 路由配置 -->
<template>
  <div>
    <div class="nav">
      <div class="left">
        <!-- 头像 -->
        <img class="avator" src="../assets/avator.png" />
        <!-- 汉堡包分类 -->
        <van-icon name="bars" @click="handleChangeNavbar()" size="26px" class="bars" />
        <span>rodgers 博客</span>
      </div>
      <div class="right">
        <van-search class="input" v-model="value" placeholder="请输入关键词" show-action shape="round" @search="onSearch()">
          <div slot="action" @click="onSearch()">搜索</div>
        </van-search>
        <!-- 全屏显示navbar -->
        <div class="items">
          <router-link :to="item.path" :class="{ item: true, underline: item.checked }" v-for="(item, keys) in navbar || []" :key="item.title">
            <span @click="handlechageItem(keys)">{{
              item.title
            }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 左侧抽屉 -->
    <van-popup v-model="show" position="left" :style="{ width: '60%', height: '100%' }">
      <div class="navbar" @click="handleChangeNavbar()">
        <div class="NavItem" v-for="(item, keys) in navbar" :key="item.title">
          <router-link :to="item.path" :class="{ item: true, underline: item.checked }"><span @click="handlechageItem(keys)">{{
              item.title
            }}</span></router-link>
        </div>
      </div>
      <!-- 好题精选部分 -->
      <div class="questionList" v-if='this.$route.path === "/DailyQuestion"'>
        <van-collapse v-model="index" accordion>
          <van-collapse-item style="paddingLeft:10px" v-for="(item,keys) in dailyQuestion.leftList" :key='keys' :title="item.title" :name="keys">
            <div v-for="(child,childKey) in item.list" :key='childKey' :class="{active:keys === getCheckList[0] && childKey === getCheckList[1],items_question:true}" @click="handleChange([keys,childKey])">
              {{child.subTitle}}
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </van-popup>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState } from "vuex";
import { CHANGE_NAVBAR } from "../store/mutation-types/navbar";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      value: "",
      show: false,
      index: 0
    };
  },
  props: ["getCheckList"],
  //监听属性 类似于data概念
  computed: { ...mapState(["navbar"]), ...mapState(["dailyQuestion"]) },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSearch() {
      console.log("搜索");
    },
    handleChangeNavbar() {
      this.show = !this.show;
      this.index = this.$parent.$refs.items.index;
    },
    handlechageItem(key) {
      // 个人GitHub单独处理
      if (key === this.navbar.length - 1) {
        // window.open("https://github.com/weiweixuan", "_blank");
        location.href = "https://github.com/weiweixuan";
        return;
      }
      this.$store.commit(CHANGE_NAVBAR, key);
    },
    // 刷新后，根据pathName配置路由
    reflash() {
      let pathName = location.pathname,
        index = 0;
      if (pathName != "/") {
        index = this.navbar.findIndex(
          item => item.path != "/" && pathName.indexOf(item.path) > -1
        );
        index = index > -1 ? index : 0;
      }
      this.handlechageItem(index);
    },
    handleChange(arr) {
      this.$emit("changeList", arr);
      this.$parent.$refs.items.getContent(arr);
      this.$parent.$refs.items.changeIndex(this.index);
      // 关闭弹窗
      this.show = !this.show;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.dailyQuestion, this.$route.path, "000000000000");

    // console.log(this.$store.state.navbar, this.navbar, "99999999999999");
    this.reflash();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  befopxount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang='stylus'>
@media screen and (min-width: 1050px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 74px;
    width: 100%;
    z-index: 2000;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 24px;
      display: flex;
      align-items: center;

      .bars {
        display: none;
      }

      .avator {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .input {
        margin-right: 20px;
      }
    }
  }

  .navbar {
    display: none;
  }

  .items {
    .item {
      margin: 0 10px;
      border-bottom: 2px solid transparent;
      text-decoration: none;
      color: #000;
    }

    .item:hover {
      border-bottom: 2px solid skyblue;
    }

    .item.underline {
      border-bottom: 2px solid skyblue;
    }
  }
}

@media screen and (max-width: 1050px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 74px;
    width: 100%;
    z-index: 2000;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 20px;
      display: flex;
      align-items: center;

      .bars {
        transform: translateY(2px);
        margin-right: 10px;
      }

      .avator {
        display: none;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .input {
        width: 180px;
      }
    }
  }

  .items {
    display: none;
  }

  .navbar {
    display: block;

    .NavItem {
      padding: 10px;

      .item {
        margin: 0 10px;
        border-bottom: 2px solid transparent;
        text-decoration: none;
        color: #000;
      }

      .item.underline {
        border-bottom: 2px solid skyblue;
      }
    }
  }

  .questionList {
    margin-top: 10px;
    border-top: 10px solid #3eaf7c;

    .active {
      color: #3EAF7C;
    }

    .items_question {
      font-size: 14px;
      padding: 3px 0;
      cursor: pointer;
      transition: all linear 0.25s;

      &:hover {
        transform: translateX(5px);
      }
    }
  }
}
</style>
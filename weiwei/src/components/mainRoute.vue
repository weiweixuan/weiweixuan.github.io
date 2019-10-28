<!-- 路由配置 -->
<template>
  <div>
    <div class="nav">
      <!-- <router-link to="/">111</router-link> |
    <router-link to="/about">About</router-link> -->
      <div class="left">
        <img class="avator" src="../assets/avator.png" />
        <van-icon
          name="bars"
          @click="handleChangeNavbar()"
          size="26px"
          class="bars"
        />
        <span>rodgers 博客</span>
      </div>
      <div class="right">
        <van-search
          class="input"
          v-model="value"
          placeholder="请输入关键词"
          show-action
          shape="round"
          @search="onSearch()"
        >
          <div slot="action" @click="onSearch()">搜索</div>
        </van-search>
        <div class="items">
          <router-link
            :to="item.path"
            :class="{ item: true, underline: item.checked }"
            v-for="item in tabList"
            :key="item.title"
            >{{ item.title }}</router-link
          >
        </div>
      </div>
    </div>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    >
      <div class="navbar" @click="handleChangeNavbar()">
        <div class="NavItem" v-for="item in tabList" :key="item.title">
          <router-link
            :to="item.path"
            :class="{ item: true, underline: item.checked }"
            >{{ item.title }}</router-link
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      value: "",
      show: true,
      tabList: [
        { title: "home", path: "/", checked: true },
        { title: "进阶博文", path: "/Advanced", checked: false },
        { title: "每日壹题", path: "/DailyQuestion", checked: false },
        { title: "慧思泉涌", path: "/Wisdom", checked: false },
        { title: "求职内推", path: "/Job", checked: false },
        { title: "Github", path: "/", checked: false }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSearch() {
      console.log("搜索");
    },
    handleChangeNavbar() {
      this.show = !this.show;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
        width: 50px;
        height: 50px;
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
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 320px;

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
    }
  }
}
</style>
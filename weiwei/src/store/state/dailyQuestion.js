import jsQuestion from "./question/jsQuestion/index";
import cssQuestion from "./question/cssQuestion/index";
import asyncQuestion from "./question/asyncQuestion/index";
import networkQuestion from "./question/networkQuestion/index";
import browerQuestion from "./question/browerQuestion/index";
import frameQuestion from "./question/frameQuestion/index";
import programQuestion from "./question/programQuestion/index";
export default {
  leftList: [
    { title: "JS基础", list: jsQuestion },
    { title: "CSS", list: cssQuestion },
    { title: "异步", list: asyncQuestion },
    { title: "网络", list: networkQuestion },
    { title: "浏览器", list: browerQuestion },
    { title: "框架篇", list: frameQuestion },
    { title: "编程题", list: programQuestion }
  ],
  rightNotice: [
    {
      title: "添加作者微信号",
      subTitle: "可以交流心得和讨论问题",
      src: "../assets/wx.jpg"
    }
  ]
};

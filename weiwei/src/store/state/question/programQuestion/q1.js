export default {
  subTitle: "如何实现一个sleep函数? ",
  explanation:
    "比如 sleep(1000,fn) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现",
  answer: [
    {
      analysis: `#### 我们分为以下几个方面去实现
    延迟执行我们可以使用setTimeout，
    友好的调用我们就不用传参回调的方式了，
    可以用promise封装一下，直接then方法回调即可，
    如果用then还觉得不友好，那可以放在async函数里调用
          `
    },
    {
      code: `
  function sleep2(timer){
      return new Promise(resolve=>{
          setTimeout(resolve,timer);
      });
  }
  sleep2(2000).then(res=>{
      console.log("do some things 2");
  });

  async function sleep3(timer){
      await new Promise(resovle=>{
          setTimeout(resovle,timer);
      });
      console.log("do some things 3");
  }
  sleep3(3000);

  function * sleep4(timer){
      yield new Promise(resolve=>{
          setTimeout(resolve,timer);
      });
  }
  sleep4(4000).next().value.then(res=>{
      console.log("do some things 4");
  });
  function sleep5(timer,fun){
      if(fun instanceof Function){
          setTimeout(fun, timer);
      }
  }
  function print(){
      console.log("do some things 5");
  }
  sleep5(5000,print);
  `
    }
  ]
};

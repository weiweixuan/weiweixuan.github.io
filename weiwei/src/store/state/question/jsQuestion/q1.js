export default {
  subTitle: "如何实现一个new方法？",
  explanation: "如何实例化一个类，里面都做了哪些事情?",
  answer: [
    {
      analysis: `#### 一共分为4步
    1 在内存中(堆)开辟一块空间obj，

    2 将obj继承到父类(可以使用父类的原型方法)，

    3 为obj添加属性方法，

    4 若有返回值res，直接返回res，没返回值就返回obj。

            `
    },
    {
      code: `
    function create() {
      // 创建一个空的对象
        var obj = new Object(),
      // 获得构造函数，arguments中去除第一个参数
        Con = [].shift.call(arguments);
      // 链接到原型，obj 可以访问到构造函数原型中的属性
        obj.__proto__ = Con.prototype;
      // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
        var ret = Con.apply(obj, arguments);
      // 优先返回构造函数返回的对象
      return ret instanceof Object ? ret : obj;
    };
    //es6改写
    function create_(Father={},...args) {
      // 创建一个空的对象,继承父类Father的原型对象
        var obj = Object.create(Father.prototype);
      // 添加方法
        var ret = Father.apply(obj, args);
      // 优先返回构造函数返回的对象
      return ret instanceof Object ? ret : obj;
    };
    `
    }
  ]
};

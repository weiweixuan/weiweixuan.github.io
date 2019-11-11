export default [
  {
    subTitle: '如何实现一个new？',
    answer: [
      {
        analysis: `一共分为4步，
           1.在内存中(堆)开辟一块空间
           2.this指向该对象，
           3.为对象添加方法，
           4.有返回值的话返回返回值，没返回值就返回该对象。`
      },
      {
        code: `
        <div v-highlight>
          <pre>
            <code class="javascrript">
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
            </code>
          </pre>
        </div>
    `
      }
    ]
  }
]

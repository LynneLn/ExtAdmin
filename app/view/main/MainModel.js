// 添加数据、公式和/或方法来支持视图
// ViewModel 是用来管理数据对象的类
// 这个类允许对这些数据感兴趣的 View 绑定这些数据并在这些数据变化时获得通知。
// ViewModel 归引用它的视图所有。
// 因为它与视图相关联，因此他们也可以被连接到由组件层次结构中的上级组件所拥有的父级 ViewModel 中
// 这样，子 View 就可以方便地“继承”父级 ViewModel 的数据。
Ext.define("Admin.view.main.MainModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.main",

  data: {
    currentView: null,
  },
});

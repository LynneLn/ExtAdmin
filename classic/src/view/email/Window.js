Ext.define('Admin.view.email.Window', {
  extend: 'Ext.window.Window',
  alias: 'widget.emailwindow',
  //设置 True 组件创建时自动显示
  autoShow: true,
  //为真 当显示时，制作窗口模板并且掩饰他背后的一切，为假时显示它除了限制访问其他UI元素。
  modal: true,

  layout: 'fit',

  width: 200,
  height: 200,

  afterRender: function () {
    var me = this;

    me.callParent(arguments);

    me.syncSize();

    // 由于我们希望始终是视窗的%，我们必须观察调整大小事件。
    Ext.on(me.resizeListeners = {
      resize: me.onViewportResize,
      scope: me,
      buffer: 50
    });
  },

  doDestroy: function () {
    //销毁的时候移除监听事件
    Ext.un(this.resizeListeners);

    this.callParent();
  },

  //调整大小
  onViewportResize: function () {
    this.syncSize();
  },

  syncSize: function () {
    var width = Ext.Element.getViewportWidth(),
      height = Ext.Element.getViewportHeight();

    //使用百分比大小，所以永远不会溢出屏幕(可能)剪切按钮并将用户锁定在对话框中)

    //设置宽高和所在的位置
    this.setSize(Math.floor(width * 0.9), Math.floor(height * 0.9));
    this.setXY([Math.floor(width * 0.05), Math.floor(height * 0.05)]);
  }
});

Ext.define('Admin.view.email.FriendsListViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.emailfriendslist',

  init: function () {
    var me = this,
      friendsStore = me.getViewModel().getStore('friends');

    //一旦有新数据可用，就触发本地排序
    friendsStore.on('load', function (store) {
      store.sort();
    });

    //本地排序，然后更新菜单
    friendsStore.on('sort', function (store) {
      me.mutateData(store, store.getRange());
    });

    me.callParent(arguments);
  },

  mutateData: function (store, records) {
    var view = this.getView(),
      arr = [],
      len = records.length,
      i;

    for (i = 0; i < len; i++) {
      arr.push({
        xtype: 'menuitem',
        text: records[i].get('name'),
        cls: 'font-icon ' + (records[i].get('online') ? 'online-user' : 'offline-user')
      });
    }

    //阻止布局在整个框架中发生。
    // 在更新多个组件和容器时挂起布局活动非常有用：
    Ext.suspendLayouts();
    //从父容器中移除全部的子组件
    view.removeAll(true);
    //添加多个子组件，里面要以数组的形式传进去
    view.add(arr);
    //启动布局
    Ext.resumeLayouts(true);
  }
});

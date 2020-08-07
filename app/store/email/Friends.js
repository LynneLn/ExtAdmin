// Store 可以被数据绑定组件（如 grid，tree 和 chart）使用。
// 如果你想要 Store 的全局实例，你可以把这个 Store 添加到 Application.js 的配置中
Ext.define('Admin.store.email.Friends', {
  extend: 'Ext.data.Store',

  alias: 'store.emailfriends',

  model: 'Admin.model.email.Friend',

  autoLoad: true,

  proxy: {
    type: 'api',
    url: '~api/email/friends'
  },

  sorters: {
    direction: 'DESC',
    property: 'online'
  }
});

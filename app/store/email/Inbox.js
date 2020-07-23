// Store 是记录（模型类的实例）的客户端缓存。
// 它提供了排序、过滤和查询其中包含的记录的功能。
Ext.define('Admin.store.email.Inbox', {
    extend: 'Ext.data.Store',

    alias: 'store.inbox',

    model: 'Admin.model.email.Email',

    pageSize: 20,

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/email/inbox'
    }
});

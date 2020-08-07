Ext.define('Admin.proxy.API', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',

    reader: {
        type: 'json',
        rootProperty: 'data'
    }
});
//使用方法：proxy：{
// type:'api'
// }
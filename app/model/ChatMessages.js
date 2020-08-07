Ext.define('Admin.model.ChatMessages', {
  extend: 'Admin.model.Base',

  fields: [
    {
      type: 'string',
      name: 'message'
    },
    {
      type: 'string',
      //设置默认值
      defaultValue: 'user',
      name: 'sender'
    }
  ]
});

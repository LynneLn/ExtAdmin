// Ext.data.Model 代表应用程序中的任何类型的可持久化数据。
// 每个 Model 包含对数据“建模”的字段和函数。
Ext.define('Admin.model.email.Email', {
  extend: 'Admin.model.Base',

  // 如果没有配置 fields，数据会被自动读取并被插入到数据对象中
  // Model 可以通过 fields 配置来声明这些字段。
  fields: [
    // type是字段类型，是需要去校验的
    {
      type: 'int',
      name: 'id'
    },
    {
      name: 'read'
    },
    {
      type: 'string',
      name: 'title'
    },
    {
      name: 'user_id'
    },
    {
      type: 'string',
      name: 'contents'
    },
    {
      type: 'string',
      name: 'from'
    },
    {
      name: 'has_attachments'
    },
    {
      name: 'attachments'
    },
    {
      name: 'received_on',
      type: 'date'
    },
    {
      name: 'favorite'
    }
  ]
  // 在如下情况你可能需要定义字段：
  // 验证
  // 默认值
  // 转换函数
});

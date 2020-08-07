Ext.define('Admin.model.faq.Category', {
  extend: 'Admin.model.Base',

  fields: [
    {
      type: 'string',
      name: 'name'
    }
  ],

  //设置该model关联的model，即输出的question是一个对象
  hasMany: {
    //显示的字段名称
    name: 'questions',
    //关联的model
    model: 'faq.Question'
  }
});

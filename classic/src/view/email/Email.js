Ext.define("Admin.view.email.Email", {
  extend: "Ext.container.Container",

  xtype: "email",

  controller: "email",

  viewModel: {
    type: "email",
  },

  itemId: "emailMainContainer",

  layout: {
    type: "hbox",
    align: "stretch",
  },

  margin: "20 0 0 20",

  items: [
    //左侧的email和friend
    {
      xtype: "container",
      itemId: "navigationPanel",
      layout: {
        type: "vbox",
        align: "stretch",
      },
      width: "30%",
      minWidth: 180,
      maxWidth: 240,
      defaults: {
        cls: "navigation-email",
        margin: "0 20 20 0",
      },
      items: [
        //emial
        {
          xtype: "emailmenu",
          listeners: {
            click: "onMenuClick",
          },
        },
        //friends
        {
          xtype: "emailfriendslist",
        },
      ],
    },
    //右侧显示的列表（就是添加一个inbox的组件）
    {
      xtype: "container",
      itemId: "contentPanel",
      margin: "0 20 20 0",
      flex: 1,
      layout: {
        type: "anchor",
        anchor: "100%",
      },
    },
  ],
});

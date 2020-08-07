Ext.define("Admin.store.NavigationTree", {
  // treeStore和其他的store的区别
  //   就是输出成一个tree的格式，然后定义了一些tree的方法供使用
  extend: "Ext.data.TreeStore",
  storeId: "NavigationTree",

  fields: [
    {
      name: "text",
    },
  ],

  //   当前store的根节点。
  root: {
    expanded: true,
    children: [
      {
        text: "Dashboard",
        iconCls: "x-fa fa-desktop",
        rowCls: "nav-tree-badge nav-tree-badge-new",
        viewType: "admindashboard",
        routeId: "dashboard", // 是默认的viewType
        leaf: true,
      },
      {
        text: "Email",
        iconCls: "x-fa fa-paper-plane",
        rowCls: "nav-tree-badge nav-tree-badge-hot",
        viewType: "email",
        leaf: true,
      },
      {
        text: "Profile",
        iconCls: "x-fa fa-user",
        viewType: "profile",
        leaf: true,
      },
      {
        text: "Search results",
        iconCls: "x-fa fa-search",
        viewType: "searchresults",
        leaf: true,
      },
      {
        text: "FAQ",
        iconCls: "x-fa fa-question",
        viewType: "faq",
        leaf: true,
      },
      {
        text: "Pages",
        iconCls: "x-fab fa-leanpub",
        expanded: false,
        selectable: false,
        children: [
          {
            text: "Blank Page",
            iconCls: "x-fa fa-file",
            // 所要使用视图的 xtype。 该项会自动通过Grid设置为'gridview'， 和通过Tree设置为'treeview'。
            viewType: "pageblank",
            leaf: true,
          },

          {
            text: "404 Error",
            iconCls: "x-fa fa-exclamation-triangle",
            viewType: "page404",
            leaf: true,
          },
          {
            text: "500 Error",
            iconCls: "x-fa fa-times-circle",
            viewType: "page500",
            leaf: true,
          },
          {
            text: "Lock Screen",
            iconCls: "x-fa fa-lock",
            viewType: "lockscreen",
            leaf: true,
          },

          {
            text: "Login",
            iconCls: "x-fa fa-check",
            viewType: "login",
            leaf: true,
          },
          {
            text: "Register",
            iconCls: "x-fa fa-edit",
            viewType: "register",
            leaf: true,
          },
          {
            text: "Password Reset",
            iconCls: "x-fa fa-lightbulb",
            viewType: "passwordreset",
            leaf: true,
          },
        ],
      },
      {
        text: "Widgets",
        iconCls: "x-fa fa-flask",
        viewType: "widgets",
        leaf: true,
      },
      {
        text: "Forms",
        iconCls: "x-fa fa-edit",
        viewType: "forms",
        leaf: true,
      },
      {
        text: "Charts",
        iconCls: "x-fa fa-chart-pie",
        viewType: "charts",
        leaf: true,
      },
    ],
  },
});

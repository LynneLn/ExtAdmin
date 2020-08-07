// 是个视图
// View 不包含任何应用程序逻辑。所有的视图逻辑应该被放在 ViewController 里
// 是应用程序可视化区域，一个应用程序只能有一个Viewport生效
Ext.define("Admin.view.main.Main", {
  extend: "Ext.container.Viewport",

  // 动态加载所需类
  requires: ["Ext.button.Segmented", "Ext.list.Tree"],

  // controller 配置为你的 View 指定了 ViewController。
  // 当通过这种方式完成指定后，对应的 ViewController 就成为了你的事件处理方法和相关引用的容器。
  // 同时建立了与通过 View 触发的组件和事件之间的一一对应关系。
  controller: "main",
  // viewModel 配置为 View 指定了 ViewModel。
  // ViewModel 是此组件及其子组件的数据提供者。
  // ViewModel 中包含的数据通常通过添加绑定配置用在需要展示或编辑这些数据的组件中。
  viewModel: "main",

  cls: "sencha-dash-viewport",
  itemId: "mainView",

  // 该视图的布局方式
  layout: {
    type: "vbox",
    align: "stretch",
  },

  // 设置事件的监听
  listeners: {
    // 时间的controller里面定义
    render: "onMainViewRender",
  },

  // 该视图的子组件
  items: [
    {
      // 子组件的类型
      xtype: "toolbar",
      cls: "sencha-dash-dash-headerbar shadow",
      height: 64,
      itemId: "headerBar",
      items: [
        // logo的部位
        {
          xtype: "component",
          // 设置该组件的引用名称，该名称'senchaLogo'必须在该组件所在的视图View和该组件所配置的Controller中命名唯一
          reference: "senchaLogo",
          cls: "sencha-logo",
          html:
            '<div class="main-logo"><img src="resources/images/company-logo.png">Sencha</div>',
          width: 250,
        },
        //
        {
          margin: "0 0 0 8",
          ui: "header",
          iconCls: "x-fa fa-bars",
          //在已经加载的组件中（内存中）寻找id为main-navigation-btn的组件
          id: "main-navigation-btn",
          handler: "onToggleNavigationSize",
        },
        "->",
        {
          xtype: "segmentedbutton",
          margin: "0 16 0 0",

          platformConfig: {
            ie9m: {
              hidden: true,
            },
          },

          items: [
            {
              iconCls: "x-fa fa-desktop",
              pressed: true,
            },
            {
              iconCls: "x-fa fa-tablet",
              handler: "onSwitchToModern",
              tooltip: "Switch to modern toolkit",
            },
          ],
        },
        {
          iconCls: "x-fa fa-search",
          ui: "header",
          href: "#searchresults",
          hrefTarget: "_self",
          tooltip: "See latest search",
        },
        {
          iconCls: "x-fa fa-envelope",
          ui: "header",
          href: "#email",
          hrefTarget: "_self",
          tooltip: "Check your email",
        },
        {
          iconCls: "x-fa fa-question",
          ui: "header",
          href: "#faq",
          hrefTarget: "_self",
          tooltip: "Help / FAQ's",
        },
        {
          iconCls: "x-fa fa-th-large",
          ui: "header",
          //设置超链接的URL地址
          href: "#profile",
          // 设置超链接属性
          hrefTarget: "_self",
          tooltip: "See your profile",
        },
        {
          xtype: "tbtext",
          text: "Goff Smith",
          // 设置该组件样式，在已加载的css文件中寻找该样式
          cls: "top-user-name",
        },
        {
          xtype: "image",
          cls: "header-right-profile-image",
          height: 35,
          width: 35,
          alt: "current user image",
          src: "resources/images/user-profile/2.png",
        },
      ],
    },
    {
      xtype: "maincontainerwrap",
      id: "main-view-detail-wrap",
      reference: "mainContainerWrap",
      flex: 1,
      items: [
        {
          xtype: "treelist",
          reference: "navigationTreeList",
          itemId: "navigationTreeList",
          ui: "nav",
          store: "NavigationTree",
          width: 250,
          expanderFirst: false,
          expanderOnly: false,
          listeners: {
            selectionchange: "onNavigationTreeSelectionChange",
          },
        },
        {
          xtype: "container",
          flex: 1,
          reference: "mainCardPanel",
          cls: "sencha-dash-right-main-container",
          itemId: "contentPanel",
          layout: {
            type: "card",
            anchor: "100%",
          },
        },
      ],
    },
  ],
});

// ViewController 的作用在于：
// 通过 listener 和 reference 连接到 View
// 通过视图的生命周期自动管理关联的 ViewController。
// 从实例化到销毁，Ext.app.ViewController 被绑定到引用它的组件。
// 同一个 View 类的第二个示例会获得它自己的 ViewController 实例。
// 当这些视图被销毁后，它们相关的 ViewController 也会被销毁。
// 提供封装以使视图的嵌套更为直观

Ext.define("Admin.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",

  // 用于处理如果 hash 被改变但没有匹配的 route，路由将什么都不做，
  // 只是触发 unmatchedroute 事件，可以在 Ext.application 中监听：
  listen: {
    controller: {
      "#": {
        unmatchedroute: "onRouteChange",
      },
    },
  },

  routes: {
    ":node": "onRouteChange",
  },

  // routes : {
  //     'user/:id' : {
  // 可以写一些方法，在执行路由跳转之前，比如校验用户权限等
  //         before  : 'onBeforeUser',
  //         action  : 'onUser'
  //     }
  // },

  // :id 作为一个实参传递
  // 而第二个参数是 action，如果执行了 action 的 resume 方法，路由会继续执行， onUser 方法会被调用
  // onBeforeUser : function (id, action) {
  //     Ext.Ajax.request({
  //         url     : '/security/user/' + id,
  //         success : function() {
  //             action.resume();
  //         }
  //     });
  // },

  lastView: null,

  // 3、根据viewType和routerId设置当前渲染的页面
  setCurrentView: function (hashTag) {
    hashTag = (hashTag || "").toLowerCase();

    var me = this,
      refs = me.getReferences(),
      mainCard = refs.mainCardPanel,
      mainLayout = mainCard.getLayout(),
      navigationList = refs.navigationTreeList,
      store = navigationList.getStore(),
      node =
        store.findNode("routeId", hashTag) ||
        store.findNode("viewType", hashTag),
      //view现在就是xtpe
      view = (node && node.get("viewType")) || "page404",
      lastView = me.lastView,
      //查看是否已经在这个页面
      existingItem = mainCard.child("component[routeId=" + hashTag + "]"),
      newView;

    // Kill any previously routed window
    //查看最近的一个视图是不是存在
    // 如果检测到的平台是 Windows，则返回 true。
    //删除除菜单栏和侧边menu栏的正文的视图
    if (lastView && lastView.isWindow) {
      lastView.destroy();
    }

    //获取视图中当前可见的组件
    lastView = mainLayout.getActiveItem();

    //如果当前的组件不是路由点击的组件，那么就创建一个
    if (!existingItem) {
      newView = Ext.create({
        xtype: view,
        routeId: hashTag, // for existingItem search later
        //'display' : 使用 display: none 样式组件将被隐藏.
        // 'visibility' : 使用 visibility: hidden 样式组件将被隐藏.
        // 'offsets' : 组件定位在文档的可见区域之外将被隐藏. 当一个隐藏的组件必须保持可测量的这是有用的. 使用 display 将导致一个 组件不可测.
        hideMode: "offsets",
      });
    }

    /// newView意味着我们有一个现有的视图，但如果newView是window我们没有把它添加到卡片布局中。
    if (!newView || !newView.isWindow) {
      if (existingItem) {
        // 我们没有一个新视图，所以激活现有的视图。
        if (existingItem !== lastView) {
          mainLayout.setActiveItem(existingItem);
        }
        newView = existingItem;
      } else {
        // newView被设置(还不存在)，所以添加它并使它成为activeItem。
        Ext.suspendLayouts();
        mainLayout.setActiveItem(mainCard.add(newView));
        Ext.resumeLayouts(true);
      }
    }

    // 设置菜单的选中项
    navigationList.setSelection(node);

    //查看容器是否可聚焦，如果可以就focus
    if (newView.isFocusable(true)) {
      newView.focus();
    }

    me.lastView = newView;
  },

  // 菜单栏点击的时候触发
  onNavigationTreeSelectionChange: function (tree, node) {
    // 获取node里面routeId的内容
    var to = node && (node.get("routeId") || node.get("viewType"));

    if (to) {
      this.redirectTo(to);
    }
  },

  // 菜单的折叠
  onToggleNavigationSize: function () {
    var me = this,
      refs = me.getReferences(),
      navigationList = refs.navigationTreeList,
      wrapContainer = refs.mainContainerWrap,
      collapsing = !navigationList.getMicro(),
      new_width = collapsing ? 64 : 250;

    if (Ext.isIE9m || !Ext.os.is.Desktop) {
      Ext.suspendLayouts();

      refs.senchaLogo.setWidth(new_width);

      navigationList.setWidth(new_width);
      navigationList.setMicro(collapsing);

      Ext.resumeLayouts(); // do not flush the layout here...

      // No animation for IE9 or lower...
      wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
      wrapContainer.updateLayout(); // ... since this will flush them
    } else {
      if (!collapsing) {
        // If we are leaving micro mode (expanding), we do that first so that the
        // text of the items in the navlist will be revealed by the animation.
        navigationList.setMicro(false);
      }
      navigationList.canMeasure = false;

      // Start this layout first since it does not require a layout
      refs.senchaLogo.animate({dynamic: true, to: {width: new_width}});

      // Directly adjust the width config and then run the main wrap container layout
      // as the root layout (it and its chidren). This will cause the adjusted size to
      // be flushed to the element and animate to that new size.
      navigationList.width = new_width;
      wrapContainer.updateLayout({isRoot: true});
      navigationList.el.addCls("nav-tree-animating");

      // We need to switch to micro mode on the navlist *after* the animation (this
      // allows the "sweep" to leave the item text in place until it is no longer
      // visible.
      if (collapsing) {
        navigationList.on({
          afterlayoutanimation: function () {
            navigationList.setMicro(true);
            navigationList.el.removeCls("nav-tree-animating");
            navigationList.canMeasure = true;
          },
          single: true,
        });
      }
    }
  },

  //   1、main页面渲染的时候执行，跳转到dashboard页面
  onMainViewRender: function () {
    if (!window.location.hash) {
      this.redirectTo("dashboard");
    }
  },

  //   2、根据路由的更改执行的方法
  onRouteChange: function (id) {
    this.setCurrentView(id);
  },

  // 设置当前的页面
  onSearchRouteChange: function () {
    this.setCurrentView("searchresults");
  },

  // 切换到modern类型的页面
  onSwitchToModern: function () {
    Ext.Msg.confirm(
      "Switch to Modern",
      "Are you sure you want to switch toolkits?",
      this.onSwitchToModernConfirmed,
      this
    );
  },

  // 确认切换到modern
  onSwitchToModernConfirmed: function (choice) {
    if (choice === "yes") {
      var s = window.location.search;

      // Strip "?classic" or "&classic" with optionally more "&foo" tokens
      // following and ensure we don't start with "?".
      s = s.replace(/(^\?|&)classic($|&)/, "").replace(/^\?/, "");

      // Add "?modern&" before the remaining tokens and strip & if there are
      // none.
      window.location.search = ("?modern&" + s).replace(/&$/, "");
    }
  },

  // 切换到router页面
  onEmailRouteChange: function () {
    this.setCurrentView("email");
  },
});

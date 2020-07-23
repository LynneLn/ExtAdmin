// 是个视图
// View 不包含任何应用程序逻辑。所有的视图逻辑应该被放在 ViewController 里
Ext.define('Admin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],

    // controller 配置为你的 View 指定了 ViewController。
    // 当通过这种方式完成指定后，对应的 ViewController 就成为了你的事件处理方法和相关引用的容器。
    // 同时建立了与通过 View 触发的组件和事件之间的一一对应关系。
    controller: 'main',
    // viewModel 配置为 View 指定了 ViewModel。
    // ViewModel 是此组件及其子组件的数据提供者。
    // ViewModel 中包含的数据通常通过添加绑定配置用在需要展示或编辑这些数据的组件中。
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="resources/images/company-logo.png">Sencha</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-bars',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    xtype: 'segmentedbutton',
                    margin: '0 16 0 0',

                    platformConfig: {
                        ie9m: {
                            hidden: true
                        }
                    },

                    items: [{
                        iconCls: 'x-fa fa-desktop',
                        pressed: true
                    }, {
                        iconCls: 'x-fa fa-tablet',
                        handler: 'onSwitchToModern',
                        tooltip: 'Switch to modern toolkit'
                    }]
                },
                {
                    iconCls:'x-fa fa-search',
                    ui: 'header',
                    href: '#searchresults',
                    hrefTarget: '_self',
                    tooltip: 'See latest search'
                },
                {
                    iconCls:'x-fa fa-envelope',
                    ui: 'header',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: 'Check your email'
                },
                {
                    iconCls:'x-fa fa-question',
                    ui: 'header',
                    href: '#faq',
                    hrefTarget: '_self',
                    tooltip: 'Help / FAQ\'s'
                },
                {
                    iconCls:'x-fa fa-th-large',
                    ui: 'header',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: 'See your profile'
                },
                {
                    xtype: 'tbtext',
                    text: 'Goff Smith',
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt:'current user image',
                    src: 'resources/images/user-profile/2.png'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'nav',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});

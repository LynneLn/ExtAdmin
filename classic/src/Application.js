// Application 类包含应用的全局设置，如应用程序的命名空间、共享存储等。
Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    // 在这里添加全局/共享的stores
    stores: [
        'NavigationTree'
    ],

    // 默认的hash值，即设置默认跳转的页面
    //当应用启动时，它会检测当前 URI 的 hash，如果不存在，则会自动添加 #dashboard 并执行相应的 handlers。
    defaultToken : 'dashboard',

    // 要创建的初始视图的名称，这个类将获得一个“viewport”插件
    // 如果它不继承 Ext.Viewport。
    // 通过为 mainView 指定一个容器类，
    // 可以把任何类作为你的 Viewport（可视区域）。
    // 我们把 Admin.view.main.Main （一个 TabPanel 类）作为我们的 Viewport。
    // mainView 的配置指示应用程序创建指定的视图并加上 Viewport Plugin，从而将视图连接到 document body 中。
    mainView: 'Admin.view.main.Main',

    // 当应用过时（浏览器缓存版本对比服务器最新版本）时，onAppUpdate 方法被调用。
    // 系统会提示用户重新加载应用以使用最新版本。
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

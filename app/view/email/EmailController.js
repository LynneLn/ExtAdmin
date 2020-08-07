Ext.define('Admin.view.email.EmailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.email',

    //初始化的时间
    init: function () {
        this.setCurrentView('inbox');
    },

    //返回按钮点击的时候
    onBackBtnClick: function () {
        this.setCurrentView('inbox');
    },

    //email的点击事件
    onMenuClick: function (menu, item) {
        if (item && item.routeId === 'emailcompose') {
            this.setCurrentView(item.routeId, item.params);
        }
    },

    //设置当前的页面
    setCurrentView: function (view, params) {
        //查看contentPanel是否存在
        var contentPanel = this.getView().down('#contentPanel');

        //We skip rendering for the following scenarios:
        // * There is no contentPanel
        // * view xtype is not specified
        // * current view is the same
        if (!contentPanel || view === '' || (contentPanel.down() && contentPanel.down().xtype === view)) {
            return false;
        }

        //创建一个新的视窗
        if (params && params.openWindow) {
            var cfg = Ext.apply({
                xtype: 'emailwindow',
                items: [
                    Ext.apply({
                        xtype: view
                    }, params.targetCfg)
                ]
            }, params.windowCfg);

            Ext.create(cfg);
        } else {
            Ext.suspendLayouts();

            //移除全部的组子组件
            contentPanel.removeAll(true);
            //添加
            contentPanel.add(
                Ext.apply({
                    xtype: view
                }, params)
            );

            Ext.resumeLayouts(true);
        }
    },

    onGridCellItemClick: function (view, td, cellIndex, record) {
        if (cellIndex > 1) {
            this.setCurrentView('emaildetails', {record: record});
        } else if (cellIndex === 1) {
            //Invert selection
            record.set('favorite', !record.get('favorite'));
        }
    },

    beforeDetailsRender: function (view) {
        var record = view.record ? view.record : {};

        view.down('#mailBody').setHtml(record.get('contents'));
        view.down('#attachments').setData(record.get('attachments'));
        view.down('#emailSubjectContainer').setData(record.data ? record.data : {});
        view.down('#userImage').setSrc('resources/images/user-profile/' + record.get('user_id') + '.png');
    }
});

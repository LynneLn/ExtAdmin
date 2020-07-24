Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: 'responsivecolumn',
    
    listeners: {
        hide: 'onHideView'
    },

    items: [
        {
            xtype: 'network',

            // 当viewport足够大时，宽度为60%，
            // 视窗小时为100%
            userCls: 'big-60 small-100'
        },
        {
            xtype: 'hddusage',
            userCls: 'big-20 small-50'
        },
        {
            xtype: 'earnings',
            userCls: 'big-20 small-50'
        },
        {
            xtype: 'sales',
            userCls: 'big-20 small-50'
        },
        {
            xtype: 'topmovies',
            userCls: 'big-20 small-50'
        },
        {
            xtype: 'weather',
            cls: 'weather-panel shadow',
            userCls: 'big-40 small-100'
        },
        {
            xtype: 'todo',
            userCls: 'big-60 small-100'
        },
        {
            xtype: 'services',
            userCls: 'big-40 small-100'
        },
        // {
        //     xtype: 'importFile',
        //     userCls: 'big-40 small-100'
        // }
    ]
});

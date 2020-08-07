Ext.define('Admin.view.email.Inbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',

    cls: 'email-inbox-panel shadow',

    bind: {
        store: '{inbox}'
    },

    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },

    //一个selection model实例或配置对象。在后一种情况下， selType配置选项确定此配置应用于哪种类型的选择模型。
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    listeners: {
        cellclick: 'onGridCellItemClick'
    },

    headerBorders: false,
    rowLines: false,
    scrollable: false,

    columns: [
        {
            dataIndex: 'favorite',
            menuDisabled: true,
            text: '<span class="x-fa fa-heart"></span>',
            width: 40,
            renderer: function (value) {
                return '<span class="x-fa fa-heart' + (value ? '' : ' inactive') + '"></span>';
            }
        },
        {
            dataIndex: 'from',
            text: 'From',
            width: 140
        },
        {
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        },
        {
            dataIndex: 'has_attachments',
            text: '<span class="x-fa fa-paperclip"></span>',
            width: 40,
            renderer: function (value) {
                return value ? '<span class="x-fa fa-paperclip"></span>' : '';
            }
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'received_on',
            width: 90,
            text: 'Received'
        }
    ]
});

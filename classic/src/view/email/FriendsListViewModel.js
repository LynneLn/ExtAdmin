Ext.define('Admin.view.email.FriendsListViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.emailfriendslist',

    stores: {
        friends: {
            //Store reference
            type: 'emailfriends',

            //自动加载
            autoLoad: true
        }
    }
});

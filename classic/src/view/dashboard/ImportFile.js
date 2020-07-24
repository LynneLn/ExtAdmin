// Ext.define('Admin.view.dashboard.ImportFile', {
//     extend: 'Ext.Component',
//     xtype: 'importFile',

//     requires: [
       
//     ],

//     title: 'Import File',
//     // ui: 'light',

//     cls: 'quick-graph-panel shadow',
//     height: 130,
//     layout: 'fit',
//     // html: '<script type="text/javascript">var handleClick=()=>{console.log(1121)}</script><a onClick="javascript:'+this.handleClick+'()" multiple="multiple">111</a>',
//     html: `<input type="file"  multiple accept="*/*">111</input>`,
//     // initComponent:function(){
//     //     console.log('222222222222')    
//     // },
//     listeners : {
//         //     render : function() {
//         //         Ext.fly(this.el).on('click', function(e, t) {
//         //             alert(111);
//         //             });
//         //          }
//         //         }
//         //     },
//         //     scope : this,
//         change: {
//             element: 'el', //bind to the underlying el property on the panel
//             fn: function(e){ 
//                 var path=e.target.files[0].webkitRelativePath.split('/')[0]
//                 console.log('path',e.target.files)
//                 console.log('click el',e.target.files[0].webkitRelativePath.split('/')); 


//                 var zip = new JSZip();
//                 zip.folder(`/${path}/`);
//                 console.log('click el',zip); 
// zip.generateAsync({type:"blob"})
// .then(function(content) {



//     var urlObject = window.URL || window.webkitURL || window;
//     var export_blob = new Blob([content]);
//     var save_link = document.createElement("a")
//     save_link.href = urlObject.createObjectURL(export_blob);
//     save_link.download = 'path.rar';
//     save_link.click();
//     console.log(content); 
//     // see FileSaver.js
//     saveAs(content, "example.zip");
//  });
//             }
//         },
//     }

//     // listeners:{
//     //     click:function(){ 
//     //         console.log('change') 
//     //     }
//     // },

//     // items: [
//     //     {
//     //         xtype: 'fileuploadfield',
//     //         // html: ' <input name="file" type="file" multiple="multiple"></input>',
//     //         padding: '0 0 12 0',
//     //         listeners:{
//     //             change:function(){ 
//     //                 console.log('1111111111111111') 
//     //             }
//     //         } 
//     //     }
//     // ]
// });

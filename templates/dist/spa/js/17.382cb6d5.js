(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"168a":function(t,e,o){"use strict";var a=o("1983"),s=o.n(a);e["default"]=s.a},1983:function(t,e){},"213c":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[o("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[o("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("q-btn-group",{attrs:{push:""}},[o("q-btn",{attrs:{label:"New",icon:"add"},on:{click:function(e){return t.newFormOpen()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             New one data\n           ")])],1),o("q-btn",{attrs:{label:"refresh",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             Refresh data\n           ")])],1),o("q-btn",{attrs:{label:"Download",icon:"cloud_download"},on:{click:function(e){return t.downloadData()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n            Download 1 month data\n           ")])],1)],1),o("q-space"),o("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"Search word"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"asn_code",attrs:{props:e}},[t._v("\n           "+t._s(e.row.asn_code)+"\n         ")]),o("q-td",{key:"asn_status",attrs:{props:e}},[t._v("\n           "+t._s(e.row.asn_status)+"\n         ")]),o("q-td",{key:"total_weight",attrs:{props:e}},[t._v("\n           "+t._s(e.row.total_weight)+"\n         ")]),o("q-td",{key:"total_volume",attrs:{props:e}},[t._v("\n           "+t._s(e.row.total_volume)+"\n         ")]),o("q-td",{key:"supplier",attrs:{props:e}},[t._v("\n           "+t._s(e.row.supplier)+"\n         ")]),o("q-td",{key:"creater",attrs:{props:e}},[t._v("\n           "+t._s(e.row.creater)+"\n         ")]),o("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.create_time)+"\n         ")]),o("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.update_time)+"\n         ")]),o("q-td",{key:"action",attrs:{props:e}},[o("q-btn",{attrs:{round:"",flat:"",push:"",color:"info",icon:"visibility"},on:{click:function(o){return t.viewData(e.row)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Print this ASN\n            ")])],1),o("q-btn",{attrs:{round:"",flat:"",push:"",color:"positive",icon:"img:statics/inbound/preloadstock.png"},on:{click:function(o){return t.preloadData(e.row.id)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Confirm Delivery\n            ")])],1),o("q-btn",{attrs:{round:"",flat:"",push:"",color:"positive",icon:"img:statics/inbound/presortstock.png"},on:{click:function(o){return t.presortData(e.row.id)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Finish Loading\n            ")])],1),o("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"img:statics/inbound/sortstock.png"},on:{click:function(o){return t.sortedData(e.row)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Confirm Sorted\n            ")])],1),o("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(o){return t.editData(e.row)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Edit one line\n            ")])],1),o("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(o){return t.deleteData(e.row.id)}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              Delete one line\n            ")])],1)],1),e.row.transportation_fee.detail!==[]?[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[o("q-list",t._l(e.row.transportation_fee.detail,(function(e,a){return o("div",{key:a},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}]},[o("q-item-section",[o("q-item-label",[t._v(t._s(e.transportation_supplier))]),o("q-item-label",[t._v("Estimate Cost: "+t._s(e.transportation_cost))])],1)],1)],1)})),0)],1)]:t._e()],2)]}}])})],1),[o("div",{staticClass:"q-pa-md flex flex-center"},[o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:"Previous",icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          Previous\n        ")])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:"Next","icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          Next\n        ")])],1)],1)],o("q-dialog",{model:{value:t.newForm,callback:function(e){t.newForm=e},expression:"newForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v(t._s(t.newFormData.asn_code))]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[o("q-select",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",options:t.supplier_list,label:"Supplier List",rules:[function(t){return t&&t.length>0||"Please Enter the Supplier"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},model:{value:t.newFormData.supplier,callback:function(e){t.$set(t.newFormData,"supplier",e)},expression:"newFormData.supplier"}}),o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:"Goods QTY"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:"Goods Code",options:t.options,autofocus:""},on:{filter:t.filterFn,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0},t.goodsData1.code?{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.goodsData1.code=""}}})]},proxy:!0}:null],null,!0),model:{value:t.goodsData1.code,callback:function(e){t.$set(t.goodsData1,"code",e)},expression:"goodsData1.code"}})]},proxy:!0}]),model:{value:t.goodsData1.qty,callback:function(e){t.$set(t.goodsData1,"qty",t._n(e))},expression:"goodsData1.qty"}}),o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:"Goods QTY"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:"Goods Code",options:t.options},on:{filter:t.filterFn,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0},t.goodsData2.code?{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.goodsData2.code=""}}})]},proxy:!0}:null],null,!0),model:{value:t.goodsData2.code,callback:function(e){t.$set(t.goodsData2,"code",e)},expression:"goodsData2.code"}})]},proxy:!0}]),model:{value:t.goodsData2.qty,callback:function(e){t.$set(t.goodsData2,"qty",t._n(e))},expression:"goodsData2.qty"}})],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.newDataSubmit()}}},[t._v("Submit")])],1)],1)],1),o("q-dialog",{model:{value:t.editMode,callback:function(e){t.editMode=e},expression:"editMode"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v(t._s(t.newFormData.asn_code))]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[o("q-select",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",options:t.supplier_list,label:"Supplier List",rules:[function(t){return t&&t.length>0||"Please Enter the Supplier"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editDataSubmit()}},model:{value:t.newFormData.supplier,callback:function(e){t.$set(t.newFormData,"supplier",e)},expression:"newFormData.supplier"}}),o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:"Goods QTY"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editDataSubmit()}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:"Goods Code",options:t.options,autofocus:""},on:{filter:t.filterFn,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editDataSubmit()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0},t.goodsData1.code?{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.goodsData1.code=""}}})]},proxy:!0}:null],null,!0),model:{value:t.goodsData1.code,callback:function(e){t.$set(t.goodsData1,"code",e)},expression:"goodsData1.code"}})]},proxy:!0}]),model:{value:t.goodsData1.qty,callback:function(e){t.$set(t.goodsData1,"qty",t._n(e))},expression:"goodsData1.qty"}}),o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:"Goods QTY"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editDataSubmit()}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-select",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",label:"Goods Code",options:t.options},on:{filter:t.filterFn,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editDataSubmit()}},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0},t.goodsData2.code?{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.goodsData2.code=""}}})]},proxy:!0}:null],null,!0),model:{value:t.goodsData2.code,callback:function(e){t.$set(t.goodsData2,"code",e)},expression:"goodsData2.code"}})]},proxy:!0}]),model:{value:t.goodsData2.qty,callback:function(e){t.$set(t.goodsData2,"qty",t._n(e))},expression:"goodsData2.qty"}})],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.editDataSubmit()}}},[t._v("Submit")])],1)],1)],1),o("q-dialog",{model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("Delete one data")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t._v("\n       This is an irreversible process.\n     ")]),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.deleteDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.deleteDataSubmit()}}},[t._v("Submit")])],1)],1)],1),o("q-dialog",{model:{value:t.preloadForm,callback:function(e){t.preloadForm=e},expression:"preloadForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("Confirm Delivery")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t._v("\n       This is an irreversible process.\n     ")]),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.preloadDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.preloadDataSubmit()}}},[t._v("Submit")])],1)],1)],1),o("q-dialog",{model:{value:t.presortForm,callback:function(e){t.presortForm=e},expression:"presortForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("Finish Loading")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t._v("\n       This is an irreversible process.\n     ")]),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.presortDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.presortDataSubmit()}}},[t._v("Submit")])],1)],1)],1),o("q-dialog",{model:{value:t.viewForm,callback:function(e){t.viewForm=e},expression:"viewForm"}},[o("q-card",{attrs:{id:"printMe"}},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v(t._s(t.viewAsn))]),o("q-space")],1),o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("Sender: "+t._s(t.supplier_detail.supplier_name))]),o("div",{staticClass:"text-subtitle2"},[t._v("Address: "+t._s(t.supplier_detail.supplier_city)+t._s(t.supplier_detail.supplier_address))]),o("div",{staticClass:"text-subtitle2"},[t._v("Tel: "+t._s(t.supplier_detail.supplier_contact))]),o("div",{staticClass:"text-h6"},[t._v("Receiver: "+t._s(t.warehouse_detail.warehouse_name))]),o("div",{staticClass:"text-subtitle2"},[t._v("Address: "+t._s(t.warehouse_detail.warehouse_city)+t._s(t.warehouse_detail.warehouse_address))]),o("div",{staticClass:"text-subtitle2"},[t._v("Tel: "+t._s(t.warehouse_detail.warehouse_contact))])]),o("q-markup-table",[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Goods Code")]),o("th",{staticClass:"text-right"},[t._v("Goods QTY")]),o("th",{staticClass:"text-right"},[t._v("Goods Weight(Unit: KG)")]),o("th",{staticClass:"text-right"},[t._v("Goods Volume(Unit: Cubic Metres)")]),o("th",{staticClass:"text-right"},[t._v("Receive QTY")]),o("th",{staticClass:"text-right"},[t._v("Comments")])])]),o("tbody",t._l(t.viewprint_table,(function(e,a){return o("tr",{key:a},[o("td",{staticClass:"text-left"},[t._v(t._s(e.goods_code))]),o("td",{staticClass:"text-right"},[t._v(t._s(e.goods_qty))]),o("td",{staticClass:"text-right"},[t._v(t._s(e.goods_weight))]),o("td",{staticClass:"text-right"},[t._v(t._s(e.goods_volume))]),o("td",{staticClass:"text-right"}),o("td",{staticClass:"text-right"})])})),0)])],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{directives:[{name:"print",rawName:"v-print",value:t.printObj,expression:"printObj"}],attrs:{color:"primary",icon:"print"}},[t._v("print")])],1)],1),o("q-dialog",{model:{value:t.sortedForm,callback:function(e){t.sortedForm=e},expression:"sortedForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v(t._s(t.newFormData.asn_code))]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("Close")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",disable:"",readonly:"",label:"Supplier List"},model:{value:t.newFormData.supplier,callback:function(e){t.$set(t.newFormData,"supplier",e)},expression:"newFormData.supplier"}}),o("q-input",{staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",autofocus:"",label:"Goods Actual QTY"},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-input",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",disable:"",readonly:"",label:"Goods Code"},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0}]),model:{value:t.goodsData1.code,callback:function(e){t.$set(t.goodsData1,"code",e)},expression:"goodsData1.code"}})]},proxy:!0}]),model:{value:t.goodsData1.qty,callback:function(e){t.$set(t.goodsData1,"qty",t._n(e))},expression:"goodsData1.qty"}}),o("q-input",{directives:[{name:"show",rawName:"v-show",value:""!==t.goodsData2.code,expression:"goodsData2.code !== ''"}],staticStyle:{"margin-bottom":"5px"},attrs:{dense:"",outlined:"",square:"",debounce:"500",type:"number",label:"Goods Actual QTY"},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-input",{attrs:{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",disable:"",readonly:"",label:"Goods Code"},scopedSlots:t._u([{key:"no-option",fn:function(){return[o("q-item",[o("q-item-section",{staticClass:"text-grey"},[t._v("\n                   No results\n                 ")])],1)]},proxy:!0}]),model:{value:t.goodsData2.code,callback:function(e){t.$set(t.goodsData2,"code",e)},expression:"goodsData2.code"}})]},proxy:!0}]),model:{value:t.goodsData2.qty,callback:function(e){t.$set(t.goodsData2,"qty",t._n(e))},expression:"goodsData2.qty"}})],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newDataCancel()}}},[t._v("Cancel")]),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.sortedDataSubmit()}}},[t._v("Submit")])],1)],1)],1)],2)},s=[],n=(o("5319"),o("3004")),i=o("a639"),r={name:"Pageasnlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"asn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],viewprint_table:[],warehouse_detail:{},supplier_list:[],supplier_detail:{},columns:[{name:"asn_code",required:!0,label:"ASN Code",align:"left",field:"asn_code"},{name:"asn_status",label:"ASN Status",field:"asn_status",align:"center"},{name:"total_weight",label:"Total Weight",field:"total_weight",align:"center"},{name:"total_volume",label:"Total Volume",field:"total_volume",align:"center"},{name:"supplier",label:"Supplier",field:"supplier",align:"center"},{name:"creater",label:"Creater",field:"creater",align:"center"},{name:"create_time",label:"Create_time",field:"create_time",align:"center"},{name:"update_time",label:"Update_time",field:"update_time",align:"center"},{name:"action",label:"Action",align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,options:i["a"].getItem("goods_code"),newAsn:{creater:""},newFormData:{asn_code:"",supplier:"",goods_code:[],goods_qty:[],creater:""},goodsData1:{code:"",qty:""},goodsData2:{code:"",qty:""},editid:0,editFormData:{},editMode:!1,sortedForm:!1,sortedid:0,deleteForm:!1,deleteid:0,preloadForm:!1,preloadid:0,presortForm:!1,presortid:0,viewForm:!1,viewAsn:"",viewid:0,printObj:{id:"printMe",popTitle:"Advance Shipment Notice"}}},methods:{getList(){var t=this;t.$q.localStorage.has("auth")&&Object(n["d"])(t.pathname+"list/",{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var o=e.previous.split(":")[0];e.previous.replace(o,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var a=e.next.split(":")[0];e.next.replace(a,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;t.$q.localStorage.has("auth")&&Object(n["d"])(t.pathname_previous,{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var o=e.previous.split(":")[0];e.previous.replace(o,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var a=e.next.split(":")[0];e.next.replace(a,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;t.$q.localStorage.has("auth")&&Object(n["d"])(t.pathname_next,{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var o=e.previous.split(":")[0];e.previous.replace(o,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var a=e.next.split(":")[0];e.next.replace(a,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},newFormOpen(){var t=this;t.newForm=!0,t.newAsn.creater=t.login_name,Object(n["f"])(t.pathname+"list/",t.newAsn).then((e=>{t.newFormData.asn_code=e.asn_code})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataSubmit(){var t=this;t.newFormData.creater=t.login_name,""!==t.goodsData1.code&&""!==t.goodsData1.qty&&(t.newFormData.goods_code.push(t.goodsData1.code),t.newFormData.goods_qty.push(t.goodsData1.qty)),""!==t.goodsData2.code&&""!==t.goodsData2.qty&&(t.newFormData.goods_code.push(t.goodsData2.code),t.newFormData.goods_qty.push(t.goodsData2.qty)),Object(n["f"])(t.pathname+"detail/",t.newFormData).then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.getList(),t.newDataCancel(),t.$q.notify({message:"Success Create",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataCancel(){var t=this;t.newForm=!1,t.newFormData={asn_code:"",supplier:"",goods_code:[],goods_qty:[],creater:""},t.goodsDataClear()},goodsDataClear(){var t=this;t.goodsData1={code:"",qty:""},t.goodsData2={code:"",qty:""}},editData(t){var e=this;e.goodsDataClear(),t.asn_status>1?e.$q.notify({message:t.asn_code+" has been deliveried , can not be edit",icon:"close",color:"negative"}):(e.newFormData.asn_code=t.asn_code,e.newFormData.supplier=t.supplier,Object(n["d"])(e.pathname+"detail/?asn_code="+t.asn_code).then((o=>{e.editMode=!0,e.editid=t.id,o.results.forEach(((t,o)=>{0===o?e.goodsData1={code:t.goods_code,qty:t.goods_qty}:1===o&&(e.goodsData2={code:t.goods_code,qty:t.goods_qty})}))})))},editDataSubmit(){var t=this;t.newFormData.creater=t.login_name,""!==t.goodsData1.code&&""!==t.goodsData1.qty&&(t.newFormData.goods_code.push(t.goodsData1.code),t.newFormData.goods_qty.push(t.goodsData1.qty)),""!==t.goodsData2.code&&""!==t.goodsData2.qty&&(t.newFormData.goods_code.push(t.goodsData2.code),t.newFormData.goods_qty.push(t.goodsData2.qty)),Object(n["g"])(t.pathname+"detail/",t.newFormData).then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.editDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},editDataCancel(){var t=this;t.editMode=!1,t.editid=0,t.newFormData={asn_code:"",supplier:"",goods_code:[],goods_qty:[],creater:""},t.goodsDataClear()},deleteData(t){var e=this;e.deleteForm=!0,e.deleteid=t},deleteDataSubmit(){var t=this;Object(n["c"])(t.pathname+"list/"+t.deleteid+"/").then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.deleteDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var t=this;t.deleteForm=!1,t.deleteid=0},preloadData(t){var e=this;e.preloadForm=!0,e.preloadid=t},preloadDataSubmit(){var t=this;Object(n["f"])(t.pathname+"preload/"+t.preloadid+"/",{}).then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.preloadDataCancel(),t.getList(),t.$q.notify({message:"Success Confirm ASN Delivery",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},preloadDataCancel(){var t=this;t.preloadForm=!1,t.preloadid=0},presortData(t){var e=this;e.presortForm=!0,e.presortid=t},presortDataSubmit(){var t=this;Object(n["f"])(t.pathname+"presort/"+t.presortid+"/",{}).then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.presortDataCancel(),t.getList(),t.$q.notify({message:"Success Confirm ASN Delivery",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},presortDataCancel(){var t=this;t.presortForm=!1,t.presortid=0},filterFn(t,e,o){var a=this;t.length<1?o():e((()=>{const e=t.toLowerCase();Object(n["d"])("goods/?goods_code__icontains="+e).then((t=>{var e=[];t.results.forEach((t=>{e.push(t.goods_code)})),i["a"].set("goods_code",e),a.options=i["a"].getItem("goods_code")})).catch((t=>{a.$q.notify({message:t.detail,icon:"close",color:"negative"})}))}))},sortedData(t){var e=this;e.goodsDataClear(),3!==t.asn_status?e.$q.notify({message:t.asn_code+" Not in pre_sorted status , can not be edit",icon:"close",color:"negative"}):(e.newFormData.asn_code=t.asn_code,e.newFormData.supplier=t.supplier,Object(n["d"])(e.pathname+"detail/?asn_code="+t.asn_code).then((o=>{e.sortedForm=!0,e.sortedid=t.id,o.results.forEach(((t,o)=>{0===o?e.goodsData1={code:t.goods_code,qty:t.goods_actual_qty}:1===o&&(e.goodsData2={code:t.goods_code,qty:t.goods_actual_qty})}))})))},sortedDataSubmit(){var t=this;t.newFormData.creater=t.login_name,""!==t.goodsData1.code&&""!==t.goodsData1.qty&&(t.newFormData.goods_code.push(t.goodsData1.code),t.newFormData.goods_qty.push(t.goodsData1.qty)),""!==t.goodsData2.code&&""!==t.goodsData2.qty&&(t.newFormData.goods_code.push(t.goodsData2.code),t.newFormData.goods_qty.push(t.goodsData2.qty)),Object(n["f"])(t.pathname+"sorted/"+t.sortedid+"/",t.newFormData).then((e=>{console.log(e),400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.sortedDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},sortedDataCancel(){var t=this;t.sortedForm=!1,t.sortedid=0,t.newFormData={asn_code:"",supplier:"",goods_code:[],goods_qty:[],creater:""},t.goodsDataClear()},viewData(t){var e=this;Object(n["a"])(e.pathname+"viewprint/"+t.id+"/").then((o=>{e.viewprint_table=o.asn_detail,e.warehouse_detail=o.warehouse_detail,e.supplier_detail=o.supplier_detail,e.viewAsn=t.asn_code,e.viewForm=!0}))}},created(){var t=this;t.$q.localStorage.has("openid")?t.openid=t.$q.localStorage.getItem("openid"):(t.openid="",t.$q.localStorage.set("openid","")),t.$q.localStorage.has("login_name")?t.login_name=t.$q.localStorage.getItem("login_name"):(t.login_name="",t.$q.localStorage.set("login_name","")),t.$q.localStorage.has("auth")?(t.authin="1",t.getList()):t.authin="0",i["a"].has("goods_code")||i["a"].set("goods_code",[])},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},l=r,c=o("2877"),d=o("168a"),p=o("eaac"),u=o("e7a9"),g=o("9c40"),m=o("05c0"),_=o("2c91"),h=o("27f9"),f=o("0016"),v=o("bd08"),y=o("db86"),b=o("1c1c"),q=o("66e5"),x=o("4074"),D=o("0170"),w=o("24e8"),k=o("f09f"),C=o("d847"),S=o("a370"),F=o("ddd8"),$=o("2bb1"),N=o("714f"),O=o("7f67"),E=o("eebe"),Q=o.n(E),L=Object(c["a"])(l,a,s,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(L);e["default"]=L.exports;Q()(L,"components",{QTable:p["a"],QBtnGroup:u["a"],QBtn:g["a"],QTooltip:m["a"],QSpace:_["a"],QInput:h["a"],QIcon:f["a"],QTr:v["a"],QTd:y["a"],QList:b["a"],QItem:q["a"],QItemSection:x["a"],QItemLabel:D["a"],QDialog:w["a"],QCard:k["a"],QBar:C["a"],QCardSection:S["a"],QSelect:F["a"],QMarkupTable:$["a"]}),Q()(L,"directives",{Ripple:N["a"],ClosePopup:O["a"]})}}]);
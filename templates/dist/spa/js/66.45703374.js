(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"5ab5":function(e,t,a){"use strict";var l=a("85b8"),o=a.n(l);t["default"]=o.a},6091:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{"row-key":"id","table-style":{height:e.height},flat:"","hide-bottom":""},scopedSlots:e._u([{key:"top",fn:function(){return[a("div",{staticClass:"q-pa-md"},[a("div",[a("div",{staticClass:"row"},[a("q-btn-group",[a("q-btn",{attrs:{label:e.$t("upload_center.downloadgoodstemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadgoodstemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadgoodstemplate"))+"\n                  ")])],1),a("q-btn",{attrs:{label:e.$t("upload_center.downloadcustomertemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadcustomertemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadcustomertemplate"))+"\n                  ")])],1),a("q-btn",{attrs:{label:e.$t("upload_center.downloadsuppliertemplate"),icon:"cloud_download"},on:{click:function(t){return e.downloadsuppliertemplate()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("upload_center.downloadsuppliertemplate"))+"\n                  ")])],1)],1)],1),a("q-tr",[a("q-td",{key:"uploadgoodslistfile"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.goodslistfile_pathname,method:"post",headers:[{name:"token",value:e.token},{name:"language",value:e.lang}],"field-name":function(e){return"file"},label:e.$t("upload_center.uploadgoodslistfile"),accept:".xlsx,csv,xls/*"},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)])]),a("q-td",{key:"uploadcustomerfile"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.customerfile_pathname,method:"post",headers:[{name:"token",value:e.token},{name:"language",value:e.lang}],"field-name":function(e){return"file"},label:e.$t("upload_center.uploadcustomerfile"),accept:".xlsx,csv,xls/*"},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)])]),a("q-td",{key:"uploadsupplierfile"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-md row items-start"},[a("q-uploader",{staticStyle:{width:"300px",height:"200px"},attrs:{url:e.supplierfile_pathname,method:"post",headers:[{name:"token",value:e.token},{name:"language",value:e.lang}],"field-name":function(e){return"file"},label:e.$t("upload_center.uploadsupplierfile"),accept:".xlsx,csv,xls/*"},on:{rejected:e.onRejected,added:e.getfileinfo}})],1)])])],1)],1)])]},proxy:!0}])})],1)],1)},o=[],n=a("3004"),s=a("18d6"),i=a("b06b"),d={name:"Pageaddupload",data(){return{height:"",token:s["a"].getItem("openid"),lang:s["a"].getItem("lang"),capitalfile_pathname:n["b"]+"uploadfile/capitalfileadd/",customerfile_pathname:n["b"]+"uploadfile/customerfileadd/",freightfile_pathname:n["b"]+"uploadfile/freightfileadd/",goodslistfile_pathname:n["b"]+"uploadfile/goodslistfileadd/",supplierfile_pathname:n["b"]+"uploadfile/supplierfileadd/"}},methods:{checkFileType(e){return e.filter((e=>".xlsx, xls,csv/*"===e.type))},onRejected(e){this.$q.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})},getfileinfo(e){console.log(e)},downloadgoodstemplate(){var e=this;s["a"].has("auth")?s["a"].has("lang")&&"zh-hans"===s["a"].getItem("lang")?Object(i["a"])(n["b"]+"media/upload_example/goodslist_cn.xlsx"):Object(i["a"])(n["b"]+"media/upload_example/goodslist_en.xlsx"):e.$q.notify({message:e.$t("notice.loginerror"),color:"negative",icon:"warning"})},downloadcustomertemplate(){var e=this;s["a"].has("auth")?s["a"].has("lang")&&"zh-hans"===s["a"].getItem("lang")?Object(i["a"])(n["b"]+"media/upload_example/customer_cn.xlsx"):Object(i["a"])(n["b"]+"media/upload_example/customer_en.xlsx"):e.$q.notify({message:e.$t("notice.loginerror"),color:"negative",icon:"warning"})},downloadsuppliertemplate(){var e=this;s["a"].has("auth")?s["a"].has("lang")&&"zh-hans"===s["a"].getItem("lang")?Object(i["a"])(n["b"]+"media/upload_example/supplier_cn.xlsx"):Object(i["a"])(n["b"]+"media/upload_example/supplier_en.xlsx"):e.$q.notify({message:e.$t("notice.loginerror"),color:"negative",icon:"warning"})}},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-480)+"px":e.height=e.$q.screen.height-480+"px"},updated(){},destroyed(){}},r=d,c=a("42e1"),p=a("5ab5"),u=a("eaac"),m=a("e7a9"),f=a("9c40"),g=a("05c0"),h=a("bd08"),b=a("db86"),x=a("ee89"),_=a("eebe"),v=a.n(_),w=Object(c["a"])(r,l,o,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(w);t["default"]=w.exports;v()(w,"components",{QTable:u["a"],QBtnGroup:m["a"],QBtn:f["a"],QTooltip:g["a"],QTr:h["a"],QTd:b["a"],QUploader:x["a"]})},"85b8":function(e,t){}}]);
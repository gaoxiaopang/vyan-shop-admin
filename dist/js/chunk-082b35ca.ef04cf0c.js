(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-082b35ca"],{"2c5d":function(t,e,n){"use strict";var l=n("eb12"),a=n.n(l);a.a},"7a87":function(t,e,n){t.exports={currentColor:"#1890ff"}},b7f4:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-view",{staticClass:"app-common"},[n("app-filter",{scopedSlots:t._u([{key:"query",fn:function(){return[n("el-form",{staticClass:"product-form",attrs:{inline:!0,model:t.listQuery,"label-width":"140px",size:"small","label-position":"right"}},[n("el-form-item",{attrs:{label:"网站名称"}},[n("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1),n("el-form-item",{attrs:{label:"网站链接"}},[n("el-input",{attrs:{placeholder:"商品货号"},model:{value:t.listQuery.productSn,callback:function(e){t.$set(t.listQuery,"productSn",e)},expression:"listQuery.productSn"}})],1)],1)]},proxy:!0},{key:"right",fn:function(){return[n("el-button",{staticClass:"btn-reset",attrs:{icon:"el-icon-back",size:"small"}},[t._v("重置")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.handleSearch()}}},[t._v("搜索")])]},proxy:!0}])}),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"productTable",staticClass:"app-table",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),n("el-table-column",{attrs:{label:"网站名称",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.siteName))]}}])}),n("el-table-column",{attrs:{label:"网站链接",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{attrs:{href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.url))])]}}])}),n("el-table-column",{attrs:{label:"审核状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),n("el-table-column",{attrs:{label:"联系人",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.email))]}}])}),n("el-table-column",{attrs:{label:"更新时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])}),n("el-table-column",{attrs:{label:"排列序号",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),n("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"handle-icon"},[n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("预览")]),n("i",{staticClass:"el-icon-document",on:{click:function(n){return t.handleShowProduct(e.$index,e.row)}}})]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("编辑")]),n("i",{staticClass:"el-icon-edit",on:{click:function(n){return t.handleUpdateProduct(e.$index,e.row)}}})]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v("删除")]),n("i",{staticClass:"el-icon-delete",on:{click:function(n){return t.handleDelete(e.$index,e.row)}}})])],1)]}}])})],1)],1),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},a=[],o=n("b775");function i(t){return Object(o["a"])({url:"/common/list",method:"get",params:t})}var r={keyword:null,pageNum:1,pageSize:5,publishStatus:null,verifyStatus:null,productSn:null,productCategoryId:null,brandId:null},s={name:"ProductList",data:function(){return{listQuery:Object.assign({},r),list:[],total:0,loading:!0,selectProductCateValue:null,multipleSelection:[],productCateOptions:[],brandOptions:[],publishStatusOptions:[{value:1,label:"上架"},{value:0,label:"下架"}],verifyStatusOptions:[{value:1,label:"审核通过"},{value:0,label:"未审核"}]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,i().then(function(e){t.loading=!1,t.list=e.data.list,t.total=e.data.total}).catch(function(e){t.loading=!1})},addProduct:function(){this.$router.push({path:"/product/add"})},handleSearch:function(){},handleSelectionChange:function(){},handleSizeChange:function(){},handleCurrentChange:function(){}}},c=s,u=(n("dc27"),n("2c5d"),n("2877")),d=Object(u["a"])(c,l,a,!1,null,"03d795b0",null);e["default"]=d.exports},dc27:function(t,e,n){"use strict";var l=n("7a87"),a=n.n(l);a.a},eb12:function(t,e,n){}}]);
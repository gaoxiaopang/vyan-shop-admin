(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bd7c9ba"],{"0109":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-view",{staticClass:"product-category-add"},[r("detail",{staticClass:"product-category-detail",attrs:{"is-edit":!1}})],1)},o=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-container",attrs:{shadow:"never"}},[r("el-form",{ref:"productCateFrom",attrs:{model:t.productCate,rules:t.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[r("el-input",{model:{value:t.productCate.name,callback:function(e){t.$set(t.productCate,"name",e)},expression:"productCate.name"}})],1),r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{attrs:{placeholder:"请选择分类"},model:{value:t.productCate.parentId,callback:function(e){t.$set(t.productCate,"parentId",e)},expression:"productCate.parentId"}},t._l(t.selectProductCateList,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),r("el-form-item",{attrs:{label:"数量单位"}},[r("el-input",{model:{value:t.productCate.productUnit,callback:function(e){t.$set(t.productCate,"productUnit",e)},expression:"productCate.productUnit"}})],1),r("el-form-item",{attrs:{label:"排序"}},[r("el-input",{model:{value:t.productCate.sort,callback:function(e){t.$set(t.productCate,"sort",e)},expression:"productCate.sort"}})],1),r("el-form-item",{attrs:{label:"是否显示"}},[r("el-radio-group",{model:{value:t.productCate.showStatus,callback:function(e){t.$set(t.productCate,"showStatus",e)},expression:"productCate.showStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),r("el-form-item",{attrs:{label:"是否显示在导航栏"}},[r("el-radio-group",{model:{value:t.productCate.navStatus,callback:function(e){t.$set(t.productCate,"navStatus",e)},expression:"productCate.navStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),r("el-form-item",{attrs:{label:"分类图标"}},[r("single-upload",{model:{value:t.productCate.icon,callback:function(e){t.$set(t.productCate,"icon",e)},expression:"productCate.icon"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleAddFilterAttr()}}},[t._v("保存")])],1)],1)],1)},n=[],c=r("aab4"),i=r("b775");function s(t){return Object(i["a"])({url:"/productAttribute/info",method:"post",data:t})}var l={description:"",icon:"",keywords:"",name:"",navStatus:0,parentId:0,productUnit:"",showStatus:0,sort:0,productAttributeIdList:[]},d={name:"ProductCateDetail",filters:{filterLabelFilter:function(t){return 0===t?"筛选属性":""}},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{productCate:Object.assign({},l),selectProductCateList:[],rules:{name:[{required:!0,message:"请输入品牌名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]},filterAttrs:[],filterProductAttrList:[{value:[]}]}},created:function(){var t=this;this.isEdit?(Object(c["c"])(this.$route.query.id).then(function(e){t.productCate=e.data}),s(this.$route.query.id).then(function(e){if(null!=e.data&&e.data.length>0){t.filterProductAttrList=[];for(var r=0;r<e.data.length;r++)t.filterProductAttrList.push({key:Date.now()+r,value:[e.data[r].attributeCategoryId,e.data[r].attributeId]})}})):this.productCate=Object.assign({},l),this.getSelectProductCateList()},methods:{getSelectProductCateList:function(){var t=this;Object(c["b"])(0,{pageSize:100,pageNum:1}).then(function(e){t.selectProductCateList=e.data.list,t.selectProductCateList.unshift({value:0,label:"无上级分类"})})},onSubmit:function(t){var e=this;this.$refs[t].validate(function(r){if(!r)return e.$message({message:"验证失败",type:"error",duration:1e3}),!1;e.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?(e.productCate.productAttributeIdList=e.getProductAttributeIdList(),Object(c["d"])(e.$route.query.id,e.productCate).then(function(t){e.$message({message:"修改成功",type:"success",duration:1e3}),e.$router.back()})):(e.productCate.productAttributeIdList=e.getProductAttributeIdList(),Object(c["a"])(e.productCate).then(function(r){e.$refs[t].resetFields(),e.resetForm(t),e.$message({message:"提交成功",type:"success",duration:1e3})}))})})},resetForm:function(t){this.$refs[t].resetFields(),this.productCate=Object.assign({},l),this.getSelectProductCateList(),this.filterProductAttrList=[{value:[]}]}}},p=d,f=r("2877"),b=Object(f["a"])(p,u,n,!1,null,"544c473f",null),m=b.exports,C={name:"AddProductCate",components:{Detail:m}},h=C,v=(r("a0e7"),Object(f["a"])(h,a,o,!1,null,null,null));e["default"]=v.exports},a0e7:function(t,e,r){"use strict";var a=r("d6bf"),o=r.n(a);o.a},aab4:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return u}),r.d(e,"c",function(){return n}),r.d(e,"d",function(){return c});var a=r("b775");function o(){return Object(a["a"])({url:"/productCategory/list/",method:"get"})}function u(t){return Object(a["a"])({url:"/productCategory/create",method:"post",data:t})}function n(t){return Object(a["a"])({url:"/productCategory/create",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/productCategory/create",method:"post",data:t})}},d6bf:function(t,e,r){t.exports={currentColor:"#1890ff"}}}]);
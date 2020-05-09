webpackJsonp([17],{Eftz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ptSt1"},[a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:2}},[t._v("\n         \n      ")]),t._v(" "),a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:6}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:t.requestData.username,callback:function(e){t.$set(t.requestData,"username",e)},expression:"requestData.username"}})],1),t._v(" "),a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:1}},[t._v("\n         \n      ")]),t._v(" "),a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:6}},[a("el-input",{attrs:{placeholder:"用户邮箱"},model:{value:t.requestData.email,callback:function(e){t.$set(t.requestData,"email",e)},expression:"requestData.email"}})],1),t._v(" "),a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:3}},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(e){t.clickSearch()}}},[t._v("搜索")])],1),t._v(" "),a("el-col",{staticStyle:{"font-size":"24px","margin-top":"30px"},attrs:{span:3}},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"info"},on:{click:function(e){t.clearSearch()}}},[t._v("清空搜索")])],1)],1),t._v(" "),a("div",{staticClass:"ptSt2"},[a("div",{staticStyle:{width:"100%",height:"45px","background-color":"#eef9f0","text-align":"center","font-size":"24px","padding-top":"15px"}},[t._v("\n        后台用户管理\n      ")]),t._v(" "),a("div",{staticStyle:{width:"100%"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"userID",label:"ID",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"username",label:"用户名",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"age",label:"用户年龄",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"email",label:"用户邮箱",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"modifyTime",label:"修改时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.clickEnabled(e.row)}}},[t._v("禁用")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{attrs:{type:"text",disabled:""},on:{click:function(a){t.clickEnabled(e.row)}}},[t._v("禁用")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.clickDisable(e.row)}}},[t._v("启用")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{type:"text",disabled:""},on:{click:function(a){t.clickDisable(e.row)}}},[t._v("启用")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.clickUpdate(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.clickDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"10px","margin-left":"400px"}},[a("el-row",[a("el-pagination",{attrs:{"current-page":t.pageNo,"page-sizes":[5,10,20,50],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNo=e}}})],1)],1)],1)])},staticRenderFns:[]};var i=a("VU/8")({name:"managementUser",data:function(){return{manageData:{identityLevel:1},pageSize:5,pageNo:1,total:"",requestData:{username:"",email:""},updateData:{status:""},tableData:[]}},created:function(){this.getManageList()},methods:{getManageList:function(){var t=this;this.$get(this.$api.module.operationUser+"?status=-1&pageSize="+this.pageSize+"&pageNo="+this.pageNo).then(function(e){200==e.status?(t.tableData=e.data,t.total=e.page.totalNum,t.$message({message:"获取数据成功！",type:"success"})):t.$message({message:"获取数据失败！",type:"error"})})},clickEnabled:function(t){var e=this;this.updateData.status=2,this.$patch(this.$api.module.operationUser+"/"+t.userID,this.updateData).then(function(t){200==t.status?(e.getManageList(),e.$message({message:"禁用成功！",type:"success"})):e.$message({message:"禁用失败！",type:"error"})})},clickDisable:function(t){var e=this;this.updateData.status=1,this.$patch(this.$api.module.operationUser+"/"+t.userID,this.updateData).then(function(t){200==t.status?(e.getManageList(),e.$message({message:"启用成功！",type:"success"})):e.$message({message:"启用失败！",type:"error"})})},clickUpdate:function(t){this.$router.push({name:"addOrdinaryUser",params:{updateData:t}})},clickDelete:function(t){var e=this;this.$drop(this.$api.module.operationUser+"/"+t.userID).then(function(t){200==t.status?(e.getManageList(),e.$message({message:"删除成功！",type:"success"})):e.$message({message:"删除失败！",type:"error"})})},clickSearch:function(){var t=this;this.$get(this.$api.module.operationUser+"/property?username="+this.requestData.username+"&email="+this.requestData.email+"&pageSize="+this.pageSize+"&pageNo="+this.pageNo).then(function(e){200==e.status?(t.tableData=e.data,t.total=e.page.totalNum,t.$message({message:"获取数据成功！",type:"success"})):t.$message({message:"获取数据失败！",type:"error"})})},clearSearch:function(){this.requestData={username:"",email:""},this.getManageList()},handleSizeChange:function(t){this.pageSize=t,""!=this.requestData.username||""!=this.requestData.email?this.clickSearch():this.getManageList()},handleCurrentChange:function(){""!=this.requestData.username||""!=this.requestData.email?this.clickSearch():this.getManageList()}}},s,!1,function(t){a("TbcE")},"data-v-355c51ee",null);e.default=i.exports},TbcE:function(t,e){}});
//# sourceMappingURL=17.1f0a20c59eca52222eb2.js.map
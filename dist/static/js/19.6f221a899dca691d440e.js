webpackJsonp([19],{"B/XP":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"upadteInternationalNews",data:function(){return{pageSize:5,pageNo:1,total:"",searchDate:null,searchData:{title:"",startTime:null,endTime:null,author:""},formData:[],requestData:{status:""}}},created:function(){this.getInternationalList()},methods:{getInternationalList:function(){var t=this;this.$get(this.$api.module.operationNews+"?status=1&type=1&pageSize="+this.pageSize+"&pageNo="+this.pageNo).then(function(e){200==e.status?(t.formData=e.data,t.total=e.page.totalNum,t.$message({message:"获取数据成功！",type:"success"})):t.$message({message:"获取数据失败！",type:"error"})})},updateNews:function(t){this.$router.push({name:"addInternationalNews",params:{updateData:this.formData[t]}})},deleteNews:function(t){alert(t)},recallNews:function(t){var e=this;this.requestData.status=2,this.$patch(this.$api.module.operationNews+"/"+this.formData[t].newsID,this.requestData).then(function(a){200==a.status?(e.formData.splice(t,1),e.$message({message:"撤回成功！",type:"success"})):e.$message({message:"撤回失败！",type:"error"})})},releaseNews:function(t){alert(t)},clickSearch:function(){var t=this;if(null!=this.searchDate&&""!=this.searchDate){var e=new Date(this.searchDate[0]),a=new Date(this.searchDate[1]);this.searchData.startTime=e.getFullYear()+"-"+this.p(e.getMonth()+1)+"-"+this.p(e.getDate()),this.searchData.endTime=a.getFullYear()+"-"+this.p(a.getMonth()+1)+"-"+this.p(a.getDate())}this.$get(this.$api.module.operationNews+"/property?title="+this.searchData.title+"&startTime="+this.searchData.startTime+"&endTime="+this.searchData.endTime+"&author="+this.searchData.author+"&status=1&type=1&pageSize="+this.pageSize+"&pageNo="+this.pageNo).then(function(e){200==e.status?(t.formData=e.data,t.total=e.page.totalNum,t.$message({message:"获取数据成功！",type:"success"})):t.$message({message:"获取数据失败！",type:"error"})}),this.clearSearch()},p:function(t){return t<10?"0"+t:t},clearSearch:function(){this.searchData.title="",this.searchData.author="",this.searchData.startTime=null,this.searchData.endTime=null,this.searchDate=null},handleSizeChange:function(t){this.pageSize=t,this.getInternationalList()},handleCurrentChange:function(){this.getInternationalList()}},mounted:function(){document.cookie}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"16px"}},[a("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"5px"}},[a("el-col",{attrs:{span:2}},[t._v("\n       \n    ")]),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.searchData.title,callback:function(e){t.$set(t.searchData,"title",e)},expression:"searchData.title"}})],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.searchDate,callback:function(e){t.searchDate=e},expression:"searchDate"}})],1),t._v(" "),a("el-col",{staticStyle:{"margin-left":"22px"},attrs:{span:5}},[a("el-input",{attrs:{placeholder:"请输入作者"},model:{value:t.searchData.author,callback:function(e){t.$set(t.searchData,"author",e)},expression:"searchData.author"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"5px"}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:19}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.clickSearch()}}},[t._v("搜索")])],1),t._v(" "),a("el-col",{staticStyle:{"margin-left":"30px"},attrs:{span:4}},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.clearSearch()}}},[t._v("清除搜索")])],1)],1),t._v(" "),t._l(t.formData,function(e,s){return a("div",{staticClass:"ptSt"},[a("el-row",{staticStyle:{"margin-bottom":"15px","padding-top":"20px","text-align":"center","font-size":"24px"}},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"10px","margin-top":"5px","font-size":"16px","padding-top":"10px"}},[a("el-col",{staticStyle:{"text-align":"left","margin-left":"50px"},attrs:{span:3}},[t._v("\n        新闻编号: "+t._s(e.newsID)+"\n      ")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-left":"50px"},attrs:{span:3}},[t._v("\n        新闻作者: "+t._s(e.managerID)+"\n      ")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-left":"50px"},attrs:{span:6}},[t._v("\n        创建时间: "+t._s(e.createTime)+"\n      ")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-left":"50px"},attrs:{span:6}},[t._v("\n        发布时间: "+t._s(e.pushTime)+"\n      ")])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px","font-size":"16px","padding-top":"10px"}},[a("el-col",{attrs:{span:3}},[t._v(" ")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:5}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updateNews(s)}}},[t._v("修改新闻")])],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:5}},[a("el-button",{attrs:{type:"danger",disabled:""},on:{click:function(e){t.deleteNews(s)}}},[t._v("删除新闻")])],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:5}},[a("el-button",{attrs:{type:"warning"},on:{click:function(e){t.recallNews(s)}}},[t._v("撤回新闻")])],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:5}},[a("el-button",{attrs:{type:"success",disabled:""},on:{click:function(e){t.releaseNews(s)}}},[t._v("发布新闻")])],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v(" ")])],1)],1)}),t._v(" "),a("div",{staticStyle:{"margin-bottom":"10px","margin-left":"400px"}},[a("el-row",[a("el-pagination",{attrs:{"current-page":t.pageNo,"page-sizes":[5,10,20,50],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.pageNo=e}}})],1)],1)],2)},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("WHmf")},"data-v-2ffa7fea",null);e.default=i.exports},WHmf:function(t,e){}});
//# sourceMappingURL=19.6f221a899dca691d440e.js.map
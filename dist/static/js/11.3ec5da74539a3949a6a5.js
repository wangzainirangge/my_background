webpackJsonp([11],{KDGw:function(t,e){},TVz8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"addEducationNews",data:function(){return{isAdd:1,isUpdate:1,fileList:[],dialogVisible:!1,pickerOptions:{shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},requestData:{managerID:"",title:"",label:"",type:"",articleAbstract:"",pushTime:"",imgBase:"",msgTXT:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>'},myConfigTXT:{autoHeightEnabled:!1,initialFrameHeight:900,initialFrameWidth:900,serverUrl:"http://localhost:8080/UEditor-jsp/jsp/controller.jsp"}}},components:{},methods:{exceedFile:function(t,e){this.$notify.warning({title:"警告",message:"只能选择1个文件，当前共选择了 "+(t.length+e.length)+" 个"})},editorReady:function(t){console.log("编辑器实例"+t.key+": ",t)},handleSuccess01:function(t,e,a){this.$notify.success({title:"成功",message:"文件上传成功"})},handleRemove:function(){this.isUpdate=2},handlePreview01:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},beforeUpload:function(t){var e=this,a=new FileReader;a.readAsDataURL(t),a.onload=function(t){this.result;e.requestData.imgBase=this.result,e.requestData.type=6,1==e.isAdd?e.addNews():e.updateNews()}},updateBase:function(t){var e=this,a=new FileReader;a.readAsDataURL(t),a.onload=function(t){var a=this.result;alert(a),e.imgUrl=a}},clickSubmitBtn:function(){this.$refs.icon.submit(),1==this.isUpdate&&2==this.isAdd&&this.updateNews()},addNews:function(){var t=this;this.$post(this.$api.module.operationNews,this.requestData).then(function(e){200==e.status?(t.$message({message:"添加成功！",type:"success"}),t.refreshData(),t.$router.push({name:"educationNewsDraftBox"})):t.$message({message:"添加失败！",type:"error"})})},updateNews:function(){var t=this;this.$put(this.$api.module.operationNews+"/"+this.requestData.newsID,this.requestData).then(function(e){200==e.status?(t.$message({message:"修改成功！",type:"success"}),t.refreshData(),1==t.requestData.status?t.$router.push({name:"upadteEducationNews"}):t.$router.push({name:"educationNewsDraftBox"})):t.$message({message:"修改失败！",type:"error"})})},refreshData:function(){this.requestData={managerID:"",title:"",label:"",type:"",articleAbstract:"",pushTime:"",imgBase:"",msgTXT:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>'}}},mounted:function(){var t=this;this.requestData.managerID=this.getCookie("manageID");var e=this.$route.params.updateData;if(e){this.isAdd=2;var s=e.newsID;this.$get(this.$api.module.operationNews+"/"+s).then(function(e){200==e.status?(t.requestData=e.data,t.fileList.push({name:t.requestData.photoUrl,url:a("gFkW")("./"+t.requestData.photoUrl)}),t.$message({message:"获取数据成功！",type:"success"})):t.$message({message:"获取数据失败！",type:"error"})})}document.cookie="tyle=1"}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"16px"}},[a("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"5px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      新闻标题  \n    ")]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.requestData.title,callback:function(e){t.$set(t.requestData,"title",e)},expression:"requestData.title"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      新闻标签  \n    ")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{placeholder:"请输入标签"},model:{value:t.requestData.label,callback:function(e){t.$set(t.requestData,"label",e)},expression:"requestData.label"}})],1),t._v(" "),a("el-col",{staticStyle:{"font-size":"12px","margin-top":"20px",color:"#5e6d82"},attrs:{span:8}},[t._v("\n        (标签之间请用'/'符号隔开)\n      ")])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      新闻摘要  \n    ")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入摘要"},model:{value:t.requestData.articleAbstract,callback:function(e){t.$set(t.requestData,"articleAbstract",e)},expression:"requestData.articleAbstract"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      发布日期  \n    ")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right","picker-options":t.pickerOptions},model:{value:t.requestData.pushTime,callback:function(e){t.$set(t.requestData,"pushTime",e)},expression:"requestData.pushTime"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      封面图片  \n    ")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-upload",{ref:"icon",attrs:{action:"#",accept:"image/png,image/gif,image/jpg,image/jpeg","list-type":"picture-card",limit:1,"auto-upload":!1,"file-list":t.fileList,"on-exceed":t.exceedFile,"on-success":t.handleSuccess01,"on-preview":t.handlePreview01,"on-remove":t.handleRemove,"before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"40px"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"8px"},attrs:{span:2}},[t._v("\n      新闻内容  \n    ")]),t._v(" "),a("el-col",{attrs:{span:20}},[a("vue-ueditor-wrap",{attrs:{config:t.myConfigTXT},on:{ready:t.editorReady},model:{value:t.requestData.msgTXT,callback:function(e){t.$set(t.requestData,"msgTXT",e)},expression:"requestData.msgTXT"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"0px"}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:21}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.clickSubmitBtn()}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("KDGw")},"data-v-60da33ea",null);e.default=r.exports}});
//# sourceMappingURL=11.3ec5da74539a3949a6a5.js.map
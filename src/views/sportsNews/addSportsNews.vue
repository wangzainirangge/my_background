<template>
  <div style="font-size: 16px">
    <el-row style="margin-bottom: 20px;margin-top: 5px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        新闻标题&nbsp;&nbsp;
      </el-col>
      <el-col :span="18">
        <el-input v-model="requestData.title" placeholder="请输入标题"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        新闻标签&nbsp;&nbsp;
      </el-col>
      <el-col :span="20">
        <el-col :span="12">
          <el-input v-model="requestData.label" placeholder="请输入标签"></el-input>
        </el-col>
        <el-col :span="8" style="font-size: 12px;margin-top: 20px;color: #5e6d82">
          (标签之间请用'/'符号隔开)
        </el-col>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        新闻摘要&nbsp;&nbsp;
      </el-col>
      <el-col :span="20">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入摘要"
          v-model="requestData.articleAbstract">
        </el-input>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        发布日期&nbsp;&nbsp;
      </el-col>
      <el-col :span="20">
        <el-date-picker
          v-model="requestData.pushTime"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        封面图片&nbsp;&nbsp;
      </el-col>
      <el-col :span="20">
        <el-upload
          ref="icon"
          action="#"
          accept="image/png,image/gif,image/jpg,image/jpeg"
          list-type="picture-card"
          :limit=1
          :auto-upload="false"
          :file-list="fileList"
          :on-exceed="exceedFile"
          :on-success="handleSuccess01"
          :on-preview="handlePreview01"
          :on-remove="handleRemove"
          :before-upload="beforeUpload">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 40px">
      <el-col :span="2" style="text-align: right;margin-top: 8px">
        新闻内容&nbsp;&nbsp;
      </el-col>
      <el-col :span="20">
        <vue-ueditor-wrap
          @ready="editorReady"
          v-model="requestData.msgTXT"
          :config="myConfigTXT"></vue-ueditor-wrap>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 0px">
      <el-col :span="21" style="text-align: right">
        <el-button type="primary" @click="clickSubmitBtn()">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'addSportsNews',
    data () {
      return {
        isAdd: 1,
        isUpdate: 1,
        fileList: [],
        dialogVisible: false,
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        requestData: {
          managerID: '',
          title: '',
          label: '',
          type: '',
          articleAbstract: '',
          pushTime: '',
          imgBase: '',
          msgTXT: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
        },
        //配置信息
        myConfigTXT: {
          // 编辑器自动被内容撑高
          autoHeightEnabled: false,
          // 初始容器高度
          initialFrameHeight: 900,
          // 初始容器宽度
          initialFrameWidth: 900,
          // 上传文件接口，实现上传图片功能必须的配置，这个地址会在后端配置的时候产生，此处先放上结果
          serverUrl: 'http://localhost:8080/UEditor-jsp/jsp/controller.jsp',

          /*UEDITOR_HOME_URL: '/UEditor/'*/
        }
      }
    },
    components: {},

    methods: {
      // 文件超出个数限制时的钩子
      exceedFile(files, fileList) {
        this.$notify.warning({
          title: '警告',
          message: `只能选择1个文件，当前共选择了 ${files.length + fileList.length} 个`
        });
      },
      editorReady(editorInstance) {
        console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
      },
      // 文件上传成功时的钩子
      handleSuccess01(res, file, fileList) {
        this.$notify.success({
          title: '成功',
          message: `文件上传成功`
        });
      },
      handleRemove(){
        this.isUpdate = 2;
      },
      handlePreview01(file){
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeUpload(file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          // 图片base64化
          var newUrl = this.result;    //图片路径
          _this.requestData.imgBase = this.result;
          _this.requestData.type = 7;
          if (_this.isAdd == 1){
            _this.addNews();
          } else {
            _this.updateNews();
          }
        };


      },
      updateBase(file){
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          // 图片base64化
          var newUrl = this.result;    //图片路径
          alert(newUrl)
          _this.imgUrl = newUrl;
        };
      },
      clickSubmitBtn(){
        this.$refs.icon.submit();
        if (this.isUpdate==1&&this.isAdd==2) {
          this.updateNews();
        }
      },
      addNews(){
        this.$post(this.$api.module.operationNews,this.requestData).then(res => {
          if (res.status == 200){
            this.$message({
              message: '添加成功！',
              type: 'success'
            });
            this.refreshData();
            this.$router.push({name: 'sportsNewsDraftBox'});
          } else {
            this.$message({
              message: '添加失败！',
              type: 'error'
            });
          }
        })
      },
      updateNews(){
        this.$put(this.$api.module.operationNews + '/' + this.requestData.newsID,this.requestData).then(res => {
          if (res.status == 200){
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
            this.refreshData();
            if(this.requestData.status == 1){
              this.$router.push({name: 'updateSportsNews'});
            }else {
              this.$router.push({name: 'sportsNewsDraftBox'});
            }
          } else {
            this.$message({
              message: '修改失败！',
              type: 'error'
            });
          }
        })
      },
      refreshData(){
        this.requestData = {
          managerID: '',
          title: '',
          label: '',
          type: '',
          articleAbstract: '',
          pushTime: '',
          imgBase: '',
          msgTXT: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
        };
      }
    },
    mounted () {
      this.requestData.managerID = this.getCookie('manageID');
      let updateData = this.$route.params.updateData;
      if (updateData){
        this.isAdd = 2;
        let newsID = updateData.newsID
        this.$get(this.$api.module.operationNews + '/' + newsID).then(res => {
          if (res.status == 200){
            this.requestData = res.data;
            this.fileList.push(
              {
                name: this.requestData.photoUrl,
                url: require('D:/IDEA/毕设/img/' + this.requestData.photoUrl)
              }
            )
            this.$message({
              message: '获取数据成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '获取数据失败！',
              type: 'error'
            });
          }
        })
      }
      document.cookie="tyle="+"1";
    }
  }
</script>

<style scoped>

</style>


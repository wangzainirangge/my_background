<template>
  <div>
    <div class="ptSt1">
      <el-row style="margin-bottom: 30px;">
        <el-col :span="2" style="font-size: 24px;margin-top: 30px">
          &nbsp;
        </el-col>
        <el-col :span="6" style="font-size: 24px;margin-top: 30px">
          <el-input v-model="requestData.username" placeholder="用户名"></el-input>
        </el-col>
        <el-col :span="1" style="font-size: 24px;margin-top: 30px">
          &nbsp;
        </el-col>
        <el-col :span="6" style="font-size: 24px;margin-top: 30px">
          <el-input v-model="requestData.email" placeholder="用户邮箱"></el-input>
        </el-col>
        <el-col :span="3" style="font-size: 24px;margin-top: 30px">
          <el-button type="primary" style="float: right" @click="clickSearch()">搜索</el-button>
        </el-col>
        <el-col :span="3" style="font-size: 24px;margin-top: 30px">
          <el-button type="info" style="float: right" @click="clearSearch()">清空搜索</el-button>
        </el-col>
      </el-row>
      <div class="ptSt2">
        <div style="width: 100%;height: 45px;background-color: #eef9f0;text-align: center;font-size: 24px;padding-top: 15px">
          后台用户管理
        </div>
        <div style="width: 100%">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              align="center"
              prop="userID"
              label="ID"
              width="80">
            </el-table-column>
            <el-table-column
              align="center"
              prop="username"
              label="用户名"
              width="80">
            </el-table-column>
            <el-table-column
              align="center"
              prop="age"
              label="用户年龄"
              width="80">
            </el-table-column>
            <el-table-column
              align="center"
              prop="email"
              label="用户邮箱"
              width="160">
            </el-table-column>
            <el-table-column
              align="center"
              prop="createTime"
              label="创建时间"
              width="200">
            </el-table-column>
            <el-table-column
              align="center"
              prop="modifyTime"
              label="修改时间"
              width="200">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="clickEnabled(scope.row)" v-if="scope.row.status==1">禁用</el-button>
                <el-button type="text" @click="clickEnabled(scope.row)" v-if="scope.row.status==2" disabled>禁用</el-button>
                <el-button type="text" @click="clickDisable(scope.row)" v-if="scope.row.status==2">启用</el-button>
                <el-button type="text" @click="clickDisable(scope.row)" v-if="scope.row.status==1" disabled>启用</el-button>
                <el-button type="text" @click="clickUpdate(scope.row)">修改</el-button>
                <el-button type="text" @click="clickDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div style="margin-bottom: 10px;margin-left: 400px">
        <el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="pageNo"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "managementUser",
    data () {
      return {
        manageData: {
          identityLevel: 1
        },
        pageSize:5,
        pageNo:1,
        total: '',
        requestData: {
          username: '',
          email: '',
        },
        updateData: {
          status: ''
        },
        tableData: [],
      }
    },
    created() {
      this.getManageList();
    },
    methods: {
      getManageList(){
        this.$get(this.$api.module.operationUser + '?status=-1&pageSize=' + this.pageSize + "&pageNo=" + this.pageNo).then(res => {
          if (res.status == 200){
            this.tableData = res.data;
            this.total = res.page.totalNum;
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
      },
      clickEnabled(v){
        this.updateData.status = 2;
        this.$patch(this.$api.module.operationUser + '/'+v.userID,this.updateData).then(res => {
          if (res.status == 200){
            this.getManageList();
            this.$message({
              message: '禁用成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '禁用失败！',
              type: 'error'
            });
          }
        })
      },
      clickDisable(v){
        this.updateData.status = 1;
        this.$patch(this.$api.module.operationUser + '/'+v.userID,this.updateData).then(res => {
          if (res.status == 200){
            this.getManageList();
            this.$message({
              message: '启用成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '启用失败！',
              type: 'error'
            });
          }
        })
      },
      clickUpdate(v){
        this.$router.push({name: 'addOrdinaryUser',params:{updateData: v}})
      },
      clickDelete(v){
        this.$drop(this.$api.module.operationUser + '/'+v.userID).then(res => {
          if (res.status == 200){
            this.getManageList();
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '删除失败！',
              type: 'error'
            });
          }
        })
      },
      clickSearch(){
        this.$get(this.$api.module.operationUser + '/property?username=' + this.requestData.username
                                                 + '&email=' + this.requestData.email
                                                 + '&pageSize=' + this.pageSize
                                                 + "&pageNo=" + this.pageNo).then(res => {
          if (res.status == 200){
            this.tableData = res.data;
            this.total = res.page.totalNum;
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
      },
      clearSearch(){
        this.requestData = {
          username: '',
          email: '',
        }
        this.getManageList();
      },
      handleSizeChange(val){
        this.pageSize = val;
        if (this.requestData.username!=''||this.requestData.email!='') {
          this.clickSearch();
        }else {
          this.getManageList();
        }
      },
      handleCurrentChange(){
        if (this.requestData.username!=''||this.requestData.email!='') {
          this.clickSearch();
        }else {
          this.getManageList();
        }
      },
    },

  }
</script>

<style scoped>
  .ptSt{
    width: calc(100% - 150px);
    height: 550px;
    /*background-color: pink;*/
    margin-left: 75px;
    /*border: 1px solid #c0c0c0;*/
    border-radius: 15px;
    box-shadow:0px 0px  2px 1px rgba(0,0,0,0.2);
    margin-bottom: 30px;
  }
  .ptSt1{
    width: calc(100% - 20px);
    min-height: 550px;
    /*background-color: pink;*/
    margin-left: 1px;
    /*border: 1px solid #c0c0c0;*/
    border-radius: 15px;
    box-shadow:0px 0px  2px 1px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    background-color: #ddede0;
    padding-bottom: 5px;
  }
  .ptSt2{
    width: calc(100% - 60px);
    min-height: 400px;
    /*background-color: pink;*/
    margin-left: 30px;
    /*border: 1px solid #c0c0c0;*/
  //border-radius: 15px;
  //box-shadow:0px 0px  2px 1px rgba(0,0,0,0.2);
    margin-bottom: 15px;
    background-color: #bababa;
  }
</style>

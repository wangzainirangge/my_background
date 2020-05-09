<template>
  <div style="font-size: 16px">
    <el-row style="margin-bottom: 20px;margin-top: 5px">
      <el-col :span="2">
        &nbsp;
      </el-col>
      <el-col :span="5">
        <el-input v-model="searchData.title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="7">
        <el-date-picker
          v-model="searchDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="5" style="margin-left: 22px">
        <el-input v-model="searchData.author" placeholder="请输入作者"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px;margin-top: 5px">
      <el-col :span="19" style="text-align: right">
        <el-button type="primary" @click="clickSearch()">搜索</el-button>
      </el-col>
      <el-col :span="4" style="margin-left: 30px">
        <el-button type="primary" plain @click="clearSearch()">清除搜索</el-button>
      </el-col>
    </el-row>

    <div class="ptSt" v-for="(item,index) in formData">
      <el-row style="margin-bottom: 15px;padding-top: 20px;text-align: center;font-size: 24px;">
        {{item.title}}
      </el-row>
      <el-row style="margin-bottom: 10px;margin-top: 5px;font-size: 16px;padding-top: 10px">
        <el-col :span="3" style="text-align: left;margin-left: 50px">
          新闻编号:&nbsp;{{item.newsID}}
        </el-col>
        <el-col :span="3" style="text-align: left;margin-left: 50px">
          新闻作者:&nbsp;{{item.managerID}}
        </el-col>
        <el-col :span="6" style="text-align: left;margin-left: 50px">
          创建时间:&nbsp;{{item.createTime}}
        </el-col>
        <el-col :span="6" style="text-align: left;margin-left: 50px">
          发布时间:&nbsp;{{item.pushTime}}
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 20px;font-size: 16px;padding-top: 10px">
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="5" style="text-align: left">
          <el-button type="primary" @click="updateNews(index)">修改新闻</el-button>
        </el-col>
        <el-col :span="5" style="text-align: left">
          <el-button type="danger" @click="deleteNews(item.newsID)">删除新闻</el-button>
        </el-col>
        <el-col :span="5" style="text-align: left">
          <el-button type="warning" disabled @click="recallNews(index)">撤回新闻</el-button>
        </el-col>
        <el-col :span="5" style="text-align: left">
          <el-button type="success" @click="releaseNews(index)">发布新闻</el-button>
        </el-col>
        <el-col :span="1">&nbsp;</el-col>
      </el-row>
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
</template>

<script>
  export default {
    name: "nationalNewsDraftBox",
    data () {
      return {
        pageSize:5,
        pageNo:1,
        total: '',
        searchDate: null,
        searchData: {
          title: '',
          startTime: null,
          endTime: null,
          author: '',
        },
        formData: [],
        requestData: {
          status: ''
        }
      }
    },
    created() {
      this.getInternationalList()
    },
    methods: {
      getInternationalList(){
        this.$get(this.$api.module.operationNews + '?status=2&type=2&pageSize=' + this.pageSize + "&pageNo=" + this.pageNo).then(res => {
          if (res.status == 200){
            this.formData = res.data;
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
      updateNews(v){
        //alert(v)
        this.$router.push({name: 'addNationalNews',params:{updateData: this.formData[v]}})
      },
      deleteNews(v){
        this.$drop(this.$api.module.operationNews + '/'+v).then(res => {
          if (res.status == 200){
            this.getInternationalList();
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
      recallNews(v){
        alert(v)
      },
      releaseNews(v){
        this.requestData.status = 1;
        this.$patch(this.$api.module.operationNews + '/'+this.formData[v].newsID,this.requestData).then(res => {
          if (res.status == 200){
            this.formData.splice(v,1);
            this.$message({
              message: '发布成功！',
              type: 'success'
            });
          } else {
            this.$message({
              message: '发布失败！',
              type: 'error'
            });
          }
        })
      },
      clickSearch(){
        if (this.searchDate!=null&&this.searchDate!=''){
          const d1 = new Date(this.searchDate[0])
          const d2 = new Date(this.searchDate[1])
          this.searchData.startTime = d1.getFullYear() + '-' + this.p((d1.getMonth() + 1)) + '-' + this.p(d1.getDate())
          this.searchData.endTime = d2.getFullYear() + '-' + this.p((d2.getMonth() + 1)) + '-' + this.p(d2.getDate())
        }
        this.$get(this.$api.module.operationNews + '/property?title=' + this.searchData.title
          + '&startTime=' + this.searchData.startTime
          + '&endTime=' + this.searchData.endTime
          + '&author=' + this.searchData.author
          + '&status=2&type=2&pageSize=' + this.pageSize
          + "&pageNo=" + this.pageNo).then(res => {
          if (res.status == 200){
            this.formData = res.data;
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
      p(s) {
        return s < 10 ? '0' + s : s
      },
      clearSearch(){
        this.searchData.title = '';
        this.searchData.author = '';
        this.searchData.startTime = null;
        this.searchData.endTime = null;
        this.searchDate = null;
        this.getInternationalList();
      },
      handleSizeChange(val){
        this.pageSize = val;
        if (this.searchData.title!=''||this.requestData.startTime!=''||this.searchData.endTime!=''||this.requestData.author!='') {
          this.clickSearch();
        }else {
          this.getInternationalList();
        }
      },
      handleCurrentChange(){
        if (this.searchData.title!=''||this.requestData.startTime!=''||this.searchData.endTime!=''||this.requestData.author!='') {
          this.clickSearch();
        }else {
          this.getInternationalList();
        }
      },
    },
    mounted () {

    }
  }
</script>

<style scoped>
  .ptSt{
    width: calc(100% - 150px);
    height: 170px;
    /*background-color: pink;*/
    margin-left: 75px;
    /*border: 1px solid #c0c0c0;*/
    border-radius: 15px;
    box-shadow:0px 0px  2px 1px rgba(0,0,0,0.2);
    margin-bottom: 30px;
  }
</style>

<template>
  <div>
    <div class="ptSt">
      <div style="width: 100%;height: 50px;background-color: #ddede0;margin-bottom: 40px">
        <el-row style="margin-bottom: 30px;margin-top: 5px">
          <el-col :span="24" style="text-align: center;font-size: 24px;margin-top: 10px">
            普通用户注册
          </el-col>
        </el-row>
      </div>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="6" style="text-align: right;font-size: 18px;margin-top: 8px">
          用户名&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="12" style="font-size: 24px;">
          <el-input v-model="registeredData.username" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="6" style="text-align: right;font-size: 18px;margin-top: 8px">
          密码&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="12" style="font-size: 24px;">
          <el-input placeholder="请输入密码" v-model="registeredData.password" show-password></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="6" style="text-align: right;font-size: 18px;margin-top: 8px">
          性别&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="12" style="font-size: 24px;">
          <el-radio v-model="registeredData.gender" label="1">男</el-radio>
          <el-radio v-model="registeredData.gender" label="2">女</el-radio>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="6" style="text-align: right;font-size: 18px;margin-top: 8px">
          邮箱&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="12" style="font-size: 24px;">
          <el-input placeholder="请输入邮箱" v-model="registeredData.email"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="6" style="text-align: right;font-size: 18px;margin-top: 8px">
          年龄&nbsp;&nbsp;&nbsp;&nbsp;
        </el-col>
        <el-col :span="12" style="font-size: 24px;">
          <el-input-number v-model="registeredData.age" :min="1" :max="100" label="描述文字"></el-input-number>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 30px;margin-top: 5px">
        <el-col :span="18" style="text-align: right;font-size: 18px;margin-top: 8px">
          <el-button type="primary" @click="clickSubmitBtn()">提交</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addOrdinaryUser",
    data () {
      return {
        isUpdate: 2,//1 修改  2 添加
        saveIP: [],
        registeredData:{
          username: '',
          password: '',
          gender: '1',
          email: '',
          age: 1,
          registeredIP: ''
        },
      }
    },
    methods: {
      clickSubmitBtn(){
        this.registeredData.registeredIP = this.saveIP[0];
        if (this.registeredData.username===null||this.registeredData.username===''){
          this.$message({
            message: '未输入用户名！',
            type: 'error'
          });
        } else if (this.registeredData.password===null||this.registeredData.password===''){
          this.$message({
            message: '未输入密码！',
            type: 'error'
          });
        } else if (this.registeredData.email===null||this.registeredData.email===''){
          this.$message({
            message: '未输入邮箱！',
            type: 'error'
          });
        } else if (this.registeredData.age===null||this.registeredData.age===''){
          this.$message({
            message: '未输入年龄！',
            type: 'error'
          });
        } else {
          if (this.isUpdate==2){
            this.addManage();
          } else {
            this.updateManage();
          }
        }
      },
      addManage(){
        this.$post(this.$api.module.operationUser,this.registeredData).then(res => {
          if (res.status == 200){
            this.$message({
              message: '添加成功！',
              type: 'success'
            });
            this.refreshData();
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            });
          }
        })
      },
      updateManage(){
        this.$put(this.$api.module.operationUser + '/' + this.registeredData.userID,this.registeredData).then(res => {
          if (res.status == 200){
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
            this.refreshData();
            this.$router.push({name: 'managementUser'});
          } else {
            this.$message({
              message: '修改失败！',
              type: 'error'
            });
          }
        })
      },
      refreshData(){
        this.registeredData = {
          username: '',
          password: '',
          gender: '1',
          email: '',
          age: '',
        }
      },
      // 获取电脑ip
      getUserIP (onNewIP) {
        let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        let pc = new MyPeerConnection({
          iceServers: []
        });
        let noop = () => {
        };
        let localIPs = {};
        let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
        let iterateIP = (ip) => {
          if (!localIPs[ip]) {onNewIP(ip);}
          localIPs[ip] = true;
        };
        pc.createDataChannel('');
        pc.createOffer().then((sdp) => {
          sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) {return;}
            line.match(ipRegex).forEach(iterateIP);
          });
          pc.setLocalDescription(sdp, noop, noop);
        }).catch((reason) => {
          console.log(reason);
        });
        pc.onicecandidate = (ice) => {
          if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) {return;}
          ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
      }
    },
    mounted () {
      let updateData = this.$route.params.updateData;
      if (updateData){
        this.isUpdate = 1;
        this.registeredData = updateData;
        this.registeredData.gender = this.registeredData.gender.toString();
      };
      this.getUserIP((ip) => {
        this.ip = ip;
        console.log(ip);
        this.saveIP.push(ip)
      });
    }
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
</style>

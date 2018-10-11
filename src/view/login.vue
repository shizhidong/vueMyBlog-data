<template>
    <div>
        <div class="login-container">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                    <el-input v-model="formLabelAlign.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item  style="text-align:center">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          username: '',
          password: '',
          pangdahaiUserName:"admin",
          pangdahaiPassword:"123456",
          cosett:"shizhidong221700"
        }
      };
    },
    methods:{
        submitForm(){
           let pangdahaiUserName = this.formLabelAlign.pangdahaiUserName;
           let pangdahaiPassword = this.formLabelAlign.pangdahaiPassword;
           
            if(this.formLabelAlign.username===pangdahaiUserName && this.formLabelAlign.password===pangdahaiPassword){
                this.$setCookie('abc', this.formLabelAlign.cosett, 1)
                this.$router.push({
                    path:"/MyPhoto"
                })
            }else{
                alert("用户名或密码错误")
            }
            
        }
    }
  }
</script>
<style scoped lang="less">
    .login-container{
        width:300px;
        margin: 100px auto;
    }
</style>

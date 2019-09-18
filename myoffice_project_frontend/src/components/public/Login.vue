<template>
  <el-form ref="loginForm" :model="user" :rules="rules" status-icon class="login" label-position="left"
           label-width="0px">
    <h3 class="login_title">MyOffice</h3>

    <el-form-item prop="username">
      <el-input type="text" v-model="user.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>


    <el-form-item prop="password">
      <el-input type="password" v-model="user.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>


    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click = "loginMethod">登录</el-button>
    </el-form-item>
  </el-form>


  
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {},
        rules: {
          username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
          password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]

        }
      }
    },


    loginMethods() {
 
  this.$refs.loginForm.validate((valid) => {
    if (valid) {
      if (this.user.username === 'winnie' && this.user.password === '123') {
        this.$notify({
          type: 'success',
          message: 'Welcome,' + this.user.username + '!',
          duration: 3000
        })
        //登陆成功跳转至home主页
        this.$router.replace('/')

      } else {
        this.$message({
          type: 'error',
          message: '用户名或密码错误',
          showClose: true
        })
      }
    } else {
      return false
    }
  })
},
  }
</script>


<style>
  .login {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  
  }

</style>



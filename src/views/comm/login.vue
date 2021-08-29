<template>
  <div class="login">
    <div class="login-logo">
      <em>
        simple-admin
      </em>
    </div>
    <div class="login-content">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="登录账号" prop="name">
          <el-input v-model="loginForm.userName"/>
        </el-form-item>
        <el-form-item label="登录密码" prop="name">
          <el-input
            v-model="loginForm.pass"
            type="password"
            show-password/>
        </el-form-item>
        <el-form-item class="submit-button">
          <el-button
            type="primary"
            @click="loginSumilt('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: 'admin',
        pass: '123456'
      },
      rules: {}
    }
  },
  methods: {
    loginSumilt() {
      this.axios.post('/api/user/login').then(({ data }) => {
        if (data.code === 200) {
          sessionStorage.setItem('token', 520)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss';
.login {
    width: 100%;
    height: 100vh;
    background: url('../../assets/img/login.png') no-repeat;
    background-position: 100%;
    background-size: cover;
    display: flex;
    .login-logo {
        flex:0.7;
        padding-right: 30px;
        @include flex(center,flex-end);
        color: #fff;
        em {
            font-weight: 400;
            font-size: 30px;
            height: 125px;
            text-transform: uppercase;
        }
    }
    .login-content{
        flex: 1;
        padding: 0 20px;
        @include flex(center,flex-start);
        /deep/ .el-form{
            .el-form-item{
                margin-bottom: 15px;
                .el-input {
                    .el-input__inner{
                        width: 260px;
                    }
                }
            }
            .el-form-item__label{
                font-size: 16px;
                font-weight: 400;
                color: #fff;
            }
            .submit-button{
                .el-button {
                    // padding: 10px 20px;
                    width: 100%;
                    padding: 10px;
                }
            }
        }
    }
}
</style>

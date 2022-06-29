<template>
  <div class="login-main-page">
    <!-- <el-button @click="pingTest">后端9802-ping test</el-button> -->
    <div>
      <img
        :src="loginPageData.background"
        class="bg-login"
      >
    </div>
    <my-icp style="margin-top:0%; margin-left: 35%"></my-icp>
    <div class="login-s">
      <div class="form-title">
        <el-avatar
          :src="loginPageData.avatar"
          :size='70'
        ></el-avatar>
      </div>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        ref="LoginFormRef"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入登录名"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button
            type="primary"
            @click="login"
          >登录</el-button>
          <el-button
            type="info"
            @click="resetLoginForm"
          >重置</el-button>
        </el-form-item>
        <el-button
          type="warning"
          @click="visit"
        >游客模式进入</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi, loginPageApi } from '../api/data'

export default {
  data: function () {
    return {
      // 请求的数据
      loginPageData: {},

      // 数据绑定
      show: {
        diplay: 'blok'
      },
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        username: [{
          required: true,
          message: '请输入登录名',
          trigger: 'blur'
        },
        {
          min: 1,
          max: 10,
          message: '登录名长度在 3 到 10 个字符',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 1,
          max: 15,
          message: '密码长度在 6 到 15 个字符',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods: {
    // 添加表单重置方法
    resetLoginForm() {
      // this=>当前组件对象，其中的属性$refs包含了设置的表单ref
      //   console.log(this)
      this.loginForm.username = ''
      this.loginForm.password = ''
    },
    visit() {
      this.$router.push({ name: 'main' })
    },
    login() {
      // 点击登录的时候先调用validate方法验证表单内容是否有误
      this.$refs.LoginFormRef.validate(async valid => {
        // 如果valid参数为true则验证通过
        if (!valid) {
          return
        }

        loginApi(this.loginForm.username, this.loginForm.password).then(res => {
          if (res.success) {
            this.$router.push({ name: 'main' })
          } else {
            this.$alert('失败原因：' + res.msg + '，重新登录试试吧(ง •_•)ง', '登陆失败', { confirmButtonText: 'Roger' })
          }
        })
      })
    }
  },

  mounted() {
    loginPageApi().then(res => {
      this.loginPageData = res.data
    })
  }
}
</script>

<style type="text/css">
* {
  padding: 0;
  margin: 0;
}

.form-title {
  padding-top: 15%;
  font-size: 30px;
  line-height: 30px;
  font-family: "NSimSun";
  text-align: "center";
}

.store-login {
  background-color: white;
  height: 100%;
  position: relative;
}

.login-s {
  position: absolute;
  width: 400px;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.3);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 2;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.login_form {
  position: relative;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 30px;
}

.btns {
  padding-top: 6%;
}

.bg-login {
  /*background: url("../../public/img/3Dbg01.jpg") no-repeat;*/
  /*background-size: 100% 100%;*/
  /* position: relative; */
  height: 100vh;
  width: 100%;
  opacity: 0.8;
  z-index: 1;
}
</style>

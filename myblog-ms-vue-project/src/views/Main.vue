<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header
          :user="user"
          :label="label"
        ></common-header>
      </el-header>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import { loginCheckApi } from '../api/data'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  },

  data() {
    return {
      user: {},
      label: ''
    }
  },

  created() {
    // 检查用户的登陆状态
    loginCheckApi().then(res => {
      if (res.code === 403) {
        this.$notify({
          message: '当前是无权限的游客模式，因此功能接口仅提供参观，首页只显示一些展示数据，不代表网站真实状况哦~',
          duration: 0,
          position: 'bottom-left'
        })
        this.user = {
          name: '网络冲浪手',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          role: '游客'
        }
        this.label = '返回登录页'
        return
      }

      if (!res.success) {
        this.$alert(res.msg + ' 重登录试试吧(ง •_•)ง', '登陆失败', { confirmButtonText: 'Roger' })
        this.$router.push({ name: 'login' })
        return
      }
      this.user = res.user
      var role = '博主'
      if (this.user.role === 'root') {
        role = '系统管理员'
      } else {
        role = '博主'
      }
      this.$notify({
        message: '欢迎回来，[' + role + '] ' + this.user.name + '! ',
        duration: 2000,
        position: 'bottom-left'
      })
      this.user.role = role
      this.label = '退出登录'
      // this.$store.commit('setUser', res.user)
      // console.log(this.user)
    })
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background: #77c369;
}
.el-main {
  padding-top: 0px;
}
</style>

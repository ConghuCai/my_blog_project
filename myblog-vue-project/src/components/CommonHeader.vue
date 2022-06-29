<template>
  <!-- <div>Header组件</div> -->
  <header>
    <div class='l-content'>
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <h3 style="color:#fff">{{getPageName}}</h3>
    </div>

    <div
      class='r-content'
      style="display: inline-flex; "
    >
      <!-- 未登录显示的droplist -->
      <div style="margin-right: 30px; margin-top: 8px">
        <!-- @clear="search"
          @keydown.enter.native="search" -->
        <el-input
          v-model="keyword"
          placeholder="search for something..."
          prefix-icon="el-icon-search"
          style="width: 200px;margin-right: 10px"
          size="mini"
        ></el-input>
        <!-- @click="search" -->
        <el-button
          icon="el-icon-search"
          size="mini"
          circle
          type="info"
          @click="searchKeyword(keyword)"
        >
        </el-button>
      </div>
      <div>
        <el-dropdown
          trigger="click"
          size="mini"
          v-if="!getLoginState"
        >
          <span class="el-dropdown-link">
            <img
              :src="url"
              class="user"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleLogin">登录Gitee</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 已登录  用户的个人信息填上去 -->
        <el-dropdown
          trigger="click"
          size="mini"
          v-else
        >
          <span class="el-dropdown-link">
            <img
              :src="getAvatar"
              class="user"
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="true">{{getUserShowName}}</el-dropdown-item>
            <el-dropdown-item @click.native="openWindow(getGiteePage)">我的主页</el-dropdown-item>
            <el-dropdown-item @click.native="exitLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { getOauthLoginApi, getLoginInfoApi, getUserInfoApi, getGiteeLogoApi } from '../api/data'

export default {

  data() {
    return {
      keyword: '',
      url: ''
    }
  },
  methods: {
    handleMenu() {
      // alert('!!')
      // 操作其他组件的属性值：通过vuex状态管理：
      // $store.commit触发store/index.js中的函数
      this.$store.commit('collapseMenu')
    },

    // 点击触发
    // 点击登录  跳转gitee授权界面
    handleLogin() {
      getOauthLoginApi(window.location.origin).then(res => {
        // this.openWindowLogin(res.data.authorizeUrl, '绑定GitHub', 540, 540)
        // window.opener.location.reload()
        // window.close()
        window.location.href = res.data.authorizeUrl
      })
    },

    // 点击搜索
    searchKeyword(keyword) {
      if (keyword === '') {
        this.$notify({
          message: '告诉我您需要搜点儿啥呢...',
          duration: 2000,
          position: 'bottom-left'
        })
        return
      }
      // alert(keyword)
      // search(keyword).then(res => {
      //   // console.log(res)
      // })
      // this.$router.push()
      const param = { name: 'search', params: { keyword }, query: { user: this.$route.query.user } }
      this.$router.push({
        name: 'router',
        query: param
      })
      // this.$store.commit('getPageName', '检索：' + keyword)
    },

    openWindow(url) {
      const newWindow = window.open(url)
      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    },

    // 退出登录
    exitLogin() {
      window.location.href = window.location.origin
      // this.$router.push({ name: 'main' })
    },

    GetUrlParam(paraName) {
      var url = decodeURIComponent(document.location.toString())

      var arrObj = url.split('?')

      if (arrObj.length > 2) {
        for (let x = 1; x < arrObj.length; x++) {
          const arrPara = arrObj[x].split('&')
          let arr
          for (let i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split('=')

            if (arr != null && arr[0] === paraName) {
              return arr[1]
            }
          }
        }
        return ''
      } else if (arrObj.length > 1) {
        const arrPara = arrObj[1].split('&')
        var arr
        for (let x = 0; x < arrPara.length; x++) {
          arr = arrPara[x].split('=')

          if (arr != null && arr[0] === paraName) {
            return arr[1]
          }
        }
        return ''
      } else {
        return ''
      }
    }

  },
  computed: {
    getPageName() {
      return this.$store.state.tab.pageName
    },
    getLoginState() {
      return this.$store.state.tab.hasLogined
    },
    getUserName() {
      return this.$store.state.tab.userName
    },
    getGiteePage() {
      return this.$store.state.tab.giteeUrl
    },
    getAvatar() {
      return this.$store.state.tab.avatarUrl
    },
    getUserShowName() {
      return this.$store.state.tab.userShowName
    }
  },

  // 看页面是不是携带参数过来的  携带code则说明用户已经通过gh的授权了
  // 注：未携带参数  但是状态信息已修改  也说明已经登陆了
  mounted() {
    const user = this.$route.query.user
    const code = this.GetUrlParam('code')
    console.log(code)
    if (user !== undefined) {
      console.log('已登录')
      getUserInfoApi(user).then(res => {
        if (res.data.userInfo !== undefined) {
          console.log('数据库处获取到用户信息')
          // 改变状态
          this.$store.commit('login', { login: true, name: res.data.userInfo.login, gitee: res.data.userInfo.htmlUrl, avatar: res.data.userInfo.avatarUrl, showName: res.data.userInfo.name })
        } else {
          this.$alert('您的登录已过期！/(ㄒoㄒ)/~~，重新登陆试试吧~', '登录失败', {
            confirmButtonText: 'Roger That! ',
            callback: function () { window.location.href = window.location.origin }
          })
        }
      })
    } else if (code !== '') {
      console.log('携带登录code')
      console.log('向gitee申请用户账号信息')
      getLoginInfoApi(code, window.location.origin).then(res => {
        // console.log(res.data.userInfo)
        if (res.data.loginInfo !== undefined) {
          console.log('gitee处获取到用户信息')
          // 改变状态
          this.$store.commit('login', { login: true, name: res.data.loginInfo.login, gitee: res.data.loginInfo.html_url, avatar: res.data.loginInfo.avatar_url, showName: res.data.loginInfo.name })
          const param = { path: '/', query: { user: res.data.loginInfo.login } }
          this.$router.push({
            name: 'router',
            query: param
          })
        } else {
          this.$alert('向Gitee申请账号失败了/(ㄒoㄒ)/~~，重新登陆试试吧~', '授权失败', {
            confirmButtonText: 'Roger That! ',
            callback: function () { window.location.href = window.location.origin }
          })
        }
      })
    } else {
      console.log('未登录')
      getGiteeLogoApi().then(res => {
        this.url = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  // flex布局：让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容：
  display: flex;

  height: 100%;
  align-items: center;

  // 在弹性盒对象的 <div> 元素中的各项周围留有空白 不要挤在一起
  justify-content: space-between;
  font-family: "STZhongsong";
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 40px;
    height: 40px;

    // 图片变成圆形
    border-radius: 50%;
  }
}
</style>

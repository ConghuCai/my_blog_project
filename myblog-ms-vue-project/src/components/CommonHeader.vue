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
      <!-- 已登录  用户的个人信息填上去 -->
      <el-dropdown
        trigger="click"
        size="mini"
      >
        <span class="el-dropdown-link">
          <img
            :src="user.avatar"
            class="user"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="true">{{user.name}}</el-dropdown-item>
          <el-dropdown-item :disabled="true">{{user.role}}</el-dropdown-item>
          <el-dropdown-item @click.native="exitLogin">{{label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { logoutApi } from '../api/data'

export default {

  data() {
    return {
    }
  },
  props: {
    user: {
      type: Object
    },
    label: {
      type: String
    }
  },
  methods: {
    handleMenu() {
      // alert('!!')
      // 操作其他组件的属性值：通过vuex状态管理：
      // $store.commit触发store/index.js中的函数
      this.$store.commit('collapseMenu')
    },

    // 退出登录
    exitLogin() {
      logoutApi().then(res => {
        this.$alert(res.msg + ' さよなら！', '退出', { confirmButtonText: 'Roger' })
      })
      this.$router.push({ name: 'login' })
    }

  },
  computed: {
    getPageName() {
      return this.$store.state.tab.pageName
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

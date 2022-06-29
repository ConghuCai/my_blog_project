<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#8d63a5"
    text-color="#fdf2ff"
    active-text-color="#fdf2ff"
    unique-opened
  >
    <div class="title-img">
      <el-avatar
        :size="50"
        :src="logo"
      ></el-avatar>
    </div>
    <div v-if="!isCollapse">
      <h3>{{title}}</h3>
      <h3>博客管理</h3>
    </div>
    <div v-else>
      <h3>{{sname}}</h3>
      <h3>MS</h3>
    </div>

    <!-- 遍历menu数组  生成菜单栏 -->
    <!-- 没有子菜单的情况 -->
    <el-menu-item
      @click="clickMenu('/')"
      index="main"
    >
      <i class="el-icon-pie-chart"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <!-- 有子菜单 -->
    <el-submenu
      :index="item.label"
      v-for="(item, index2) in menu"
      :key="index2"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem.path)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <!-- 关于网站的选项 -->
    <el-menu-item
      @click="clickMenu('/about')"
      index="about"
    >
      <i class="el-icon-discover"></i>
      <span slot="title">关于网站</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fdf2ff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  font-family: "STZhongsong";
}

.title-img {
  text-align: center;
  margin-top: 15px;
}
</style>

<script>
import { getMenuApi } from '../api/data'

export default {
  data() {
    return {
      // 菜单栏的值,
      menu: [],
      sname: '',
      title: '',
      logo: ''
    }
  },
  methods: {
    clickMenu(path) {
      // console.log(path)
      this.$router.push({ path: path })
    }
  },

  mounted() {
    getMenuApi().then(res => {
      this.menu = res.data.menu
      this.title = res.data.title
      this.sname = res.data.sname
      this.logo = res.data.logo
    })
  },

  // 计算属性
  // 这里全部是页面的一些属性参数  其他的组件就通过$store去操作这个组件里面的数据了
  computed: {
    // isCollapse属性：控制菜单栏的关闭与展开
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }

}
</script>

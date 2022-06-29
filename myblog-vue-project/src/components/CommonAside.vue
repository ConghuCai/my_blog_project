<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
    unique-opened
  >
    <div class="title-img">
      <el-avatar
        :size="50"
        :src="title.avatar"
      ></el-avatar>
    </div>
    <h3 v-if="!isCollapse">{{title.name}}</h3>
    <h3 v-else>{{title.sname}}</h3>
    <!-- 遍历menu数组  生成菜单栏 -->
    <!-- 没有子菜单的情况 -->
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 有子菜单 -->
    <el-submenu
      :index="item.label"
      v-for="item in hasChildren"
      :key="item.path"
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
          @click="clickMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <!-- 关于网站的选项 -->
    <el-menu-item
      @click="clickMenuAbout()"
      index="1"
    >
      <i class="el-icon-odometer"></i>
      <span slot="title">关于网站</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
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
      title: {},
      menu: []
    }
  },
  methods: {
    getMenuData() {
      // axios发请求，url：'/api/menu/getData'
      console.log('获取菜单数据')
      getMenuApi().then(res => {
        // console.log(res)
        this.title = res.data.title
        this.menu = res.data.menu
      })
    },

    clickMenu(item) {
      // 使用路由跳转  这里使用的是name跳转  不带参数的
      // 注意现在是在Main.vue里面
      if (item.name === 'main') {
        this.$router.push({ name: 'main', query: { user: this.$route.query.user } })
      } else {
        const categoryName = item.name
        this.$router.push({ name: 'category', params: { categoryName }, query: { user: this.$route.query.user } })
      }
    },

    // 点击网站的关于选项
    clickMenuAbout() {
      this.$router.push({ name: 'about', query: { user: this.$route.query.user } })
    }
  },

  mounted() {
    this.getMenuData()
  },

  // 计算属性
  // 这里全部是页面的一些属性参数  其他的组件就通过$store去操作这个组件里面的数据了
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.menu.filter((item) => item.children)
    },
    // isCollapse属性：控制菜单栏的关闭与展开
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }

}
</script>

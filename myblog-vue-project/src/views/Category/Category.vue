<template>
  <div style="margin-inline: 12%;">
    <div class="cat-card">
      <el-card shadow="hover">
        <div class="cat-intro">
          <span class="intro-img">
            <el-avatar
              :size="150"
              :src="categoryInfo.avatar"
            ></el-avatar>
            <span class="intro-name">
              {{categoryInfo.name}}
            </span>
          </span>
          <span class="intro-word">
            <span class="intro-text">
              <p>{{categoryInfo.intro}}</p>
            </span>
            <span class="intro-time">
              <p>收录文章：{{categoryInfo.count}}篇</p>
              <i class="el-icon-time"></i>
              <span>创建时间： {{categoryInfo.time}}</span>
            </span>
          </span>
        </div>
      </el-card>
    </div>

    <blog-list
      :target="'category'"
      :name="categoryName"
    ></blog-list>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.cat-card {
  margin-top: 20px;
}

.cat-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 100px;
}

.intro-img {
  text-align: center;
  .intro-name {
    font-size: 25px;
    font-weight: bold;
    font-family: "STHupo";
  }
}

.intro-word {
  margin-left: 60px;
  .intro-text {
    font-size: 20px;
    text-indent: 2em;
    line-height: 25px;
    font-family: "PMingLiU";
    text-align: "center";
  }
  .intro-time {
    margin-top: 20px;
    float: right;

    font-size: 15px;
    span {
      margin-left: 10px;
      margin-right: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>

<script>

import { getCategoryInfoApi } from '../../api/data'
import BlogList from '../BlogList.vue'

export default {
  components: { BlogList },
  data() {
    console.log('category: ' + this.$route.params.categoryName)
    return {
      categoryName: this.$route.params.categoryName,
      categoryInfo: {},

      title: (this.$route.params.categoryName + '').toUpperCase()
    }
  },

  methods: {
    initCategoryInfo() {
      getCategoryInfoApi(this.categoryName).then(res => {
        this.categoryInfo = res.data.categoryInfo
      })
    }
  },

  mounted() {
    this.initCategoryInfo()
  },

  // 由于vue的机制是在路由匹配后查看组件是否已经被created
  // 因此如果在当前类别下  点击别的类别会不起作用，所以需要写一个beforeRouteUpdate判断一下
  // 当前种类名是否已经发生变化
  beforeRouteUpdate(to, from, next) {
    next()
    const newRouter = this.$route.params.categoryName
    if (newRouter !== this.categoryName) {
      console.log('种类路由变化')
      const param = { path: '/category/' + newRouter, query: { user: this.$route.query.user } }
      // this.$router.go(0)
      // 在这里为了视觉上获得更流畅的效果
      // 采用中间的空白模板作为跳转中介  也就是让一个空白模板帮我们跳转
      this.$router.push({
        name: 'router',
        query: param
      })
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

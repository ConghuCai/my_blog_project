<template>
  <div style="margin-inline: 12%">
    <div class="about-info">
      <el-card>
        <div class="intro">
          <i class="el-icon-box"></i>
          <span class="intro-title">项目简介</span>
          <div
            class="intro-text"
            v-html="aboutInfo.intro"
          ></div>
        </div>
        <div class="intro">
          <i class="el-icon-link"></i>
          <span class="intro-title">开源代码</span>
          <div class="intro-url">
            <el-link @click="openWindow(aboutInfo.urlGitee)">Gitee : {{aboutInfo.urlGitee}}</el-link><br>
            <el-link @click="openWindow(aboutInfo.urlGithub)">Github : {{aboutInfo.urlGithub}}</el-link>
          </div>
        </div>

        <div class="intro">
          <i class="el-icon-link"></i>
          <span class="intro-title">博客后台系统</span>
          <div
            class="intro-text"
            v-html="aboutInfo.introMain"
          ></div>
          <div class="intro-url">
            <el-link @click="openWindow(aboutInfo.urlMain)">Gitee : {{aboutInfo.urlMain}}</el-link><br>
          </div>
        </div>
      </el-card>

      <div class="articles-title">
        <i class="el-icon-thumb"></i>
        <span>了解本网站的工作过程</span>
      </div>
      <div class="articles">
        <blog-list
          :target="'about'"
          :name="'site'"
        ></blog-list>
      </div>
    </div>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.about-info {
  margin-top: 40px;
  .articles-title {
    text-indent: 0.5em;
    font-size: 25px;
    font-weight: bold;
    font-family: "STZhongsong";
    color: #333;
    margin: 40px;
    text-align: center;

    span {
      margin-left: 20px;
    }
  }
}

.intro {
  margin-top: 20px;
  .intro-title {
    text-indent: 0.5em;
    font-size: 25px;
    font-weight: bold;
    font-family: "STZhongsong";
    color: #333;
    margin-left: 20px;
  }
  .intro-text {
    margin-inline: 5%;
    font-size: 18px;
    text-indent: 2em;
    line-height: 30px;
    font-family: "PMingLiU";
    margin-top: 20px;
    text-align: center;
  }

  .intro-url {
    font-size: 18px;
    line-height: 30px;
    font-family: "PMingLiU";
    margin-top: 20px;
    text-align: center;
  }
}
</style>

<script>
import BlogList from './BlogList.vue'
import { getAboutInfoApi } from '../api/data'

export default {
  components: { BlogList },

  data() {
    return {
      title: 'ABOUT',

      aboutInfo: {}
    }
  },

  methods: {
    openWindow(url) {
      const newWindow = window.open(url)
      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }
  },

  mounted() {
    getAboutInfoApi().then(res => {
      this.aboutInfo = res.data.aboutInfo
    })
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

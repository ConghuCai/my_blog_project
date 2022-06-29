<template>
  <div>
    <div style="margin-inline: 12%;">
      <!-- 文章信息 -->
      <div style="text-align: center; margin: 30px">
        <!-- 标题 -->
        <p
          style="font-size: 30px"
          class="article-title"
        >{{articleInfo.title}}</p>
        <!-- 作者、发布时间、浏览信息 -->
        <el-row
          :gutter="20"
          style="margin-top: 40px;"
          class="article-info"
        >
          <el-col :span="4">
            <div>
              &nbsp;
            </div>
          </el-col>
          <el-col :span="6">
            <div style="display: flex">
              <el-avatar
                size="small"
                :src="articleInfo.avatar_url"
              ></el-avatar>
              <p>{{articleInfo.author}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              <p>{{articleInfo.time}}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="article-info">
              <i class="el-icon-view"> {{articleInfo.clickCount}}</i>
              <i class="el-icon-star-off"> {{articleInfo.likeCount}}</i>
              <i class="el-icon-chat-square"> {{articleInfo.commentCount}}</i>
              <i class="el-icon-share"> {{articleInfo.shareCount}}</i>
            </div>
          </el-col>
          <el-col :span="4">
            <div>
              &nbsp;
            </div>
          </el-col>
        </el-row>
        <!-- 分类和标签 -->
        <el-row
          :gutter="20"
          style="margin-top: 20px;"
          class="article-info"
        >
          <el-col :span="10">
            <div>
              <p>分类：<el-button
                  type="text"
                  @click="jump2Category"
                >{{articleInfo.type}}</el-button>
              </p>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="article-info">
              <div>
                <el-button
                  round
                  style=" margin: 8px"
                  size="mini"
                  plain
                  v-for="item, index in articleInfo.tags"
                  :key=index
                  :type="articleInfo.tagType[index]"
                  @click="tagClick(item)"
                >{{item}}</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div class="article-abstract">
        <p>{{articleInfo.intro}}</p>
      </div>
      <el-divider></el-divider>
      <!-- 文章 -->
      <el-card class="article">
        <p
          v-html="markdown"
          class="md"
        ></p>
      </el-card>
    </div>

    <el-divider></el-divider>
    <div class="item-title">
      <i class="el-icon-mic"></i>
      <span>各抒己见...</span>
    </div>
    <!-- 评论区 -->
    <!-- 这里这个key没有实际意义  是为了改变这个key进而引起组件的重新渲染 从而实现更新评论列表的功能 -->
    <div
      style="margin-inline: 12%;"
      :key="loadTimer"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-card shadow="hover">
              <el-row :gutter="20">
                <p style="font-size:20px; ">{{articleInfo.title}}</p>

                <el-divider>{{articleInfo.time}}</el-divider>

                <div class="article-info">
                  <el-row :gutter="20">
                    <el-col
                      :span="12"
                      :offset="6"
                    >
                      <div>
                        <div style="display: flex;">
                          <el-avatar
                            size="small"
                            :src="articleInfo.avatar_url"
                          ></el-avatar>
                          <p>{{articleInfo.author}}</p>
                        </div>

                        <p>分类：<el-button
                            type="text"
                            @click="jump2Category"
                          >{{articleInfo.type}}</el-button>
                        </p>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <div class="article-info">
                  <el-button
                    round
                    style=" margin: 8px"
                    size="mini"
                    plain
                    v-for="item, index in articleInfo.tags"
                    :key=index
                    :type="articleInfo.tagType[index]"
                    @click="tagClick(item)"
                  >{{item}}</el-button>
                </div>

                <el-divider><i class="el-icon-lollipop"></i></el-divider>

                <div style="margin-inline: 20px">
                  <el-row :gutter="20">
                    <el-col
                      :span="12"
                      :offset="6"
                    >
                      <el-button
                        type="danger"
                        icon="el-icon-star-off"
                        style="margin-left: 10px"
                        circle
                        @click="likeClick"
                      ></el-button>
                      <el-button
                        type="primary"
                        icon="el-icon-share"
                        circle
                        style="margin-left: 60px"
                        @click="shareClick"
                      ></el-button>
                    </el-col>
                  </el-row>
                </div>

              </el-row>
            </el-card>
          </div>
        </el-col>
        <el-col :span="16">
          <div>
            <div>
              <div
                v-if="getLoginState"
                class="user-info"
              >
                <el-avatar :src="getUserAvatar"></el-avatar>
                <p>{{getUserName}}</p>
              </div>
              <div
                v-else
                class="user-info"
              >
                <el-avatar
                  src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                  size="small"
                ></el-avatar>
                <p>访客</p>
              </div>
            </div>
            <div>
              <div style="margin: 20px 0;"></div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 9, maxRows: 9}"
                placeholder="说点什么吧..."
                v-model="comment"
              >
              </el-input>
            </div>
            <div style="margin-top: 20px; display: flex; justify-content:center;">
              <el-button
                type="success"
                round
                @click="addCommentClick"
              >发布</el-button>
              <el-button
                type="info"
                round
                style="margin-left: 20px"
                @click="resetCommentClick"
              >重置</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 评论列表 引入组件在这个地方 -->
      <comments></comments>
    </div>

    <!-- 相关推荐文章 -->
    <el-divider></el-divider>
    <div
      style="margin-inline: 12%;"
      v-if="getShowAbout"
    >
      <div class="item-title">
        <i class="el-icon-thumb"></i>
        <span>相关阅读...</span>
      </div>
      <div>
        <blog-list
          :target="'recommend'"
          :name="'article/' + id"
        ></blog-list>
      </div>
    </div>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.article-title {
  font-size: 25px;
  font-weight: bold;
  font-family: "PMingLiU";
}
.article-info {
  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
  font-family: "PMingLiU";
  text-align: "center";
}
.article-abstract {
  font-size: 18px;
  text-indent: 2em;
  line-height: 24px;
  margin-inline: 80px;
  font-style: italic;
  font-family: "PMingLiU";
}
.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: "PMingLiU";
  p {
    margin-left: 30px;
    font-style: italic;
  }
}

.item-title {
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

.article {
}
</style>

<script>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/eva.css'
import '../../assets/scss/markdownhere.scss'

import { getArticlContentApi, atrticleLikeApi, atrticleShareApi, addCommentApi } from '../../api/data'
import Comments from './Comments.vue'
import BlogList from '../BlogList.vue'

export default {
  // 评论区组件  文章列表组件
  components: {
    Comments,
    BlogList
  },

  data() {
    console.log('article: ' + this.$route.params.id)
    return {
      id: this.$route.params.id,
      articleInfo: {},

      comment: '',
      userName: '',

      avatars: [],

      loadTimer: '',

      title: '博文'
    }
  },
  methods: {
    // 获取文章信息
    getArticleInfo(id) {
      getArticlContentApi(id).then(res => {
        this.articleInfo = res.data.articlesInfo
        // console.log(this.articleInfo.md)
      })
    },

    // 跳转到种类列
    jump2Category() {
      this.$router.push({ path: '/category/' + this.articleInfo.url_name, query: { user: this.$route.query.user } })
    },

    // 跳转到标签
    tagClick(tag) {
      this.$router.push({ path: '/tag/' + tag, query: { user: this.$route.query.user } })
    },

    // 点赞
    likeClick() {
      atrticleLikeApi(this.$route.params.id)
      this.$notify({
        message: '谢谢您的点赞！o(*￣▽￣*)ブ',
        duration: 2000,
        position: 'bottom-left'
      })
    },

    // 分享
    shareClick() {
      atrticleShareApi(this.$route.params.id)

      this.copyToClipboard('' + window.location.href) // 需要复制的文本内容

      this.$notify({
        message: '链接已复制到粘贴板，记得分享给需要的人哦！o(*￣▽￣*)ブ',
        duration: 2000,
        position: 'bottom-left'
      })
    },

    // 点击复制到剪贴板函数
    copyToClipboard(content) {
      if (window.clipboardData) {
        window.clipboardData.setData('text', content)
      } else {
        (function (content) {
          document.oncopy = function (e) {
            e.clipboardData.setData('text', content)
            e.preventDefault()
            document.oncopy = null
          }
        })(content)
        document.execCommand('Copy')
      }
    },

    // 发布评论
    addCommentClick() {
      if (!this.getLoginState) {
        this.$alert('登录您的Gitee账号后再来试试吧~', '您还未登录哦', {
          confirmButtonText: 'Roger That! '
        })
        return
      }

      if (this.comment === '') {
        this.$notify({
          message: '输入一些内容再提交吧！',
          duration: 2000,
          position: 'bottom-left'
        })
        return
      }
      // alert(this.comment)

      addCommentApi(this.$route.params.id, this.comment, this.$route.query.user).then(res => {
        // console.log(res)
        if (res.data.res === 'success') {
          this.$notify({
            message: '感谢您的评论！',
            duration: 2000,
            position: 'bottom-left'
          })
          this.comment = ''
          // 重新刷新评论列表
          // 使用更新组件key的方式完成组件重渲染
          this.loadTimer = new Date().getTime()
        } else {
          this.$notify({
            message: '评论好像没有提交成功哦，请稍后再试',
            duration: 2000,
            position: 'bottom-left'
          })
        }
      })
    },

    // 重置评论
    resetCommentClick() {
      this.comment = ''
    }

  },
  mounted() {
    this.getArticleInfo(this.$route.params.id)
  },
  computed: {
    markdown() {
      const md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                '</code></pre>'
            } catch (__) { }
          }
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        }
      })
      const result = md.render(this.articleInfo.md + '') //
      return result
    },

    getLoginState() {
      return this.$store.state.tab.hasLogined
    },

    getUserName() {
      return this.$store.state.tab.userName
    },
    getUserAvatar() {
      return this.$store.state.tab.avatarUrl
    },

    getShowAbout() {
      return this.$store.state.tab.showAbout
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  },

  // 检测路由变化  跳转另一篇博文
  beforeRouteUpdate(to, from, next) {
    next()
    const newId = this.$route.params.id
    console.log('文章路由变化')
    const param = { path: '/article/' + newId, query: { user: this.$route.query.user } }

    this.$router.push({
      name: 'router',
      query: param
    })
  }
}
</script>

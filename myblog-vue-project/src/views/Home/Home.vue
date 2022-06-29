<template>
  <div style="margin-inline: 3%">
    <el-row
      class="home"
      :gutter="20"
    >
      <el-col :span="16">
        <!-- 走马灯 -->
        <template>
          <el-carousel
            style="margin-top: 20px"
            :interval="4000"
            type="card"
            height="200px"
          >
            <el-carousel-item
              v-for="item in images"
              :key="item.id"
              @click.native="articleClick(item.id)"
            >
              <!-- <h3 class="medium">{{ item }}</h3> -->
              <div>
                <img
                  :src="item.src"
                  height="auto"
                  width="100%"
                >
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>

        <!-- 文章栏 -->
        <blog-list
          :target="'all'"
          :name="''"
        ></blog-list>
      </el-col>

      <!-- 博主信息栏 -->
      <el-col
        :span="8"
        style="margin-top:20px"
      >
        <el-card shadow="hover">
          <div class="owner">
            <img :src="ownerInfo.avatar" />
            <div class="owner-info">
              <p class="name">{{ownerInfo.name}}</p>
              <p class="access">{{ownerInfo.access}}</p>
            </div>
          </div>
          <div class="owner-info">
            <p>Introduction：<span>{{ownerInfo.introduction}}</span></p>
            <p>Location:<span>{{ownerInfo.location}}</span></p>
          </div>
        </el-card>

        <!-- 留言板 -->
        <el-card
          shadow="hover"
          style=" margin-top: 20px"
        >
          <p style="front-size:14px; color: #999999;">留言板</p>
          <el-divider></el-divider>
          <div class="leave-msg">
            <el-table
              :data="leaveCommentData"
              :show-header="false"
            >
              <el-table-column :max-width="40">
                <template
                  slot-scope="scope"
                  style="display: flex; align-items: 'center'"
                >
                  <div style="display: flex; align-items: center">
                    <el-avatar
                      :src="scope.row.avatar"
                      :size="24"
                    ></el-avatar>
                    <span style="margin-left: 10px;">{{ scope.row.userName }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column :min-width="160">
                <template slot-scope="scope">
                  <i class="el-icon-chat-round"></i>
                  <span style="margin-left: 10px">{{ scope.row.message }}</span>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span class="msg-time">{{ scope.row.time }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <span style="float:right">
            <el-button
              icon="el-icon-edit"
              circle
              style=" margin: 10px; margin-left: 260px;"
              size="small"
              @click="leaveMsgClick"
            ></el-button>
          </span>

        </el-card>

        <!-- 标签栏 -->
        <el-card
          shadow="hover"
          style=" margin-top: 20px"
        >
          <p style="front-size:14px; color: #999999;">热门标签</p>
          <el-divider></el-divider>
          <div>
            <div style="display: flex; word-wrap:break-word;word-break:break-all;">
              <div>
                <el-button
                  round
                  style=" margin: 8px"
                  size="mini"
                  plain
                  v-for="item, index in tags"
                  :key=index
                  :type="item.tagType"
                  @click="tagClick(item.tagName)"
                >{{item.tagName}}</el-button>
              </div>
            </div>
          </div>
        </el-card>

        <!-- 友情链接 -->
        <el-card
          shadow="hover"
          style=" margin-top: 20px"
        >
          <p style="front-size:14px; color: #999999;">链接</p>
          <el-divider></el-divider>
          <div style="display: flex; word-wrap:break-word;word-break:break-all;">
            <div>
              <el-link
                style=" margin: 5px"
                v-for="item, index in links"
                :key=index
                @click="openWindow(item.url)"
              >{{item.name}}</el-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 模态窗口 -->
    <el-dialog
      title="留言"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item
          label="留言板"
          :label-width="formLabelWidth"
        >
          <el-input
            type="textarea"
            :rows="3"
            placeholder="我简单地说两句啊..."
            v-model="form.message"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="commitLeaveMsg(form.message)"
        >确 定</el-button>
      </div>
    </el-dialog>
    <my-icp></my-icp>
  </div>

</template>

<style lang="scss" scoped>
.article {
  h1 {
    font-size: 25px;
    font-weight: bold;
    font-family: "PMingLiU";
  }
  p {
    font-size: 18px;
    text-indent: 2em;
    line-height: 30px;
    font-family: "PMingLiU";
  }
}

.article-info {
  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
  font-family: "PMingLiU";
  text-align: "center";
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.leave-msg {
  font-size: 10px;
  font-family: "PMingLiU";
  .msg-time {
    margin-left: 10px;
    font-size: 2px;
  }
}
</style>

<script>
import { getOwnerInfoApi, getMessageApi, getTagApi, getLinkApi, getCarouselApi, addMessageApi, helloApi } from '../../api/data'
import BlogList from '../BlogList.vue'
export default {
  components: { BlogList },

  data() {
    return {
      dialogFormVisible: false,
      form: {
        message: ''
      },
      formLabelWidth: '60px',

      ownerInfo: {},
      leaveCommentData: [],
      leaveCommentLabel: {},
      tags: [],
      articles: [],
      links: [],
      images: [],

      title: '首页'
    }
  },
  methods: {
    // 点击文章走马灯图片 跳转文章界面
    articleClick(id) {
      // alert(id)
      this.$router.push({ name: 'article', params: { id }, query: { code: this.$route.query.code } })
    },

    getHomeInfo() {
      // 博主信息卡片
      getOwnerInfoApi().then(res => {
        // console.log(res)
        this.ownerInfo = res.data.ownerInfo
      })

      // 留言卡片
      getMessageApi().then(res => {
        // console.log(res)
        this.leaveCommentData = res.data.leaveCommentData
        this.leaveCommentLabel = res.data.leaveCommentLabel
      })

      // 标签展示
      getTagApi().then(res => {
        // console.log(res)
        this.tags = res.data.tags
      })

      // 友情链接
      getLinkApi().then(res => {
        // console.log(res)
        this.links = res.data.links
      })

      // 走马灯图片
      getCarouselApi().then(res => {
        // console.log(res.data)
        this.images = res.data.images
      })
    },

    // 触发事件

    // 点击留言
    leaveMsgClick() {
      if (this.getLoginState) {
        // 已登录 打开带form的模态窗口
        this.dialogFormVisible = true
      } else {
        // 未登录  弹窗
        // this.$notify.info({
        //   title: '您还未登录哦',
        //   message: '登录您的Gitee账号后再来试试吧！'
        // })
        this.$alert('登录您的Gitee账号后再来试试吧~', '您还未登录哦', {
          confirmButtonText: 'Roger That! '
        })
      }
    },

    // 点击留言板-确定
    commitLeaveMsg(msg) {
      if (msg === '') {
        this.$notify({
          message: '写些内容再提交吧！',
          duration: 2000,
          position: 'bottom-left'
        })
        return
      }
      addMessageApi(msg, this.$route.query.user).then(res => {
        console.log('留言提交结果：' + res.data.addRes)
        if (res.data.addRes === 'success') {
          // 重新加载留言列表
          getMessageApi().then(res => {
            // console.log(res)
            this.leaveCommentData = res.data.leaveCommentData
            this.leaveCommentLabel = res.data.leaveCommentLabel
          })
          this.form.message = ''

          this.$notify({
            message: '感谢您的留言哦，小蔡同学马上就会看到！',
            duration: 2000,
            position: 'bottom-left'
          })
        } else {
          this.$notify({
            message: '留言好像没有成功呢，请稍后再试试吧！',
            duration: 2000,
            position: 'bottom-left'
          })
        }
        this.dialogFormVisible = false
      })
    },

    // 点击tag按钮
    tagClick(tagName) {
      // this.$store.commit('getPageName', tagName)
      this.$router.push({ name: 'tag', params: { tagName }, query: { user: this.$route.query.user } })
    },

    openWindow(url) {
      const newWindow = window.open(url)
      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }
  },
  mounted() {
    this.getHomeInfo()
    helloApi()
  },
  computed: {
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
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

<style lang="scss" src="../../assets/scss/home.scss" scoped>
</style>

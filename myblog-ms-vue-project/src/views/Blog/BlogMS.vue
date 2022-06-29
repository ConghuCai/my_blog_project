<template>
  <div class="main">
    <el-form
      :model="searchForm"
      class="search-form"
    >
      <el-form-item class="candition">
        <el-input
          type="text"
          placeholder="ID..."
          v-model="searchForm.id"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="candition">
        <el-input
          type="text"
          placeholder="博文标题..."
          v-model="searchForm.title"
        >
        </el-input>
      </el-form-item>
      <el-form-item class="candition">
        <el-select
          class="kind-select"
          v-model="searchForm.kind"
          placeholder="选择专栏..."
        >
          <el-option
            v-for="(item, index) in kindData"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="candition">
        <el-select
          class="tag-select"
          v-model="searchForm.tag"
          placeholder="选择tag..."
        >
          <el-option
            v-for="(item, index) in tagData"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-button
        class="btn"
        type="warning"
        size="mini"
        @click="searchClick"
      >搜索博文</el-button>
      <el-button
        class="btn2"
        type="danger"
        size="mini"
        @click="resetSearch"
      >清空条件</el-button>
    </el-form>

    <el-row
      style="margin-top:20px"
      v-for="item in articles"
      :key="item.id"
    >
      <el-card
        shadow="hover"
        class="article-card"
      >
        <div class="id-row">
          <span class="id-prefix">ID</span>
          <span class="id">{{item.id}}</span>
        </div>
        <div class="title-row">
          <span class="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <h1>{{item.title}}</h1>
          </span>
          <span class="btns">
            <el-button
              icon="el-icon-edit"
              circle
              class="btn"
              @click="reviseCilck(item)"
            ></el-button>
            <el-popconfirm
              confirm-button-text='删了吧'
              cancel-button-text='点错了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这篇博文吗？操作不可恢复∑( 口 ||"
              class="popconfirm"
              @confirm="deleteCilck(item)"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                slot="reference"
              ></el-button>
            </el-popconfirm>

          </span>
        </div>
        <el-divider></el-divider>
        <p>{{item.intro}}</p>
        <el-divider><i class="el-icon-reading" /></el-divider>
        <div class="article-info">
          <div class="article-info-1fl">
            <span class="elems-1fl">{{item.time}}</span>
            <span class="elems-1fl">
              <i class="el-icon-view"> {{item.clickCount}}</i>
              <i class="el-icon-star-off"> {{item.likeCount}}</i>
              <i class="el-icon-chat-square"> {{item.commentCount}}</i>
              <i class="el-icon-share"> {{item.shareCount}}</i>
            </span>
          </div>
          <div class="article-info-2fl">
            <div class="left-2fl">
              <i class="el-icon-magic-stick" />
              <span>{{item.type}}</span>
            </div>
            <span class="right-2fl">
              <span>
                <el-tag
                  class="tags"
                  size="small"
                  v-for="subitem, index in item.tag"
                  :key="index"
                  :type="item.tagType[index]"
                >{{subitem}}</el-tag>
              </span>
            </span>
          </div>
        </div>

      </el-card>
    </el-row>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="totalItem"
      :page-size="pageSize"
      :current-page="page"
      @current-change="pageChanged"
    >
    </el-pagination>

    <!-- 模态窗口 -->
    <el-dialog
      :title="'修改博文 · ID:' + form.id"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <div class="info-form">
        <el-form
          :model="form"
          :rules="rules"
          ref="form"
          class="demo-ruleForm"
        >
          <el-form-item
            label="博文标题"
            prop="title"
          >
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item
            label="博文简介"
            prop="intro"
          >
            <el-input
              type="textarea"
              v-model="form.intro"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="封面URL"
            prop="img"
          >
            <div class="info-img-block">
              <span class="url">
                <el-input v-model="form.src"></el-input>
              </span>
              <span
                class="img"
                v-if="form.src!==''"
              >
                <el-image
                  :src="form.src"
                  :fit="'scale-down'"
                >
                  <span
                    slot="placeholder"
                    class="image-slot"
                  >
                    加载中<span class="dot">...</span>
                  </span>
                </el-image>
              </span>
            </div>
          </el-form-item>

          <div class="select-up">
            <el-form-item
              label="所属专栏"
              prop="type"
            >
              <el-select
                class="kind-select"
                v-model="form.type"
                placeholder="选择文章专栏"
              >
                <el-option
                  v-for="(item, index) in kindData"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item
              label="标题图标"
              prop="icon"
            >
              <el-select
                class="icon-select"
                v-model="form.icon"
                filterable
                placeholder="选择一个小图标"
              >
                <el-option
                  v-for="(item, index) in iconData"
                  :key="index"
                  :value="item"
                ><template><i :class="'el-icon-'+item"></i> {{item}}</template></el-option>
              </el-select>
              <span class="icon-span">
                <i :class="'el-icon-'+form.icon"></i>
              </span>
            </el-form-item>
          </div>

          <el-form-item
            label="文章标签"
            prop="tag"
          >
            <el-select
              class="select-down"
              v-model="form.tag"
              placeholder="选择文章标签"
              multiple
              filterable
              allow-create
            >
              <el-option
                v-for="(item, index) in tagData"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="走马灯图片序号"
            prop="carousel"
          >
            <el-input-number
              v-model="form.carousel"
              :min="1"
              size="small"
            ></el-input-number>
          </el-form-item>
        </el-form>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="submit('form')"
        >确 定</el-button>
      </div>
    </el-dialog>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin-inline: 3%;
}

.article-card {
  h1 {
    text-indent: 0.5em;
    font-size: 25px;
    font-weight: bold;
    font-family: "STZhongsong";
  }
  p {
    font-size: 18px;
    text-indent: 2em;
    line-height: 30px;
    font-family: "PMingLiU";
  }
}

.article-info {
  margin-inline: 12%;
  text-align: center;
}

.article-info-1fl {
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
  font-family: "PMingLiU";
  text-align: "center";

  .elems-1fl {
    max-width: 50%;
  }
}

.article-info-2fl {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-2fl {
    max-width: 35%;

    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
    font-family: "PMingLiU";
    text-align: "center";

    i {
      margin-right: 10px;
    }
  }

  .right-2fl {
    max-width: 50%;
    margin-top: 10px;

    .tags {
      margin: 5px;
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.id-row {
  font-size: 1.2vh;
  margin-left: 5px;
  margin-bottom: 5px;
  font-family: "PMingLiU";
  .id-prefix {
    color: #281c5c;
  }
  .id {
    margin-left: 5px;
    color: #8a9ab3;
  }
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    display: flex;
    align-items: center;
    h1 {
      color: #4d617c;
    }
  }
  .btns {
    padding: 0%;
    display: flex;
    .btn {
      margin-right: 1.3vh;
    }
    .popconfirm {
      margin-right: 1.1vh;
    }
  }
}

.info-form {
  .info-img-block {
    height: 10%;
    display: flex;
    align-items: center;
    .url {
      width: 55%;
    }
    .img {
      width: 25%;
      margin-left: 3%;
    }
  }
  .select-up {
    display: flex;
    justify-content: space-between;

    .kind-select {
      width: 60%;
    }
    .icon-select {
      width: 40%;
    }
    .icon-span {
      margin-left: 3%;
      margin-right: 3%;
    }
  }
  .select-down {
    width: 80%;
  }
}

.search-form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
  .candition {
    margin-bottom: 0%;
  }
}
</style>

<script>
import { deleteArticleApi, getArticleListApi, getKindListApi, getTagListApi, updateArticleApi } from '../../api/data'
export default {
  data() {
    var validTag = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请输入至少一项标签'))
      } else if (value.length > 4) {
        callback(new Error('至多4项标签'))
      } else {
        callback()
      }
    }

    return {
      title: '博文',
      articles: [
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          title: '[展示数据]Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          intro: '安装nodejs+vue+vuecli和webpack踩了好多坑，赶紧记录下...',
          clickCount: 666,
          likeCount: 6,
          commentCount: 6,
          shareCount: 6,
          carousel: 1,
          time: '2021-11-19 22:31:15',
          tag: ['展示数据', '踩坑记录', '博客开发'],
          tagType: ['info', 'warning', 'success'],
          type: 'Vue',
          typeValue: 'vue',
          icon: 'mouse',
          src: 'https://i.loli.net/2021/12/01/UcwAWDnK3JfE9Lg.jpg'
        },
        {
          id: '53d15432772e4a39af1e21e71765b212',
          title: '[展示数据]2021-11-13 SpringBoot整合Dubbo的步骤',
          intro: 'SpringBoot和Dubbo在项目中如何整合和使用',
          clickCount: 666,
          likeCount: 6,
          commentCount: 6,
          shareCount: 6,
          carousel: 2,
          time: '2021-11-19 22:31:15',
          tag: ['展示数据', '踩坑记录', '博客开发'],
          tagType: ['info', 'warning', 'success'],
          type: 'Java',
          typeValue: 'java',
          icon: 'sunny',
          src: 'https://i.loli.net/2021/12/01/UcwAWDnK3JfE9Lg.jpg'
        },
        {
          id: '6fb53b2a9d2d4bd288f80f4dbb3360bd',
          title: '[展示数据]安装GO开发工具和配置Vscode开发环境的记录',
          intro: '安装GO开发工具和配置Vscode开发环境的记录',
          clickCount: 666,
          likeCount: 6,
          commentCount: 6,
          shareCount: 6,
          carousel: 3,
          time: '2021-11-19 22:31:15',
          tag: ['展示数据', '踩坑记录', '博客开发'],
          tagType: ['info', 'warning', 'success'],
          type: 'Golang',
          typeValue: 'golang',
          icon: 'place',
          src: 'https://i.loli.net/2021/12/01/UcwAWDnK3JfE9Lg.jpg'
        },
        {
          id: '724ba273e5ef4813af5b0d52dce196fa',
          title: '[展示数据]2021-10-27 SSM整合的开发思路',
          intro: '最近学习了SSM经典框架，东西比较多，原理部分也只是做了简单了解，想通过写一个Webapp接受前端请求对数据库进行CRUD操作的案例巩固一下。',
          clickCount: 666,
          likeCount: 6,
          commentCount: 6,
          shareCount: 6,
          carousel: 4,
          time: '2021-11-19 22:31:15',
          tag: ['展示数据', '踩坑记录', '博客开发'],
          tagType: ['info', 'warning', 'success'],
          type: 'Java',
          typeValue: 'java',
          icon: 'discover',
          src: 'https://i.loli.net/2021/12/01/UcwAWDnK3JfE9Lg.jpg'
        },
        {
          id: 'f2ab12575c774a778fd5f3063e6d5219',
          title: '[展示数据]2021-11-13 记录：Java连接远程Redis的报错信息和解决办法',
          intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
          clickCount: 666,
          likeCount: 6,
          commentCount: 6,
          shareCount: 6,
          carousel: 5,
          time: '2021-11-19 22:31:15',
          tag: ['展示数据', '踩坑记录', '博客开发'],
          tagType: ['info', 'warning', 'success'],
          type: 'Redis',
          typeValue: 'redis',
          icon: 'trophy',
          src: 'https://i.loli.net/2021/12/01/UcwAWDnK3JfE9Lg.jpg'
        }
      ],
      page: 1,
      totalItem: 5,
      pageSize: 5,

      dialogFormVisible: false,
      kindData: [
        {
          label: 'JAVA',
          value: 'java'
        },
        {
          label: 'Golang',
          value: 'golang'
        },
        {
          label: 'Vue',
          value: 'vue'
        },
        {
          label: 'Redis',
          value: 'redis'
        }
      ],
      tagData: [
        {
          label: '踩坑记录',
          value: '踩坑记录'
        },
        {
          label: '展示数据',
          value: '展示数据'
        },
        {
          label: '博客开发',
          value: '博客开发'
        }
      ],
      iconData: [
        'delete-solid',
        'delete',
        's-tools',
        'setting',
        'user-solid',
        'user',
        'phone',
        'phone-outline',
        'more',
        'more-outline',
        'star-on',
        'star-off',
        's-goods',
        'goods',
        'warning',
        'warning-outline',
        'question',
        'info',
        'remove',
        'circle-plus',
        'success',
        'error',
        'zoom-in',
        'zoom-out',
        'remove-outline',
        'circle-plus-outline',
        'circle-check',
        'circle-close',
        's-help',
        'help',
        'minus',
        'plus',
        'check',
        'close',
        'picture',
        'picture-outline',
        'picture-outline-round',
        'upload',
        'upload2',
        'download',
        'camera-solid',
        'camera',
        'video-camera-solid',
        'video-camera',
        'message-solid',
        'bell',
        's-cooperation',
        's-order',
        's-platform',
        's-fold',
        's-unfold',
        's-operation',
        's-promotion',
        's-home',
        's-release',
        's-ticket',
        's-management',
        's-open',
        's-shop',
        's-marketing',
        's-flag',
        's-comment',
        's-finance',
        's-claim',
        's-custom',
        's-opportunity',
        's-data',
        's-check',
        's-grid',
        'menu',
        'share',
        'd-caret',
        'caret-left',
        'caret-right',
        'caret-bottom',
        'caret-top',
        'bottom-left',
        'bottom-right',
        'back',
        'right',
        'bottom',
        'top',
        'top-left',
        'top-right',
        'arrow-left',
        'arrow-right',
        'arrow-down',
        'arrow-up',
        'd-arrow-left',
        'd-arrow-right',
        'video-pause',
        'video-play',
        'refresh',
        'refresh-right',
        'refresh-left',
        'finished',
        'sort',
        'sort-up',
        'sort-down',
        'rank',
        'loading',
        'view',
        'c-scale-to-original',
        'date',
        'edit',
        'edit-outline',
        'folder',
        'folder-opened',
        'folder-add',
        'folder-remove',
        'folder-delete',
        'folder-checked',
        'tickets',
        'document-remove',
        'document-delete',
        'document-copy',
        'document-checked',
        'document',
        'document-add',
        'printer',
        'paperclip',
        'takeaway-box',
        'search',
        'monitor',
        'attract',
        'mobile',
        'scissors',
        'umbrella',
        'headset',
        'brush',
        'mouse',
        'coordinate',
        'magic-stick',
        'reading',
        'data-line',
        'data-board',
        'pie-chart',
        'data-analysis',
        'collection-tag',
        'film',
        'suitcase',
        'suitcase-1',
        'receiving',
        'collection',
        'files',
        'notebook-1',
        'notebook-2',
        'toilet-paper',
        'office-building',
        'school',
        'table-lamp',
        'house',
        'no-smoking',
        'smoking',
        'shopping-cart-full',
        'shopping-cart-1',
        'shopping-cart-2',
        'shopping-bag-1',
        'shopping-bag-2',
        'sold-out',
        'sell',
        'present',
        'box',
        'bank-card',
        'money',
        'coin',
        'wallet',
        'discount',
        'price-tag',
        'news',
        'guide',
        'male',
        'female',
        'thumb',
        'cpu',
        'link',
        'connection',
        'open',
        'turn-off',
        'set-up',
        'chat-round',
        'chat-line-round',
        'chat-square',
        'chat-dot-round',
        'chat-dot-square',
        'chat-line-square',
        'message',
        'postcard',
        'position',
        'turn-off-microphone',
        'microphone',
        'close-notification',
        'bangzhu',
        'time',
        'odometer',
        'crop',
        'aim',
        'switch-button',
        'full-screen',
        'copy-document',
        'mic',
        'stopwatch',
        'medal-1',
        'medal',
        'trophy',
        'trophy-1',
        'first-aid-kit',
        'discover',
        'place',
        'location',
        'location-outline',
        'location-information',
        'add-location',
        'delete-location',
        'map-location',
        'alarm-clock',
        'timer',
        'watch-1',
        'watch',
        'lock',
        'unlock',
        'key',
        'service',
        'mobile-phone',
        'bicycle',
        'truck',
        'ship',
        'basketball',
        'football',
        'soccer',
        'baseball',
        'wind-power',
        'light-rain',
        'lightning',
        'heavy-rain',
        'sunrise',
        'sunrise-1',
        'sunset',
        'sunny',
        'cloudy',
        'partly-cloudy',
        'cloudy-and-sunny',
        'moon',
        'moon-night',
        'dish',
        'dish-1',
        'food',
        'chicken',
        'fork-spoon',
        'knife-fork',
        'burger',
        'tableware',
        'sugar',
        'dessert',
        'ice-cream',
        'hot-water',
        'water-cup',
        'coffee-cup',
        'cold-drink',
        'goblet',
        'goblet-full',
        'goblet-square',
        'goblet-square-full',
        'refrigerator',
        'grape',
        'watermelon',
        'cherry',
        'apple',
        'pear',
        'orange',
        'coffee',
        'ice-tea',
        'ice-drink',
        'milk-tea',
        'potato-strips',
        'lollipop',
        'ice-cream-square',
        'ice-cream-round'
      ],

      form: {
        id: '',
        title: '',
        intro: '',
        tag: [],
        type: '',
        icon: '',
        src: '',
        carousel: 1
      },
      rules: {
        title: [
          { required: true, message: '请输入博文标题', trigger: 'blur' }
        ],
        intro: [
          { required: true, message: '请填写博文简介', trigger: 'blur' },
          { max: 500, message: '长度在500字符以内', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择专栏', trigger: 'change' }
        ],
        tag: [
          { required: true, validator: validTag, trigger: 'change' }
        ],
        icon: [
          { required: true, message: '请选择一个小图标', trigger: 'change' }
        ],
        carousel: [
          { required: true, message: '请选择首页图片走马灯序号', trigger: 'change' }
        ]
      },

      searchForm: {
        id: '',
        title: '',
        kind: '',
        tag: ''
      }
    }
  },

  methods: {
    pageKindListInit() {
      getKindListApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.kindData = res.data
      })
    },

    pageTagListInit() {
      getTagListApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tagData = res.data
      })
    },

    pageChanged(currentPage) {
      this.page = currentPage
      // this.getArticle(currentPage)
      this.search(this.searchForm, this.page)
    },

    reviseCilck(article) {
      this.form.id = article.id
      this.form.title = article.title
      this.form.intro = article.intro
      this.form.type = article.typeValue
      this.form.icon = article.icon
      this.form.src = article.src
      this.form.carousel = article.carousel

      var tag = new Array(article.tag.length)
      for (var i = 0; i < tag.length; i++) {
        tag[i] = article.tag[i]
      }
      this.form.tag = tag

      this.dialogFormVisible = true
    },

    deleteCilck(article) {
      this.delete(article.id)
      // 重新加载当前页
      this.search(this.searchForm, this.page)
    },

    searchClick() {
      // console.log(this.searchForm)
      // 搜索第一页
      this.search(this.searchForm, 1)
    },

    resetSearch() {
      this.searchForm.id = ''
      this.searchForm.tag = ''
      this.searchForm.title = ''
      this.searchForm.kind = ''
    },

    articleInfoUpload() {
      // alert('submit!')
      updateArticleApi(this.form).then(res => {
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，修改失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }
        if (!res.success) {
          this.$notify({
            message: '修改失败/(ㄒoㄒ)/~~  原因：' + res.msg + '，请您稍后再试试吧~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }

        this.$notify({
          message: '修改成功~  φ(゜▽゜*)♪',
          duration: 2000,
          position: 'bottom-left'
        })
        this.dialogFormVisible = false
        var condition = { id: '', title: '', kind: '', tag: '' }
        this.search(condition, this.page)
      })
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          // 验证完成，调用接口发表
          this.articleInfoUpload()
          this.search(this.searchForm, this.page)
        } else {
          this.$notify({
            message: '请按照填写信息哦~',
            duration: 2000,
            position: 'bottom-left'
          })
          return false
        }
      })
    },

    delete(id) {
      deleteArticleApi(id).then(res => {
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，删除失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }
        if (!res.success) {
          this.$notify({
            message: '删除失败/(ㄒoㄒ)/~~  原因：' + res.msg + '，请您稍后再试试吧~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }

        this.$notify({
          message: '删除成功~  φ(゜▽゜*)♪',
          duration: 2000,
          position: 'bottom-left'
        })
        var condition = { id: '', title: '', kind: '', tag: '' }
        this.page = 1
        this.search(condition, 1)
      })
    },

    search(condition, page) {
      getArticleListApi(condition, page).then(res => {
        // console.log(res)
        if (res.code === 403) {
          this.$notify({
            message: '管理页的博文列表查询暂时不对游客开放，仅供展示哦~',
            duration: 2000,
            position: 'bottom-left'
          })
          return false
        }

        this.articles = res.data.articles
        this.totalItem = res.data.totalItem
        this.pageSize = res.data.pageSize
      })
    }
  },

  mounted() {
    this.pageKindListInit()
    this.pageTagListInit()

    // 无条件  查询第一页
    var condition = { id: '', title: '', kind: '', tag: '' }
    this.search(condition, 1)
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

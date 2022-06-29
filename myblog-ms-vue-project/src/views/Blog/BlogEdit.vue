<template>
  <div class="blog-edit">
    <div class="info-form">
      <el-card shadow="hover">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="博文标题"
            prop="title"
          >
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item
            label="博文简介"
            prop="intro"
          >
            <el-input
              type="textarea"
              v-model="ruleForm.intro"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="封面URL"
            prop="img"
          >
            <div class="info-img-block">
              <span class="url">
                <el-input v-model="ruleForm.img"></el-input>
              </span>
              <span
                class="img"
                v-if="ruleForm.img!==''"
              >
                <el-image
                  :src="ruleForm.img"
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
              prop="kind"
            >
              <el-select
                class="kind-select"
                v-model="ruleForm.kind"
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
                v-model="ruleForm.icon"
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
                <i :class="'el-icon-'+ruleForm.icon"></i>
              </span>
            </el-form-item>
          </div>

          <div class="select-down">
            <el-form-item
              label="文章标签"
              prop="tag"
            >
              <el-select
                class="tag-select"
                v-model="ruleForm.tag"
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
              label="走马灯序号"
              prop="carousel"
            >
              <el-input-number
                class="carousel-select"
                v-model="ruleForm.carousel"
                :min="1"
                size="small"
              ></el-input-number>
            </el-form-item>
          </div>
        </el-form>
      </el-card>
    </div>
    <div class="editor">
      <mavon-editor
        ref="md"
        placeholder="[MarkDown格式] 请输入博文的内容..."
        :boxShadow="false"
        style="z-index:1;border: 1px solid #d9d9d9;height:70vh"
        v-model="content"
        :toolbars="toolbars"
      />
    </div>

    <div class="buttons">
      <el-upload
        class="upload"
        action=""
        ref="upload"
        :on-change="handleChange"
        :file-list="fileList"
        accept=".md"
        :auto-upload="false"
        :multiple="false"
        :on-exceed="handleChange"
      >
        <el-button
          class="button"
          slot="trigger"
          size="small"
          type="primary"
          round
        >选取MD文件<i class="el-icon-upload el-icon--right"></i></el-button>

      </el-upload>
      <el-button
        @click="submit('ruleForm')"
        size="small"
        type="danger"
        round
      >发表<i class="el-icon-upload2 el-icon--right"></i></el-button>

    </div>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.blog-edit {
  padding: 0px;
}

.info-form {
  margin-top: 2%;
  margin-inline: 8%;

  .info-img-block {
    height: 10%;
    display: flex;
    align-items: center;
    .url {
      width: 65%;
    }
    .img {
      width: 25%;
      margin-left: 5%;
    }
  }

  .select-up {
    display: flex;
    justify-content: space-between;

    .kind-select {
      width: 60vh;
    }
    .icon-select {
      width: 16vh;
    }
    .icon-span {
      margin-left: 3vh;
      margin-right: 3vh;
    }
  }
  .select-down {
    display: flex;
    justify-content: space-between;
    .tag-select {
      width: 60vh;
    }
    .carousel-select {
      width: 16vh;
      margin-right: 5vh;
    }
  }
}
.editor {
  margin-top: 3%;
  margin-inline: 3%;
}

.buttons {
  margin-inline: 5%;
  margin-top: 1%;
  display: flex;
  float: right;
  align-items: center;
  padding-bottom: 5%;
  .upload {
    margin-right: 15px;
  }
  .button {
    margin-left: 15px;
  }
}
</style>

<script>
import { addArticleApi, getKindListApi, getTagListApi } from '../../api/data'
export default {
  components: {},
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
      title: '写篇博客',
      content: '',
      fileList: [],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },

      kindData: [
        {
          label: '(展示数据)JAVA',
          value: 'java'
        },
        {
          label: '(展示数据)Golang',
          value: 'golang'
        },
        {
          label: '(展示数据)Linux',
          value: 'linux'
        },
        {
          label: '(展示数据)Redis',
          value: 'redis'
        },
        {
          label: '(展示数据)数据结构和算法',
          value: 'algorithm'
        }
      ],

      tagData: [
        {
          label: '(展示数据)踩坑记录',
          value: '踩坑记录'
        },
        {
          label: '(展示数据)SpringBoot',
          value: 'SpringBoot'
        },
        {
          label: '(展示数据)Dubbo',
          value: 'Dubbo'
        },
        {
          label: '(展示数据)Spring',
          value: 'Spring'
        },
        {
          label: '(展示数据)前端开发',
          value: '前端开发'
        },
        {
          label: '(展示数据)MyBatis',
          value: 'MyBatis'
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

      ruleForm: {
        title: '',
        intro: '',
        img: '',
        kind: '',
        tag: [],
        icon: '',
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
        kind: [
          { required: true, message: '请选择专栏', trigger: 'change' }
        ],
        tag: [
          { required: true, validator: validTag, trigger: 'change' }
        ],
        icon: [
          { required: true, message: '请选择一个小图标', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.content !== '') {
          // alert('submit!')
          // 验证完成，调用接口发表
          this.articleUpload()
        } else if (!valid) {
          this.$notify({
            message: '请按照填写信息哦~',
            duration: 2000,
            position: 'bottom-left'
          })
          return false
        } else {
          this.$notify({
            message: '博文内容不可为空哦~',
            duration: 2000,
            position: 'bottom-left'
          })
          return false
        }
      })
    },

    // 读取markdown文件并渲染至界面
    handleChange(file, fileList) {
      if (fileList.length > 1 && file.status !== 'fail') {
        fileList.splice(0, 1)
      } else if (file.status === 'fail') {
        this.$notify({
          message: '上传失败/(ㄒoㄒ)/~~，请重新上传！',
          duration: 0,
          position: 'bottom-left'
        })
        fileList.splice(0, 1)
        return
      }
      const fileName = file.name
      const fileType = fileName.substring(fileName.lastIndexOf('.'))
      if (fileType !== '.md') {
        this.$notify({
          message: '上传的啥文件啊···貌似解析不了(○´･д･)ﾉ  请上传.md文件哦~',
          duration: 0,
          position: 'bottom-left'
        })
        fileList.splice(0, 1)
        return
      }
      if (file.raw) {
        const reader = new FileReader()
        reader.readAsText(file.raw, 'utf-8')
        var _this = this
        reader.onload = function () {
          // 注意onload里面的this指向reader对象 如果要使用vue的this  请在外部保留一份异名引用
          _this.content = this.result
        }
      }
    },

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

    articleUpload() {
      // 传json过去
      addArticleApi(this.ruleForm, this.content).then(res => {
        console.log(res)
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，发表失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        } else if (!res.success) {
          this.$notify({
            message: '发表失败/(ㄒoㄒ)/~~  原因：' + res.msg + '，请您稍后再试试吧~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }
        this.$notify({
          message: '发表成功~  φ(゜▽゜*)♪',
          duration: 2000,
          position: 'bottom-left'
        })
        this.ruleForm.title = ''
        this.ruleForm.intro = ''
        this.ruleForm.img = ''
        this.ruleForm.kind = ''
        this.ruleForm.tag = []
        this.ruleForm.icon = ''
        this.ruleForm.carousel = 1
        this.content = ''
      })
        .catch(Error => {
          console.log(Error)
        })
    }
  },

  // 路由跳转提示
  beforeRouteLeave(to, from, next) {
    if (this.content === '' && this.ruleForm.title === '' &&
      this.ruleForm.intro === '' && this.ruleForm.img === '' &&
      this.ruleForm.kind === '' && this.ruleForm.icon === '' &&
      this.ruleForm.tag.length === 0) {
      next()
      return
    }
    const answer = window.confirm('当前博文可能未上传成功，信息未保存，确定要离开？')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },

  mounted() {
    this.pageKindListInit()
    this.pageTagListInit()
    // 浏览器刷新确认
    var _this = this
    console.log(_this.$route.fullPath)
    window.onbeforeunload = function (e) {
      if (_this.$route.fullPath === '/blog-edit') {
        e = e || window.event
        if (e) {
          e.returnValue = '关闭提示'
        }
        return '关闭提示'
      } else {
        window.onbeforeunload = null
      }
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

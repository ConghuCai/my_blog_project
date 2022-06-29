<template>
  <div style="margin-inline: 8%">
    <div class="up-select">
      <el-select
        class="select"
        v-model="menuID"
        placeholder="选择专栏类别"
      >
        <el-option
          v-for="(item, index) in menuData"
          :key="index"
          :label="item.label"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-button
        type="primary"
        icon="el-icon-plus"
        circle
        @click="addClick"
      ></el-button>
    </div>
    <el-card shadow="hover">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <p class="kind-intro">专栏简介：{{ props.row.intro }}</p>
          </template>
        </el-table-column>
        <el-table-column width="100">
          <template slot-scope="scope">
            <span>
              <el-avatar :src="scope.row.avatar"></el-avatar>
            </span>
          </template>
        </el-table-column>
        <el-table-column
          label="专栏名称"
          prop="label"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="创建时间"
          prop="time"
          width="200"
          align="center"
          :sortable="true"
        >
        </el-table-column>
        <el-table-column
          label="博文总数"
          prop="count"
          width="120"
          align="center"
          :sortable="true"
        >
        </el-table-column>
        <el-table-column
          label="序号"
          prop="sort"
          width="80"
          :sortable="true"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="200"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editClick(scope.row)"
              style="margin-right: 10px"
            >编辑</el-button>
            <el-popconfirm
              confirm-button-text='删了吧'
              cancel-button-text='点错了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这个专栏吗？操作不可恢复 ∑( 口 ||"
              @confirm="deleteClick(scope.row)"
            >
              <el-button
                size="mini"
                type="danger"
                slot="reference"
              >删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 模态窗口 -->
    <el-dialog
      :title="'专栏信息填写'"
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
            :hidden="!addNewKind"
            label="英文名称"
            prop="name"
          >
            <el-input
              v-model="form.name"
              class="name-label"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="专栏标题"
            prop="label"
          >
            <el-input
              v-model="form.label"
              class="name-label"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="专栏简介"
            prop="intro"
          >
            <el-input
              type="textarea"
              v-model="form.intro"
              :rows="4"
              class="intro"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="头像URL"
            prop="avatar"
          >
            <div class="info-img-block">
              <span class="url">
                <el-input v-model="form.avatar"></el-input>
              </span>
              <span
                class="img"
                v-if="form.avatar!==''"
              >
                <el-avatar
                  :src="form.avatar"
                  :size="100"
                >
                </el-avatar>
              </span>
            </div>
          </el-form-item>

          <el-form-item
            label="所属分区"
            prop="menu"
          >
            <el-select
              class="menu-select"
              v-model="form.menu"
              placeholder="选择文章专栏"
            >
              <el-option
                v-for="(item, index) in menuData"
                :key="index"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="排序号"
            prop="sort"
          >
            <el-input-number
              v-model="form.sort"
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
          @click="kindInfoSubmit('form')"
        >确 定</el-button>
      </div>
    </el-dialog>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.info-form {
  margin-inline: 8%;
  .name-label {
    width: 60%;
  }
  .intro {
    width: 80%;
  }

  .info-img-block {
    height: 10%;
    display: flex;
    align-items: center;
    .url {
      width: 55%;
    }
    .img {
      width: 25%;
      margin-left: 10%;
    }
  }
}

.menu-select {
  width: 50%;
}

.up-select {
  display: flex;
  justify-content: space-between;
  margin-inline: 1%;
  margin-top: 1%;
  margin-bottom: 1.5%;
}

.kind-intro {
  margin-inline: 5%;
  text-indent: 2em;
  line-height: 25px;
}
</style>

<script>
import { addUpdateKindApi, deleteKindApi, getMenuKindListApi } from '../../api/data'
export default {
  data() {
    return {
      title: '专栏',
      menuID: 2,
      menuData: [
        {
          label: '[展示数据]后端技术',
          id: 2
        },
        {
          label: '[展示数据]前端技术',
          id: 3
        }
      ],
      kindData: [
        {
          name: 'java',
          label: '[展示数据]JAVA',
          avatar: 'http://cdn.conghucai.site/myblog/category/java.jpg',
          intro: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。',
          time: '2021-11-25',
          count: 3,
          sort: 1,
          menu: 2
        },
        {
          name: 'python',
          label: '[展示数据]PYTHON',
          avatar: 'http://cdn.conghucai.site/myblog/category/python.jpg',
          intro: 'Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。Python 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。',
          time: '2021-11-25',
          count: 3,
          sort: 2,
          menu: 2
        },
        {
          name: 'golang',
          label: '[展示数据]GOLANG',
          avatar: 'http://cdn.conghucai.site/myblog/category/golang.jpg',
          intro: 'Go（又称Golang）是Google开发的一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。Go 语言语法与 C 相近，但功能上有：内存安全，GC（垃圾回收），结构形态及 CSP-style 并发计算。',
          time: '2021-11-25',
          count: 0,
          sort: 3,
          menu: 2
        },
        {
          name: 'javascript',
          label: '[展示数据]JavaScript',
          avatar: 'http://cdn.conghucai.site/myblog/category/javascript.jpg',
          intro: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程（Node.js）。',
          time: '2021-11-25',
          count: 3,
          sort: 1,
          menu: 3
        },
        {
          name: 'vue',
          label: '[展示数据]VUE',
          avatar: 'http://cdn.conghucai.site/myblog/category/vue.jpg',
          intro: 'Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。 Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。',
          time: '2021-11-25',
          count: 3,
          sort: 2,
          menu: 3
        }
      ],

      form: {
        name: '',
        label: '',
        avatar: '',
        intro: '',
        sort: 1,
        menu: 0
      },
      rules: {
        name: [
          { required: true, message: '请输入专栏英文简称', trigger: 'blur' }
        ],
        label: [
          { required: true, message: '请输入专栏中文名称', trigger: 'blur' }
        ],
        avatar: [
          { required: true, message: '请输入专栏头像URL', trigger: 'change' }
        ],
        intro: [
          { required: true, message: '请输入专栏简介', trigger: 'blur' },
          { max: 500, message: '长度在500字符以内', trigger: 'blur' }
        ],
        menu: [
          { required: true, message: '请选择所属分区', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请选择排序号', trigger: 'blur' }
        ]
      },
      dialogFormVisible: false,
      addNewKind: false,

      target: 'add'

    }
  },

  computed: {
    tableData() {
      return this.kindData.filter((item) => (item.menu === this.menuID))
    }
  },

  methods: {
    pageInit() {
      getMenuKindListApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.kindData = res.data.kindData
        this.menuData = res.data.menuData
        this.menuID = res.data.menuID
      })
    },

    editClick(kind) {
      this.form.name = kind.name
      this.form.label = kind.label
      this.form.avatar = kind.avatar
      this.form.intro = kind.intro
      this.form.sort = kind.sort
      this.form.menu = kind.menu
      this.target = 'update'
      this.dialogFormVisible = true
      this.addNewKind = false
    },

    addClick() {
      this.form.name = ''
      this.form.label = ''
      this.form.avatar = ''
      this.form.intro = ''
      this.form.sort = 1
      this.form.menu = this.menuID
      this.target = 'add'
      this.dialogFormVisible = true
      this.addNewKind = true
    },

    deleteClick(kind) {
      if (kind.count !== 0) {
        this.$notify({
          message: '专栏中还存在博文，无法删除哦~',
          duration: 2000,
          position: 'bottom-left'
        })
        return
      }

      var name = kind.name
      deleteKindApi(name).then(res => {
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
        this.pageInit()
      })
    },

    kindInfoSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
          // 验证完成，调用接口发表
          this.addKind(this.form)
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

    addKind(kindData) {
      addUpdateKindApi(kindData, this.target).then(res => {
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，操作失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          this.dialogFormVisible = false
          return
        }
        if (!res.success) {
          this.$notify({
            message: '操作失败/(ㄒoㄒ)/~~  原因：' + res.msg + '，请您稍后再试试吧~',
            duration: 2000,
            position: 'bottom-left'
          })
          return
        }

        this.$notify({
          message: '操作成功~  φ(゜▽゜*)♪',
          duration: 2000,
          position: 'bottom-left'
        })
        this.dialogFormVisible = false
        this.pageInit()
      })
    }
  },

  mounted() {
    this.pageInit()
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

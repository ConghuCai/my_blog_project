<template>
  <div>
    <el-card
      shadow="hover"
      class="tag-table"
    >
      <el-button
        type="primary"
        icon="el-icon-plus"
        class="add-btn"
        circle
        @click="addClick"
      ></el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          label="Link"
          align="center"
        >
          <template slot-scope="scope">
            <el-popover
              trigger="hover"
              placement="top"
            >
              <p>ID: {{ scope.row.id }}</p>
              <p>名称: {{ scope.row.name }}</p>
              <p>Url: {{ scope.row.url }}</p>
              <div
                slot="reference"
                class="name-wrapper"
              >
                {{scope.row.name}}
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-popover
              trigger="click"
              :ref="`popover-${scope.$index}`"
              placement="top"
              width="400"
              class="revise-name"
              @hide="linkName=''; linkUrl=''"
            >
              <p class="el-icon-warning">修改</p>
              <div style="text-align: right; margin: 0">
                <div style="margin: 5px">
                  <el-input
                    v-model="linkName"
                    :placeholder="scope.row.name"
                    size="mini"
                  ></el-input>
                  <el-input
                    v-model="linkUrl"
                    :placeholder="scope.row.url"
                    size="mini"
                    style="margin-top: 7px"
                  ></el-input>
                </div>
                <el-button
                  size="mini"
                  type="text"
                  @click="scope._self.$refs[`popover-${scope.$index}`].doClose()"
                >取消</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="reviseClick(scope.row.id, scope)"
                >确定</el-button>
              </div>
              <el-button
                slot="reference"
                size="mini"
                style="margin-right: 3%"
              >修改</el-button>
            </el-popover>
            <el-popconfirm
              confirm-button-text='删了吧'
              cancel-button-text='点错了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这个链接吗？操作不可恢复 ∑( 口 ||"
              @confirm="deleteClick(scope.row.id)"
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

    <el-dialog
      title="添加链接"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input
            class="link-input"
            type="text"
            placeholder="链接名称..."
            v-model="form.name"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            class="link-input"
            type="text"
            placeholder="链接Url..."
            v-model="form.url"
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
          @click="submit"
        >确 定</el-button>
      </div>
    </el-dialog>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.tag-table {
  margin-top: 2%;
  margin-inline: 8%;
}

.add-btn {
  float: right;
  margin-right: 10px;
}

.link-input {
  width: 90%;
}
</style>

<script>
import { addLinkApi, deleteLinkApi, getLinkApi, updateLinkApi } from '../../api/data'
export default {
  data() {
    return {
      title: '友链',
      dialogFormVisible: false,
      linkName: '',
      linkUrl: '',
      tableData: [
        {
          id: 1,
          name: '(展示数据)gitee主页',
          url: 'https://gitee.com/conghucai'
        },
        {
          id: 2,
          name: '(展示数据)github主页',
          url: 'https://github.com/ConghuCai'
        },
        {
          id: 3,
          name: '(展示数据)LeetCode',
          url: 'https://leetcode-cn.com/problemset/all/'
        },
        {
          id: 4,
          name: '(展示数据)CSDN博客',
          url: 'https://blog.csdn.net/qq_29586495'
        },
        {
          id: 5,
          name: '(展示数据)合肥工业大学',
          url: 'http://www.hfut.edu.cn/'
        }
      ],

      form: {
        name: '',
        url: ''
      }
    }
  },

  methods: {
    pageInit() {
      getLinkApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tableData = res.data
      })
    },

    deleteClick(id) {
      // console.log(row)
      deleteLinkApi(id).then(res => {
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

    reviseClick(id, scope) {
      // console.log(tag)
      // console.log(this.tagName)
      if (this.linkName === '' || this.linkUrl === '') {
        this.$notify({
          message: '输入点什么吧~',
          duration: 2000,
          position: 'bottom-left'
        })
        scope._self.$refs[`popover-${scope.$index}`].doClose()
        return
      }
      var link = { id: id, name: this.linkName, url: this.linkUrl }

      updateLinkApi(link).then(res => {
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，修改失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          scope._self.$refs[`popover-${scope.$index}`].doClose()
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
        scope._self.$refs[`popover-${scope.$index}`].doClose()
        this.pageInit()
      })
    },

    addClick() {
      this.dialogFormVisible = true
    },

    submit() {
      if (this.form.name === '' || this.form.url === '') {
        this.$notify({
          message: '请输入必要的信息~',
          duration: 2000,
          position: 'bottom-left'
        })
        return false
      }

      addLinkApi(this.form).then(res => {
        if (res.code === 403) {
          this.$notify({
            message: '您的权限仅供参观哦，操作失败~',
            duration: 2000,
            position: 'bottom-left'
          })
          this.form.name = ''
          this.form.url = ''
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
        this.form.name = ''
        this.form.url = ''
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

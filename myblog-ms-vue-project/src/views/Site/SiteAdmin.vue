<template>
  <div class="main">
    <el-input
      class="search-input"
      v-model="search"
      size="mini"
      placeholder="输入名称搜索"
    />
    <el-button
      type="primary"
      icon="el-icon-plus"
      class="add-btn"
      circle
      @click="addClick"
    ></el-button>
    <el-card shadow="hover">
      <el-table
        class="user-table"
        :data="tableData.filter(data => !search || (data.name.toLowerCase().includes(search.toLowerCase() ) )  )"
        style="width: 100%"
      >
        <el-table-column
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <span>
              <el-avatar :src="scope.row.avatar"></el-avatar>
            </span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="名称"
          show-overflow-tooltip
          prop="name"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="注册时间"
          show-overflow-tooltip
          prop="time"
          :sortable="true"
          :width="160"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="博文总数"
          prop="count"
          :sortable="true"
          :width="140"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              slot="reference"
              size="mini"
              style="margin-right: 3%"
              @click="reviseClick(scope.row)"
            >修改</el-button>
            <el-popconfirm
              confirm-button-text='删了吧'
              cancel-button-text='点错了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这个博主信息吗？ ∑( 口 ||"
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

    <el-dialog
      title="添加\修改博主"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item
          label="名称"
          :hidden="update"
        >
          <el-input
            class="link-input"
            type="text"
            placeholder="博主名称..."
            v-model="form.name"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            class="link-input"
            type="text"
            placeholder="博主Email..."
            v-model="form.email"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            class="pwd-input1"
            type="password"
            placeholder="设置登陆密码..."
            v-model="form.pwd"
          >
          </el-input>
          <el-input
            class="pwd-input2"
            type="password"
            placeholder="再输一遍..."
            v-model="form.pwd2"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="头像">
          <div class="info-img-block">
            <span class="url">
              <el-input
                v-model="form.avatar"
                placeholder="博主头像Url..."
              ></el-input>
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
.main {
  margin-inline: 8%;
}

.search-input {
  margin: 1%;
  width: 30%;
}

.user-info {
  margin-left: 8%;
}

.add-btn {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}

.link-input {
  width: 90%;
}

.pwd-input1 {
  width: 40%;
}
.pwd-input2 {
  width: 40%;
  margin-left: 10%;
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
</style>

<script>
import { addUpdateAdminApi, deleteAdminApi, getAdminApi } from '../../api/data'
export default {
  data() {
    return {
      title: '博主',
      dialogFormVisible: false,
      tableData: [
        {
          name: '[展示数据]拔都',
          count: 3,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'batu@email.mail'
        },
        {
          name: '[展示数据]拿破仑',
          count: 3,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'napoleon@email.mail'
        },
        {
          name: '[展示数据]成吉思汗',
          count: 5,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'chinginskhan@email.mail'
        },
        {
          name: '[展示数据]萨拉丁',
          count: 1,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'salah@email.mail'
        },
        {
          name: '[展示数据]耶律大石',
          count: 0,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'yelvdashi@email.mail'
        }
      ],
      search: '',
      target: '',

      form: {
        name: '',
        avatar: '',
        email: '',
        pwd: '',
        pwd2: ''
      },

      update: false
    }
  },
  methods: {
    pageInit() {
      getAdminApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tableData = res.data
      })
    },

    reviseClick(admin) {
      this.form.name = admin.name
      this.form.avatar = admin.avatar
      this.form.email = admin.email
      this.form.pwd = ''
      this.form.pwd2 = ''
      this.target = 'update'
      this.update = true
      this.dialogFormVisible = true
    },

    addClick() {
      this.form.name = ''
      this.form.avatar = ''
      this.form.email = ''
      this.form.pwd = ''
      this.form.pwd2 = ''
      this.target = 'add'
      this.update = false
      this.dialogFormVisible = true
    },

    submit() {
      if (this.form.name === '' || this.form.avatar === '' || this.form.email === '' || this.form.pwd === '' || this.form.pwd2 === '') {
        this.$notify({
          message: '请输入必要的信息~',
          duration: 2000,
          position: 'bottom-left'
        })
        return false
      }

      if (this.form.pwd !== this.form.pwd2) {
        this.$notify({
          message: '两次密码输入不一致哦~',
          duration: 2000,
          position: 'bottom-left'
        })
        return false
      }

      addUpdateAdminApi(this.form, this.target).then(res => {
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
    },

    deleteClick(admin) {
      if (admin.count !== 0) {
        this.$notify({
          message: '博主名下还存在博文，无法删除哦~',
          duration: 2000,
          position: 'bottom-left'
        })
        return
      }

      deleteAdminApi(admin.name).then(res => {
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

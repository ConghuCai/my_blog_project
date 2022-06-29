<template>
  <div class="main">
    <el-input
      class="search-input"
      v-model="search"
      size="mini"
      placeholder="输入账号或名称搜索"
    />
    <el-card shadow="hover">
      <el-table
        class="user-table"
        :data="tableData.filter(data => !search || (data.name.toLowerCase().includes(search.toLowerCase()) || data.login.toLowerCase().includes(search.toLowerCase())))"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form class="user-info">
              <el-form-item label="Bio:">
                <span>{{ props.row.bio }}</span>
              </el-form-item>
              <el-form-item label="Email:">
                <span>{{ props.row.email }}</span>
              </el-form-item>
              <el-form-item label="主页:">
                <el-link @click="openWindow(props.row.home)">{{ props.row.home }}</el-link>
              </el-form-item>
            </el-form>
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
          align="center"
          label="Gitee账号"
          show-overflow-tooltip
          prop="login"
          :width="150"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="Gitee名称"
          show-overflow-tooltip
          prop="name"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="注册时间"
          show-overflow-tooltip
          prop="date"
          :sortable="true"
          :width="130"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="互动量"
          prop="inter"
          :sortable="true"
          :width="100"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="Watched"
          prop="watched"
          :width="100"
          :sortable="true"
        ></el-table-column>
        <el-table-column
          align="center"
          label="Follower"
          prop="followers"
          :width="100"
          :sortable="true"
        ></el-table-column>
        <el-table-column
          align="center"
          label="Stared"
          prop="stared"
          :width="100"
          :sortable="true"
        ></el-table-column>
        <el-table-column
          label="操作"
          align="center"
          :width="80"
        >
          <template slot-scope="scope">
            <el-popconfirm
              confirm-button-text='删了吧'
              cancel-button-text='点错了'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这个用户信息吗？ ∑( 口 ||"
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
</style>

<script>
import { deleteUserApi, getUserApi } from '../../api/data'
export default {
  data() {
    return {
      title: '读者',
      tableData: [
        {
          login: 'batu',
          name: '[展示数据]拔都',
          inter: 10,
          watched: 0,
          followers: 0,
          stared: 0,
          date: '2021-10-01',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '这是读者的Bio信息',
          email: 'batu@email.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'napoleon',
          name: '[展示数据]拿破仑',
          inter: 13,
          watched: 1,
          followers: 0,
          stared: 2,
          date: '2021-10-02',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '这是读者的Bio信息',
          email: 'napoleon@email.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'chinginskhan',
          name: '[展示数据]成吉思汗',
          inter: 43,
          watched: 34,
          followers: 0,
          stared: 102,
          date: '2021-10-03',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '这是读者的Bio信息',
          email: 'chinginskhan@email.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'salah-ad-din',
          name: '[展示数据]萨拉丁',
          inter: 23,
          watched: 10,
          followers: 0,
          stared: 2,
          date: '2021-10-04',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '这是读者的Bio信息',
          email: 'salah@email.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'yelvdashi',
          name: '[展示数据]耶律大石',
          inter: 65,
          watched: 12,
          followers: 78,
          stared: 98,
          date: '2021-10-05',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '这是读者的Bio信息',
          email: 'yelvdashi@email.mail',
          home: 'https://gitee.com/conghucai'
        }
      ],
      search: ''
    }
  },
  methods: {
    openWindow(url) {
      const newWindow = window.open(url)
      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    },

    pageInit() {
      getUserApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tableData = res.data
      })
    },

    deleteClick(user) {
      deleteUserApi(user.login).then(res => {
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

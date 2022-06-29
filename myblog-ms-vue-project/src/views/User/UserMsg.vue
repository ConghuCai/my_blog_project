<template>
  <div class="main">
    <el-input
      class="search-input"
      v-model="search"
      size="mini"
      placeholder="输入读者账号、名称或文章ID、标题搜索"
    />
    <el-card shadow="hover">
      <el-table
        class="user-table"
        :data="tableData.filter(data => !search
        || (data.name.toLowerCase().includes(search.toLowerCase())
        || data.login.toLowerCase().includes(search.toLowerCase())
        || data.articleID.toLowerCase().includes(search.toLowerCase())
        || data.title.toLowerCase().includes(search.toLowerCase()) ))"
        style="width: 100%"
      >
        <el-table-column width="80">
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
          width="100"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="Gitee名称"
          show-overflow-tooltip
          prop="name"
          width="150"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="时间"
          show-overflow-tooltip
          prop="time"
          :sortable="true"
          width="160"
        >
        </el-table-column>
        <el-table-column
          align="center"
          label="留言"
          prop="msg"
          show-overflow-tooltip
        >
        </el-table-column>
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
              title="确定删除这条评论吗？ ∑( 口 ||"
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
import { deleteMsgApi, getMsgApi } from '../../api/data'
export default {
  data() {
    return {
      title: '留言区',
      tableData: [
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea17',
          login: 'batu',
          name: '[展示数据]拔都',
          time: '2021-11-30 11:45:12',
          msg: '[展示数据]全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea18',
          login: 'napoleon',
          name: '[展示数据]拿破仑',
          time: '2021-11-30 11:45:12',
          msg: '[展示数据]全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea19',
          login: 'chinginskhan',
          name: '[展示数据]成吉思汗',
          time: '2021-11-30 11:45:12',
          msg: '[展示数据]全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea20',
          login: 'salah-ad-din',
          name: '[展示数据]萨拉丁',
          time: '2021-11-30 11:45:12',
          msg: '[展示数据]全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea21',
          login: 'yelvdashi',
          name: '[展示数据]耶律大石',
          time: '2021-11-30 11:45:12',
          msg: '[展示数据]全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        }
      ],
      search: ''
    }
  },
  methods: {
    pageInit() {
      getMsgApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tableData = res.data
      })
    },

    deleteClick(msg) {
      deleteMsgApi(msg.id).then(res => {
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

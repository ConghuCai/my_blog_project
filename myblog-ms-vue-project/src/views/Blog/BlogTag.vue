<template>
  <div>
    <el-card
      shadow="hover"
      class="tag-table"
    >
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column label="Tag">
          <template slot-scope="scope">
            <el-popover
              trigger="hover"
              placement="top"
            >
              <p>名称: {{ scope.row.label }}</p>
              <p>博文数: {{ scope.row.count }}</p>
              <div
                slot="reference"
                class="name-wrapper"
              >
                <el-tag
                  size="medium"
                  :type="scope.row.color"
                >{{ scope.row.label }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button
              size="mini"
              @click="handleEdit(scope.row)"
            >编辑</el-button> -->
            <el-popover
              trigger="click"
              :ref="`popover-${scope.$index}`"
              placement="top"
              width="120"
              class="revise-name"
              @hide="tagName=''"
            >
              <p class="el-icon-warning">修改名称</p>
              <div style="text-align: right; margin: 0">
                <div style="margin: 5px">
                  <el-input
                    v-model="tagName"
                    :placeholder="scope.row.value"
                    size="mini"
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
                  @click="reviseClick(scope.row.value, scope)"
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
              title="确定删除这个标签吗？操作不可恢复 ∑( 口 ||"
              @confirm="deleteClick(scope.row.value)"
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
.tag-table {
  margin-top: 2%;
  margin-inline: 8%;
}
</style>

<script>
import { deleteTagApi, getTagListApi, updateTagApi } from '../../api/data'
export default {
  data() {
    return {
      title: 'Tag',
      tagName: '',
      tableData: [
        {
          label: '(展示数据)踩坑记录',
          value: '(展示数据)踩坑记录',
          color: '',
          count: 3
        },
        {
          label: '(展示数据)SpringBoot',
          value: '(展示数据)SpringBoot',
          color: 'success',
          count: 12
        },
        {
          label: '(展示数据)Dubbo',
          value: '(展示数据)Dubbo',
          color: 'warning',
          count: 12
        },
        {
          label: '(展示数据)Spring',
          value: '(展示数据)Spring',
          color: 'danger',
          count: 9
        },
        {
          label: '(展示数据)前端开发',
          value: '(展示数据)前端开发',
          color: 'info',
          count: 10
        },
        {
          label: '(展示数据)MyBatis',
          value: '(展示数据)前端开发',
          color: 'success',
          count: 1
        }
      ]
    }
  },

  methods: {
    pageInit() {
      getTagListApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tableData = res.data
      })
    },

    deleteClick(tag) {
      // console.log(row)
      deleteTagApi(tag).then(res => {
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

    reviseClick(tag, scope) {
      // console.log(tag)
      // console.log(this.tagName)
      if (this.tagName === '') {
        this.$notify({
          message: '输入点什么吧~',
          duration: 2000,
          position: 'bottom-left'
        })
        scope._self.$refs[`popover-${scope.$index}`].doClose()
        return
      }

      updateTagApi(tag, this.tagName).then(res => {
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

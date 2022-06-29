<template>
  <div id="commentList">
    <div
      class="comment-info "
      v-for="pageNum in (pageSize)"
      :key="pageNum"
    >
      <!-- <p v-if="(page - 1) * pageSize + pageNum <= totalItem">{{(page - 1) * pageSize + pageNum}}</p> -->
      <el-card
        v-if="(page - 1) * pageSize + pageNum <= totalItem"
        shadow="hover"
      >
        <div class="user">
          <el-avatar
            size="small"
            :src="commentInfo[(page - 1) * pageSize + pageNum - 1].avatar_url"
          ></el-avatar>
          <p>{{commentInfo[(page - 1) * pageSize + pageNum - 1].user}}</p>
          <p class="time">{{commentInfo[(page - 1) * pageSize + pageNum - 1].time}}</p>
        </div>
        <el-divider></el-divider>
        <div class="content">
          <i class="el-icon-chat-line-square"></i>
          <p>{{commentInfo[(page - 1) * pageSize + pageNum - 1].content}}</p>
        </div>
      </el-card>
    </div>
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
  </div>
</template>

<style lang="scss" scoped>
.comment-info {
  font-size: 18px;
  font-family: "PMingLiU";
  margin-top: 20px;
  .user {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: "PMingLiU";
    p {
      margin-left: 30px;
      font-style: italic;
    }
    .time {
      margin-left: 30px;
      font-style: italic;
      color: grey;
      font-size: 14px;
    }
  }
  .content {
    display: flex;
    text-indent: 2em;
    line-height: 26px;
    margin-inline: 50px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

<script>
import { getCommentApi } from '../../api/data'

export default {
  data() {
    return {
      commentInfo: [],

      page: 1,
      pageSize: 8,
      totalItem: 0

    }
  },

  methods: {
    // 获取评论
    getCommentInfo(id) {
      getCommentApi(id).then(res => {
        // console.log(res)
        this.commentInfo = res.data.comments
        this.totalItem = res.data.comments.length
        this.pageSize = res.data.pageSize
      })
    },

    // 翻页
    pageChanged(currentPage) {
      this.page = currentPage
      // console.log(this.page)
    }
  },

  mounted() {
    this.getCommentInfo(this.$route.params.id)
  },

  created() {
    console.log('载入评论...')
  }
}
</script>

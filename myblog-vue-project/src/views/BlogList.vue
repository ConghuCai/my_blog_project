<template>
  <div>
    <el-row
      style="margin-top:20px"
      v-for="item in articles"
      :key="item.id"
    >
      <el-card
        shadow="hover"
        class="article-card"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <el-link
          @click="articleClick(item.id)"
          target="_blank"
        >
          <h1>{{item.title}}</h1>
        </el-link>
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
  </div>
</template>

<style lang="scss" scoped>
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
</style>

<script>
import { getArticlListApi } from '../api/data'

export default {
  // 组件参数：
  props: {
    target: {
      type: String,
      default: () => {
        return 'all'
      }
    },
    name: {
      type: String
    }
  },

  data() {
    return {
      articles: [],
      page: 0,
      pageSize: 0,
      totalItem: 0
    }
  },

  methods: {
    getArticle(pageNum) {
      getArticlListApi(this.target, this.name, pageNum).then(res => {
        // console.log(res)
        this.articles = res.data.articles
        this.page = pageNum
        this.pageSize = res.data.pageSize
        this.totalItem = res.data.totalItem
      })
    },

    articleClick(id) {
      // alert(id)
      this.$store.commit('getPageName', '博文')
      this.$router.push({ name: 'article', params: { id }, query: { user: this.$route.query.user } })
    },

    pageChanged(currentPage) {
      this.page = currentPage
      this.getArticle(currentPage)
    }
  },

  mounted() {
    // console.log('传入参数' + this.target)
    if (this.target === 'all') {
      console.log('查询主页博文列表')
    } else if (this.target === 'category') {
      console.log('查询类别博文列表')
    } else if (this.target === 'tag') {
      console.log('查询标签博文列表')
    } else if (this.target === 'about') {
      console.log('查询相关博文列表')
    } else if (this.target === 'search') {
      console.log('查询检索博文列表')
    } else if (this.target === 'recommend') {
      console.log('查询推荐博文列表')
    }
    this.getArticle(1)
  }

}
</script>

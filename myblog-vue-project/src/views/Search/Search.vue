<template>
  <div style="margin-inline: 12%;">
    <blog-list
      :target="'search'"
      :name="keyword"
    ></blog-list>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import BlogList from '../BlogList.vue'
export default {
  components: { BlogList },

  data() {
    console.log('keyword: ' + this.$route.params.keyword)
    return {
      keyword: this.$route.params.keyword,
      title: '检索：' + this.$route.params.keyword
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

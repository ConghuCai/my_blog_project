<template>
  <div style="margin-inline: 12%;">
    <blog-list
      :target="'tag'"
      :name="tagName"
    ></blog-list>
    <my-icp></my-icp>
  </div>
</template>

<script>
import BlogList from '../BlogList.vue'

export default {
  components: { BlogList },
  data() {
    console.log('tag: ' + this.$route.params.tagName)
    return {
      tagName: this.$route.params.tagName,
      title: ('' + this.$route.params.tagName).toUpperCase()
    }
  },

  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>

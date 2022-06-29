<template>
  <div>xxx</div>
</template>
<script>
export default {
  // 这是一个空白模板  目的是为了借助这个模板作为第三方  完成相同组件、不同参数的组件重载
  data() {
    return {}
  },
  created() {
    const param = this.$route.query
    this.$router.push(param)
  }
}
</script>

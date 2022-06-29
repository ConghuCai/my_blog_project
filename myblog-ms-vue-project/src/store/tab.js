// 使用VueX状态管理 来操作多个组件之间的参数传递
export default {
  state: {
    // 原始状态的数据
    isCollapse: false,
    pageName: '首页'
    // user: {}
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    getPageName(state, name) {
      state.pageName = name
    }
    // setUser(state, u) {
    //   state.user = u
    // }
  }
}

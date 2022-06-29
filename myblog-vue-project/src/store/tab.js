// 使用VueX状态管理 来操作多个组件之间的参数传递
export default {
  state: {
    // 原始状态的数据
    isCollapse: false,
    pageName: '首页',

    hasLogined: false,
    userName: '222',
    giteeUrl: '222',
    avatarUrl: '1231231',
    userShowName: '',

    showAbout: true
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    getPageName(state, name) {
      state.pageName = name
    },
    login(state, loginInfo) {
      if (loginInfo.login) {
        state.hasLogined = true
        state.userName = loginInfo.name
        state.giteeUrl = loginInfo.gitee
        state.avatarUrl = loginInfo.avatar
        state.userShowName = loginInfo.showName
      }
    }
  }
}

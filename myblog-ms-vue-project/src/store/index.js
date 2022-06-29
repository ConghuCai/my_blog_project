import Vue from 'vue'
import Vuex from 'vuex'

// 引入自己编写的tab状态管理js
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})

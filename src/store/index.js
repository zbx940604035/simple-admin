// 导入 Vue
import Vue from 'vue'
// 导入 Vuex 插件
import Vuex from 'vuex'

import user from './module/user'

// 把 Vuex 注册到Vue 上
Vue.use(Vuex)

export default new Vuex.Store({
  // 用来挂载模块
  modules: {
    user
  }
})
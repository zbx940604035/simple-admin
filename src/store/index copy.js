// 导入 Vue
import Vue from 'vue'
// 导入 Vuex 插件
import Vuex from 'vuex'

// 把 Vuex 注册到Vue 上
Vue.use(Vuex)

export default new Vuex.Store({
  // 在开发环境开启严格模式 这样修改数据 就必须通过 mutation 来处理
  strict: process.env.NODE_ENV !== 'production',
  // 状态
  state: {
    name:'张三',
    age: 15
  },
  // 用来处理状态
  mutations: {
      updateName(state,name){
          state.name = name
      },
      updateAge(state, age){
          state.age = age
      }
  },
  // 用于异步处理
  actions: {
      updateNameAsync(store, name){
          setTimeout(()=> {
            store.commit('updateName', name)
          },1000)
      }
  },
  // 对state中的数据进行包装   
  getters: {
    decorationName(state){
        return `大家好，我叫${state.name}今年${state.age}岁`
    }
  },
  // 用来挂载模块
  modules: {
  }
})
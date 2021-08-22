import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router'
import '@/assets/scss'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

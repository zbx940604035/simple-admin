import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@w/comm/login'),
      hidden: true
    },
    {
      path: '/home',
      component: () => import('@w/comm/home'),
      hidden: true
    }
  ]
})

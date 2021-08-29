import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import ('@w/comm/login'),
      hidden: true
    },
    {
      path: '/',
      component: () => import ('@w/comm/home'),
      hidden: true,
      children: [
        {
          path: 'user-container',
          component: () => import(`@w/user`)
        },
        {
          path: 'components',
          component: () => import(`@w/components`)
        },
      ],
      beforeEnter (to, from, next) {
        let token = sessionStorage.getItem('token')
        if (!token) {
          sessionStorage.clear()
          next({ name: 'login' })
        }
        next()
      }
    }
  ]
})

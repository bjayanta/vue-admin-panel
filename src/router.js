import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import POSLogin from './views/pos/Login.vue'
import POS from './views/pos/Dashboard.vue'
import Test from './views/pos/Test.vue'
import AdminLogin from './views/admin/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pos-login',
      name: 'pos-login',
      component: POSLogin
    },
    {
      path: '/pos',
      name: 'pos',
      component: POS,
      children: [
        {
          path: 'test',
          component: Test
        }
      ]
    },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: AdminLogin
    },
    
  ]
})

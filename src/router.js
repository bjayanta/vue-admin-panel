import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import POSRoutes from './views/pos/router' // POS router
import AdminRouter from './views/admin/router' // Admin Router

Vue.use(Router)

const baseRoutes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
];

const routes = baseRoutes.concat(POSRoutes, AdminRouter);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

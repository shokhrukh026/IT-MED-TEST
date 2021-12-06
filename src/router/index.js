import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Empty.vue'),
    children: [{ path: 'home', name: 'Home', component: () => import('../views/Home.vue')}]
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {path: '/form', name: 'Home', component: () => import('../views/Form.vue')},
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

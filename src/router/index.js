import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Empty.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('../views/Home.vue')}
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {path: '/form', name: 'Form', component: () => import('../views/Form.vue')},
      {path: '/form2', name: 'Form2', component: () => import('../views/Form2.vue')},
    
    ] 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

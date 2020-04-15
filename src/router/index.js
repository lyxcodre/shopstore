import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/fenlei'
  },
  {
    path: '/serch',
    component: () => import('../views/serch/serch.vue')
  }, {
    path: '/vip',
    component: () => import('../views/vip/vip.vue')
  }, {
    path: '/prefile',
    component: () => import('../views/prefile/prefile.vue')
  }, {
    path: '/kefu',
    component: () => import('../views/kefu/kefu.vue')
  }, {
    path: '/fenlei',
    component: () => import('../views/fenlei/Fenlei.vue')
  }, {
    path: '/detail/:iid',
    component: () => import('../views/detail/Detail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

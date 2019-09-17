import Vue from 'vue'
import Router from 'vue-router'
import KdpTop from '@/components/pages/KdpTop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'KdpTop',
      component: KdpTop
    }
  ]
})

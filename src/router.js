import Vue from 'vue'
import Router from 'vue-router'
import KdpCalendar from '@/components/pages/KdpCalendar'
import KdpCalendarAdmin from '@/components/pages/KdpCalendarAdmin'
import KdpReport from '@/components/pages/KdpReport'
import KdpDailyReport from '@/components/pages/KdpDailyReport'
import KdpGroupAdmin from '@/components/pages/KdpGroupAdmin'
import KdpUserAdmin from '@/components/pages/KdpUserAdmin'
import KdpProjectAdmin from '@/components/pages/KdpProjectAdmin'
import KdpLogout from '@/components/pages/KdpLogout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'KdpCalendar',
      component: KdpCalendar
    },
    {
      path: '/calendar-admin',
      name: 'KdpCalendarAdmin',
      component: KdpCalendarAdmin
    },
    {
      path: '/report',
      name: 'KdpReport',
      component: KdpReport
    },
    {
      path: '/daily-report',
      name: 'KdpDailyReport',
      component: KdpDailyReport
    },
    {
      path: '/group-admin',
      name: 'KdpGroupAdmin',
      component: KdpGroupAdmin
    },
    {
      path: '/user-admin',
      name: 'KdpUserAdmin',
      component: KdpUserAdmin
    },
    {
      path: '/project-admin',
      name: 'KdpProjectAdmin',
      component: KdpProjectAdmin
    },
    {
      path: '/logout',
      name: 'KdpLogout',
      component: KdpLogout
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import KdpCalendarInput from '@/components/pages/KdpCalendarInput'
import KdpCalendarShow from '@/components/pages/KdpCalendarShow'
import KdpAggregateReport from '@/components/pages/KdpAggregateReport'
import KdpDailyReport from '@/components/pages/KdpDailyReport'
import KdpDepartment from '@/components/pages/KdpDepartment'
import KdpAccount from '@/components/pages/KdpAccount'
import KdpProject from '@/components/pages/KdpProject'
import KdpSetting from '@/components/pages/KdpSetting'
import KdpLogout from '@/components/pages/KdpLogout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'KdpCalendarInput',
      component: KdpCalendarInput
    },
    {
      path: '/calendar-show',
      name: 'KdpCalendarShow',
      component: KdpCalendarShow
    },
    {
      path: '/aggregete-report',
      name: 'KdpAggregateReport',
      component: KdpAggregateReport
    },
    {
      path: '/daily-report',
      name: 'KdpDailyReport',
      component: KdpDailyReport
    },
    {
      path: '/department',
      name: 'KdpDepartment',
      component: KdpDepartment
    },
    {
      path: '/account',
      name: 'KdpAccount',
      component: KdpAccount
    },
    {
      path: '/project',
      name: 'KdpProject',
      component: KdpProject
    },
    {
      path: '/setting',
      name: 'KdpSetting',
      component: KdpSetting
    },
    {
      path: '/logout',
      name: 'KdpLogout',
      component: KdpLogout
    }
  ]
})

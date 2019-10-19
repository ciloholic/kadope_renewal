import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')
moment.locale('ja')

export default {
  links: [
    { to: 'KdpTop', icon: 'calendar-alt', title: '稼働入力' },
    { to: 'KdpTop', icon: 'search', title: '稼働閲覧' },
    { to: 'KdpTop', icon: 'chart-bar', title: 'レポート' },
    { to: 'KdpTop', icon: 'envelope', title: '日報' },
    { to: 'KdpTop', icon: 'users', title: 'グループ' },
    { to: 'KdpTop', icon: 'users-cog', title: 'ユーザ管理' },
    { to: 'KdpTop', icon: 'user-plus', title: 'アサイン' },
    { to: 'KdpTop', icon: 'tools', title: '個人設定' }
  ],
  recentTasks: [
    { projectId: 111, projectName: 'project-name-1', taskName: 'task-name-1' },
    { projectId: 222, projectName: 'project-name-2', taskName: 'task-name-2' },
    { projectId: 333, projectName: 'project-name-3', taskName: 'task-name-3' },
    { projectId: 444, projectName: 'project-name-4', taskName: 'task-name-4' },
    { projectId: 555, projectName: 'project-name-5', taskName: 'task-name-5' },
    { projectId: 666, projectName: 'project-name-6', taskName: 'task-name-6' },
    { projectId: 777, projectName: 'project-name-7', taskName: 'task-name-7' }
  ],
  projects: [
    {
      id: 111,
      projectName: 'project-name-1',
      pin: true,
      tasks: [
        { id: 1, taskName: 'task-name-1', pin: true },
        { id: 2, taskName: 'task-name-2', pin: false },
        { id: 3, taskName: 'task-name-3', pin: false }
      ]
    },
    {
      id: 222,
      projectName: 'projectname2projectname2projectname2projectname2',
      pin: false,
      tasks: [
        { id: 4, taskName: 'task-name-1', pin: true },
        { id: 5, taskName: 'taskname2taskname2taskname2taskname2taskname2', pin: true },
        { id: 6, taskName: 'task-name-3', pin: false }
      ]
    }
  ],
  calendarInfo: {
    toDay: moment(),
    currentDay: moment(),
    displayDays: 7
  }
}

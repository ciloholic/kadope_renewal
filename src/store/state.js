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
    { to: 'KdpTop', icon: 'users-cog', title: 'ユーザ' },
    { to: 'KdpTop', icon: 'folder-open', title: 'プロジェクト' },
    { to: 'KdpTop', icon: 'sign-out-alt', title: 'ログアウト' }
  ],
  recentTasks: [
    { projectId: 1, projectName: 'project-name-1', hsla: 'hsla(111, 100%, 80%, 0.5)', taskName: 'task-name-1' },
    { projectId: 2, projectName: 'project-name-2', hsla: 'hsla(222, 100%, 80%, 0.5)', taskName: 'task-name-2' },
    { projectId: 3, projectName: 'project-name-3', hsla: 'hsla(333, 100%, 80%, 0.5)', taskName: 'task-name-3' },
    { projectId: 4, projectName: 'project-name-4', hsla: 'hsla(444, 100%, 80%, 0.5)', taskName: 'task-name-4' },
    { projectId: 5, projectName: 'project-name-5', hsla: 'hsla(555, 100%, 80%, 0.5)', taskName: 'task-name-5' },
    { projectId: 6, projectName: 'project-name-6', hsla: 'hsla(666, 100%, 80%, 0.5)', taskName: 'task-name-6' },
    { projectId: 7, projectName: 'project-name-7', hsla: 'hsla(777, 100%, 80%, 0.5)', taskName: 'task-name-7' }
  ],
  projects: [
    {
      id: 1,
      projectName: 'project-name-1',
      hsla: 'hsla(111, 100%, 80%, 0.5)',
      pin: true,
      tasks: [
        { id: 1, taskName: 'task-name-1', pin: true },
        { id: 2, taskName: 'task-name-2', pin: false },
        { id: 3, taskName: 'task-name-3', pin: false }
      ]
    },
    {
      id: 2,
      projectName: 'projectname2projectname2projectname2projectname2',
      hsla: 'hsla(222, 100%, 80%, 0.5)',
      pin: false,
      tasks: [
        { id: 4, taskName: 'task-name-1', pin: true },
        { id: 5, taskName: 'taskname2taskname2taskname2taskname2taskname2', pin: true },
        { id: 6, taskName: 'task-name-3', pin: false }
      ]
    }
  ],
  events: [
    {
      id: 1,
      projectId: 1,
      projectName: 'project-name-1',
      hsla: 'hsla(111, 100%, 80%, 0.5)',
      taskId: 1,
      taskName: 'task-name-1',
      start: moment('2019-10-29 03:00:00'),
      time: 60
    }
  ],
  calendarInfo: {
    today: moment(),
    currentDay: moment(),
    displayDays: 7
  }
}

import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')
moment.locale('ja')

export default {
  links: [
    { to: 'KdpCalendar', icon: 'calendar-alt', title: '稼働入力' },
    { to: 'KdpCalendarAdmin', icon: 'search', title: '稼働閲覧' },
    { to: 'KdpReport', icon: 'chart-bar', title: 'レポート' },
    { to: 'KdpDailyReport', icon: 'envelope', title: '日報' },
    { to: 'KdpGroupAdmin', icon: 'users', title: 'グループ' },
    { to: 'KdpUserAdmin', icon: 'users-cog', title: 'ユーザ' },
    { to: 'KdpProjectAdmin', icon: 'folder-open', title: 'プロジェクト' },
    { to: 'KdpLogout', icon: 'sign-out-alt', title: 'ログアウト' }
  ],
  pinTasks: [
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
    },
    {
      id: 3,
      projectName: 'マイプロジェクト',
      hsla: 'hsla(333, 100%, 80%, 0.5)',
      pin: true,
      tasks: [
        { id: 7, taskName: 'task-name-7', pin: true },
        { id: 8, taskName: 'task-name-8', pin: false },
        { id: 9, taskName: 'task-name-9', pin: false }
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
      start: moment()
        .startOf('week')
        .add(1, 'days')
        .add(3, 'hours'),
      time: 60
    }
  ],
  groups: [
    {
      id: 1,
      groupName: 'group-1',
      users: [
        {
          id: 1,
          userName: 'user-name-1'
        },
        {
          id: 2,
          userName: 'user-name-2'
        }
      ]
    },
    {
      id: 2,
      groupName: 'group-2',
      users: [
        {
          id: 3,
          userName: 'user-name-3'
        }
      ]
    }
  ],
  users: [
    {
      id: 1,
      userName: 'user-name-1'
    },
    {
      id: 2,
      userName: 'user-name-2'
    },
    {
      id: 3,
      userName: 'user-name-3'
    }
  ],
  reports: [
    {
      id: 1,
      projectName: 'project-name-1',
      total: 60,
      tasks: [{ id: 1, taskName: 'task-name-1', time: 60 }]
    },
    {
      id: 2,
      projectName: 'projectname2projectname2projectname2projectname2',
      total: 90,
      tasks: [
        { id: 2, taskName: 'task-name-2', time: 15 },
        { id: 3, taskName: 'taskname3taskname3taskname3taskname3taskname3', time: 30 },
        { id: 4, taskName: 'task-name-4', time: 45 }
      ]
    },
    {
      id: 3,
      projectName: 'マイプロジェクト',
      total: 135,
      tasks: [
        { id: 5, taskName: 'task-name-5', time: 30 },
        { id: 6, taskName: 'task-name-6', time: 45 },
        { id: 7, taskName: 'task-name-7', time: 45 },
        { id: 8, taskName: 'task-name-8', time: 15 }
      ]
    }
  ],
  saveReports: [
    {
      id: 1,
      reportName: 'report-name-1'
    },
    {
      id: 2,
      reportName: 'report-name-2'
    },
    {
      id: 3,
      reportName: 'report-name-3'
    }
  ],
  dailyReports: [
    {
      id: 1,
      datetime: '2019-01-01',
      title: 'daily-report-name-1',
      body: 'daily-report-name-1daily-report-name-1daily-report-name-1daily-report-name-1',
      completed: true,
      total: 480
    },
    {
      id: 2,
      datetime: '2019-01-02',
      title: 'daily-report-name-2',
      body: 'daily-report-name-2daily-report-name-2daily-report-name-2daily-report-name-2daily-report-name-2',
      completed: false,
      total: 510
    },
    {
      id: 3,
      datetime: '2019-01-03',
      title: 'daily-report-name-3',
      body: 'daily-report-name-3daily-report-name-3daily-report-name-3',
      completed: false,
      total: 540
    }
  ],
  reportInfo: {
    start: null,
    end: null,
    group: -1,
    aggregateUnit: 1,
    projectChecked: [],
    userChecked: []
  },
  calendarInfo: {
    today: moment(),
    currentDay: moment(),
    displayDays: 7
  }
}

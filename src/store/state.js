import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')
moment.locale('ja')

export default {
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
      name: 'project-name-1',
      hsla: 'hsla(111, 100%, 80%, 0.5)',
      pin: true,
      display: 1,
      tasks: [
        { id: 1, name: 'task-name-1', pin: true },
        { id: 2, name: 'task-name-2', pin: false },
        { id: 3, name: 'task-name-3', pin: false }
      ]
    },
    {
      id: 2,
      name: 'projectname2projectname2projectname2projectname2',
      hsla: 'hsla(222, 100%, 80%, 0.5)',
      pin: false,
      display: 2,
      tasks: [
        { id: 4, name: 'task-name-1', pin: true },
        { id: 5, name: 'taskname2taskname2taskname2taskname2taskname2', pin: true },
        { id: 6, name: 'task-name-3', pin: false }
      ]
    },
    {
      id: 3,
      name: 'マイプロジェクト',
      hsla: 'hsla(333, 100%, 80%, 0.5)',
      pin: true,
      display: 1,
      tasks: [
        { id: 7, name: 'task-name-7', pin: true },
        { id: 8, name: 'task-name-8', pin: false },
        { id: 9, name: 'task-name-9', pin: false }
      ]
    }
  ],
  jobs: [
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
  departments: [
    {
      id: 1,
      name: 'group-1',
      accounts: [
        {
          id: 1,
          name: 'account-name-1'
        },
        {
          id: 2,
          name: 'account-name-2'
        }
      ]
    },
    {
      id: 2,
      name: 'group-2',
      accounts: [
        {
          id: 3,
          name: 'account-name-3'
        }
      ]
    }
  ],
  accounts: [
    {
      id: 1,
      name: 'account-name-1',
      email: 'xxxx@yyyy.zzz',
      authority: 1
    },
    {
      id: 2,
      name: 'account-name-2',
      email: 'xxxx@yyyy.zzz',
      authority: 2
    },
    {
      id: 3,
      name: 'account-name-3',
      email: 'xxxx@yyyy.zzz',
      authority: 3
    }
  ],
  reports: [
    {
      id: 1,
      name: 'project-name-1',
      total: 60,
      tasks: [{ id: 1, name: 'task-name-1', time: 60 }]
    },
    {
      id: 2,
      name: 'projectname2projectname2projectname2projectname2',
      total: 90,
      tasks: [
        { id: 2, name: 'task-name-2', time: 15 },
        { id: 3, name: 'taskname3taskname3taskname3taskname3taskname3', time: 30 },
        { id: 4, name: 'task-name-4', time: 45 }
      ]
    },
    {
      id: 3,
      name: 'マイプロジェクト',
      total: 135,
      tasks: [
        { id: 5, name: 'task-name-5', time: 30 },
        { id: 6, name: 'task-name-6', time: 45 },
        { id: 7, name: 'task-name-7', time: 45 },
        { id: 8, name: 'task-name-8', time: 15 }
      ]
    }
  ],
  saveReports: [
    {
      id: 1,
      name: 'report-name-1'
    },
    {
      id: 2,
      name: 'report-name-2'
    },
    {
      id: 3,
      name: 'report-name-3'
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
  dailyReportInfo: {
    id: 1,
    datetime: '2019-01-01',
    title: 'daily-report-name-1',
    body: 'daily-report-name-1daily-report-name-1daily-report-name-1daily-report-name-1',
    completed: true,
    total: 480
  },
  reportInfo: {
    start: null,
    end: null,
    group: -1,
    aggregateUnit: 1,
    projectChecked: [],
    accountChecked: []
  },
  calendarInfo: {
    today: moment(),
    currentDay: moment(),
    displayDays: 7
  }
}

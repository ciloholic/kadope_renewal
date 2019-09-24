import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')

export default {
  links: [
    { to: 'KdpTop', icon: 'calendar-alt', title: '稼働入力' },
    { to: 'KdpTop', icon: 'chart-bar', title: 'レポート' },
    { to: 'KdpTop', icon: 'envelope', title: '日報送信' },
    { to: 'KdpTop', icon: 'tools', title: '設定' }
  ],
  projects: [
    {
      id: 1,
      projectName: 'project-name-1',
      tasks: [{ id: 1, taskName: 'task-name-1' }, { id: 2, taskName: 'task-name-2' }]
    },
    {
      id: 2,
      projectName: 'project-name-2',
      tasks: [
        { id: 3, taskName: 'task-name-1' },
        { id: 4, taskName: 'task-name-2' },
        { id: 5, taskName: 'task-name-3' }
      ]
    }
  ],
  calendar: {
    currentDay: moment()
  },
  calendarConfig: {
    displayType: 'week'
  }
}

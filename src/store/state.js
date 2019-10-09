import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Tokyo')

export default {
  links: [
    { to: 'KdpTop', icon: 'calendar-alt', title: '稼働入力' },
    { to: 'KdpTop', icon: 'chart-bar', title: 'レポート' },
    { to: 'KdpTop', icon: 'envelope', title: '日報送信' },
    { to: 'KdpTop', icon: 'tools', title: '設定' }
  ],
  recentTasks: [
    { project_id: 111, projectName: 'project-name-1', taskName: 'task-name-1' },
    { project_id: 222, projectName: 'project-name-2', taskName: 'task-name-2' },
    { project_id: 333, projectName: 'project-name-3', taskName: 'task-name-3' },
    { project_id: 444, projectName: 'project-name-4', taskName: 'task-name-4' },
    { project_id: 555, projectName: 'project-name-5', taskName: 'task-name-5' },
    { project_id: 666, projectName: 'project-name-6', taskName: 'task-name-6' },
    { project_id: 777, projectName: 'project-name-7', taskName: 'task-name-7' }
  ],
  projects: [
    {
      id: 111,
      projectName: 'project-name-1',
      tasks: [
        { id: 1, taskName: 'task-name-1' },
        { id: 2, taskName: 'task-name-2' },
        { id: 3, taskName: 'task-name-3' }
      ]
    },
    {
      id: 222,
      projectName: 'projectname2projectname2projectname2projectname2',
      tasks: [
        { id: 4, taskName: 'task-name-1' },
        { id: 5, taskName: 'taskname2taskname2taskname2taskname2taskname2' },
        { id: 6, taskName: 'task-name-3' }
      ]
    }
  ],
  calendar: {
    currentDay: moment()
  },
  calendarConfig: {
    displayDays: 7
  }
}

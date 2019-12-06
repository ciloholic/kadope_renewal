export default {
  links: state => {
    return state.links
  },
  pinTasks: state => {
    return state.pinTasks
  },
  projects: state => {
    return state.projects
  },
  jobs: state => {
    return state.events
  },
  groups: state => {
    return state.groups
  },
  accounts: state => {
    return state.accounts
  },
  reports: state => {
    return state.reports
  },
  saveReports: state => {
    return state.saveReports
  },
  dailyReports: state => {
    return state.dailyReports
  },
  dailyReportInfo: state => {
    return state.dailyReportInfo
  },
  reportInfo: state => {
    return state.reportInfo
  },
  calendarInfo: state => {
    return state.calendarInfo
  }
}

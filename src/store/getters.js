export default {
  getLinkAll: state => {
    return state.links
  },
  getPinTaskAll: state => {
    return state.pinTasks
  },
  getProjectAll: state => {
    return state.projects.map(x => {
      return { id: x.id, name: x.projectName }
    })
  },
  getEventAll: state => {
    return state.events
  },
  getGroupAll: state => {
    return state.groups.map(x => {
      return { id: x.id, name: x.groupName }
    })
  },
  getGroupListAll: state => {
    return state.groups
  },
  getUserAll: state => {
    return state.users.map(x => {
      return { id: x.id, name: x.userName }
    })
  },
  getReportFilterInfo: state => {
    return state.reportFilterInfo
  },
  getCalendarInfo: state => {
    return state.calendarInfo
  }
}

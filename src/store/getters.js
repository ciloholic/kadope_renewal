export default {
  getLinkAll: state => {
    return state.links
  },
  getRecentTaskAll: state => {
    return state.recentTasks
  },
  getProjectAll: state => {
    return state.projects
  },
  getEventAll: state => {
    return state.events
  },
  getCalendarInfo: state => {
    return state.calendarInfo
  }
}

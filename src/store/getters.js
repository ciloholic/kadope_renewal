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
  getCurrentDay: state => {
    return state.calendar.currentDay
  },
  getCalendarConfig: state => {
    return state.calendarConfig
  }
}

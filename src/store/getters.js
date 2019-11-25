export default {
  getLinkAll: state => {
    return state.links
  },
  getPinTaskAll: state => {
    return state.pinTasks
  },
  getProjectAll: state => {
    return state.projects
  },
  getEventAll: state => {
    return state.events
  },
  getGroupAll: state => {
    return state.groups
  },
  getUserAll: state => {
    return state.users
  },
  getCalendarInfo: state => {
    return state.calendarInfo
  }
}

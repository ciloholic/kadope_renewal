export default {
  getLinkAll: state => {
    return state.links
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
  // getTaskById: state => id => {
  //   const tasks = []
  //   state.board.lists.forEach(list => {
  //     tasks.push(...list.items)
  //   })
  //   return tasks.find(task => task.id === id)
  // }
}

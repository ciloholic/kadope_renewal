import * as types from './mutation-types'

export default {
  [types.PROJECT_PIN_TOGGLE_BY_ID](state, id) {
    state.projects.forEach(project => {
      if (project.id == id) {
        project.pin = !project.pin
      }
    })
  },
  [types.TASK_PIN_TOGGLE_BY_ID](state, payload) {
    state.projects.forEach(project => {
      if (project.id === payload['projectId']) {
        project.tasks.forEach(task => {
          if (task.id === payload['taskId']) {
            task.pin = !task.pin
          }
        })
      }
    })
  },
  [types.TASK_TOGGLE_BY_ID](state, id) {
    state.projects.forEach(project => {
      if (project.id === id) {
        project.tasks.forEach(task => (task.isShown = !task.isShown))
      }
    })
  },
  [types.USER_UPDATE](state, payload) {
    const userId = payload['userId']
    delete payload['userId']
    state.users.forEach(user => {
      if (user.id === userId) {
        user = Object.assign(user, payload)
      }
    })
  },
  [types.REPORT_FILTER_INFO_UPDATE](state, payload) {
    state.reportInfo = Object.assign(state.reportInfo, payload)
  },
  [types.CALENDAR_INFO_UPDATE](state, payload) {
    state.calendarInfo = Object.assign(state.calendarInfo, payload)
  }
}

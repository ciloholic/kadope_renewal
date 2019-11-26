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
      if (project.id == payload['projectId']) {
        project.tasks.forEach(task => {
          if (task.id == payload['taskId']) {
            task.pin = !task.pin
          }
        })
      }
    })
  },
  [types.TASK_TOGGLE_BY_ID](state, id) {
    state.projects.forEach(project => {
      if (project.id == id) {
        project.tasks.forEach(task => (task.isShown = !task.isShown))
      }
    })
  },
  [types.REPORT_FILTER_INFO_UPDATE](state, payload) {
    state.reportFilterInfo = Object.assign(state.reportFilterInfo, payload)
  },
  [types.CALENDAR_INFO_UPDATE](state, payload) {
    state.calendarInfo = Object.assign(state.calendarInfo, payload)
  }
}

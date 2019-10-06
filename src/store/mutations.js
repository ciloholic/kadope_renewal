import * as types from './mutation-types'

export default {
  [types.DROPDOWN_TOGGLE_BY_ID](state, payload) {
    state.projects.forEach(project => {
      if (project.id == payload) {
        project.tasks.forEach(task => (task.isShown = !task.isShown))
      }
    })
  },
  [types.DROPDOWN_HIDDEN_ALL](state) {
    state.projects.forEach(project => project.tasks.forEach(task => (task.isShown = false)))
  }
}

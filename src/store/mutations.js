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
  // [types.ADD_TASK] (state, payload) {
  //   const task = payload
  //   for (let i = 0; i < state.board.lists.length; i++) {
  //     const list = state.board.lists[i]
  //     if (list.id === task.listId) {
  //       list.items.push(task)
  //       break
  //     }
  //   }
  // },
  // [types.UPDATE_TASK] (state, payload) {
  //   const task = payload
  //   for (let i = 0; i < state.board.lists.length; i++) {
  //     const list = state.board.lists[i]
  //     if (list.id !== task.listId) { continue }
  //     for (let j = 0; j < list.items.length; j++) {
  //       const item = list.items[j]
  //       if (item.id === task.id) {
  //         item.name = task.name
  //         item.description = task.description
  //         break
  //       }
  //     }
  //   }
  // },
  // [types.REMOVE_TASK] (state, payload) {
  //   const { id, listId } = payload
  //   for (let i = 0; i < state.board.lists.length; i++) {
  //     const list = state.board.lists[i]
  //     if (list.id !== listId) { continue }
  //     list.items = list.items.filter(item => item.id !== id)
  //   }
  // },
  // [types.AUTH_LOGOUT] (state, payload) {
  //   state.auth = payload
  // }
}

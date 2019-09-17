import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoitems: []
  },
  mutations: {
    addTask(state, payload) {
      payload.id = state.todoitems.length
      payload.createdAt = new Date()
      state.todoitems.push(payload)
    }
  },
  actions: {

  }
})

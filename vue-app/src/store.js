import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const MUTATIONS = {
  ADD_PEOPLE: 'addPeople'
}

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0
  },
  mutations: {
    [MUTATIONS.ADD_PEOPLE](state, payload) {
      state.count += payload
    }
  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const MUTATIONS = {
  ADD_PEOPLE: 'addPeople'
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [MUTATIONS.ADD_PEOPLE](state) {
      state.count++
    }
  },
  actions: {

  }
})

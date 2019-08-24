//stroe.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectId: ''
  },
  mutations: {
    selectRoom(state, id) {
      state.selectId = id
    }
  },
  actions: {}
})

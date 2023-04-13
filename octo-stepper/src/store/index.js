import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    page: {
      status: true,
      title: ''
    },
    searching: false
  },
  getters: {
  },
  mutations: {
    searchState(state, payload){
      state.searching = payload
    },
    pageUpdate(state, payloadObject){
      state.page = payloadObject
    }
  },
  actions: {
  },
  modules: {
  }
})

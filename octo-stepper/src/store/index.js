import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    page: {
      status: true,
      title: ''
    },
    searching: false,
    cart: {items: [], total: 0},
    preview: null
  },
  getters: {
  },
  mutations: {
    searchState(state, payload){
      state.searching = payload
    },
    pageUpdate(state, payloadObject){
      state.page = payloadObject
    },
    priceSum(state, payload){
      state.cart.total = payload
    },
    cartUpdate(state, payload){
      state.cart.items.push(payload)
    },
    previewUpdate(state, payload){
      state.preview = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

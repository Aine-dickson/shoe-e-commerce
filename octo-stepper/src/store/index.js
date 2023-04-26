import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    page: {
      status: true,
      title: ''
    },
    searching: false,
    cart: {items: [
        {name: 'Nike Jordan Air', price: 345.99, color:'red', size:'34', qty:2},
        {name: 'Puman', price: 137.99, color:'orange', size:'34', qty:1},
        {name: 'Yeza Sport', price: 99.99, color:'green', size:'34', qty:4}
      ],
      total: 0
    }
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
    }
  },
  actions: {
  },
  modules: {
  }
})

import { createStore } from "vuex";

const store = createStore({
  state: {
    loginCardVisible: true,
  },

  getters: {
    getLoginCardState(state) {
      return state.loginCardVisible;
    },
  },

  mutations: {
    loginCardStateChange(state) {
      state.loginCardVisible = !state.loginCardVisible;
    },
  },
});

export default store;

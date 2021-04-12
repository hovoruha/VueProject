import { createStore } from "vuex";

const store = createStore({
  state: {
    loginCardVisible: true,
    navbarDisplaysSubscribe: false,
  },

  getters: {
    getLoginCardState(state) {
      return state.loginCardVisible;
    },

    getNavbarDisplayState(state) {
      return state.navbarDisplaysSubscribe;
    },
  },

  mutations: {
    loginCardStateChange(state) {
      state.loginCardVisible = !state.loginCardVisible;
    },

    activateSubscribe(state) {
      state.navbarDisplaysSubscribe = !state.navbarDisplaysSubscribe;
    },

    activateLogin(state) {
      state.navbarDisplaysSubscribe = false;
    },
  },

  actions: {
    toggleRegCard({ commit }) {
      commit("loginCardStateChange");
    },

    toggleRegPage({ commit }) {
      commit("activateSubscribe");
    },
  },
});

export default store;

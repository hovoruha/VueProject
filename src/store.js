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

    // toggleRegPage(state) {
    //   state.loginCardVisible = !state.loginCardVisible;
    //   state.navbarDisplaysSubscribe = !state.navbarDisplaysSubscribe;
    // },
  },

  actions: {
    toggleRegPage({ commit }) {
      commit("loginCardStateChange");
      commit("activateSubscribe");
    },
  },
});

export default store;

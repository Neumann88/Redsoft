import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cards: [],
    cart: [],
  },
  mutations: {
    POST_CARD_STATE: (state, response) => {
      state.cards = response;
    },
    POST_CART_STATE: (state, items) => {
      state.cart.push(items);
    },
  },
  actions: {
    async GET_CARD_API({ commit }) {
      await axios
        .get("http://localhost:3000/listOfRecords")
        .then((response) => response.data)
        .then((response) => commit("POST_CARD_STATE", response));
    },
    async GET_CLICKBTN_API({ commit }, items) {
      await axios
        .get("https://jsonplaceholder.typicode.com/photos/1")
        .then((response) => response.data)
        .then((response) => {
          response;
          commit("POST_CART_STATE", items);
        });
    },
  },
  modules: {},
  getters: {
    CARDS(state) {
      return state.cards;
    },
    CART(state) {
      return state.cart;
    },
  },
});

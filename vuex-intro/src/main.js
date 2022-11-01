import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
// import store from './store'
const store = createStore({
  state() {
    return {
      counter: 0,
      isLogged: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase10(state, payload) {
      state.counter = state.counter + payload.value;
    },
    changeLog(state, payload) {
      state.isLogged = payload.isLogged;
    },
  },
  actions: {
    actionIncrement(context, payload) {
      setTimeout(function () {
        context.commit("increment", payload);
        console.log(payload);
      }, 1000);
    },
    loginState(context) {
      context.commit("changeLog", { isLogged: true });
    },
    logoutState(context) {
      context.commit("changeLog", { isLogged: false });
    },
  },
  getters: {
    multiplyByTwo(state) {
      return state.counter * 2;
    },
    normalisedCounter(_, getters) {
      const finalCounter = getters.multiplyByTwo;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    logStateResult(state) {
      return state.isLogged;
    },
  },
});

createApp(App).use(store).use(router).mount("#app");

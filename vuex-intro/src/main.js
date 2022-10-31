import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
// import store from './store'
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
  },
});

createApp(App).use(store).use(router).mount("#app");

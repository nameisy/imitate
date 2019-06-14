import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/assets/font/iconfont.css"

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!store.getters.userName) {
    store.dispatch('setUserInfo').then(() => {
      next()
    })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "core-js/stable";
// import "regenerator-runtime/runtime";
import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify";
import router from "./router";
import App from "./App.vue";

Vue.use(Vuetify);

/* eslint-disable-next-line no-new */
new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: true,
      options: { customProperties: true },
    },
    icons: {
      iconfont: "mdiSvg"
    }
  }),
  router,
  render: h => h(App)
}).$mount("#app");

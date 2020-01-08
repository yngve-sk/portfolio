import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import App from "./App.vue";
import "babel-polyfill";

Vue.use(Vuetify);

// const responsiveImage = require("../assets/images/source.png");
// Vue.mixin({
//   data: function() {
//     return {
//       images: responsiveImage
//     };
//   }
// });
/* eslint-disable-next-line no-new */
new Vue({
  vuetify: new Vuetify({
    theme: {
      dark: true
    },
    icons: {
      iconfont: "mdi"
    }
  }),
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import About from "./pages/About.vue";
import SplitStreams from "./pages/SplitStreams.vue";
import Visavis from "./pages/Visavis.vue";
import OLD from "./pages/OLD.vue";
import Master from "./pages/Master.vue";
import Macula from "./pages/Macula.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      props: () => ({ random: Math.random() })
    },
    {
      path: "/portfolio",
      component: Portfolio
    },
    {
      path: "/portfolio/splitstreams",
      component: SplitStreams
    },
    {
      path: "/portfolio/visavis",
      component: Visavis
    },
    {
      path: "/portfolio/old",
      component: OLD
    },
    {
      path: "/portfolio/stream",
      component: Master
    },
    {
      path: "/portfolio/macula",
      component: Macula
    },
    {
      path: "/about",
      component: About
    }
  ]
  // mode: 'history'
});

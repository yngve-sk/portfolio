import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Publications from "./pages/Publications.vue";
import Presentation from "./pages/Presentation.vue";
import About from "./pages/About.vue";

import Slots from "./pages/Slots.vue";
import Orcha from "./pages/Orcha.vue";
import SplitStreams from "./pages/SplitStreams.vue";
import Visavis from "./pages/Visavis.vue";
import OLD from "./pages/OLD.vue";
import Master from "./pages/Master.vue";
import Macula from "./pages/Macula.vue";
import Future from "./pages/Future.vue";
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
      path: "/publications",
      component: Publications
    },
    {
      path: "/presentation",
      component: Presentation
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/portfolio/slots",
      component: Slots
    },
    {
      path: "/portfolio/orcha",
      component: Orcha
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
      path: "/portfolio/future",
      component: Future
    }
  ]
  // mode: 'history'
});

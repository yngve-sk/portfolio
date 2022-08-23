import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Publications from "./pages/Publications.vue";
import Presentations from "./pages/Presentations.vue";
import About from "./pages/About.vue";

import MeshPainter from "./pages/MeshPainter.vue";
import Slots from "./pages/Slots.vue";
import Orcha from "./pages/Orcha.vue";
import SplitStreams from "./pages/SplitStreams.vue";
import Visavis from "./pages/Visavis.vue";
import OLD from "./pages/OLD.vue";
import Master from "./pages/Master.vue";
import Macula from "./pages/Macula.vue";
import Future from "./pages/Future.vue";

import WebGLVolume from './pages/WebGLVolume.vue'
import Visception from './pages/Visception.vue'
import D3Window from './pages/D3Window.vue'
import Drags from './pages/Drags.vue'
import ContentDrivenLayout from './pages/ContentDrivenLayout.vue'
import SemanticSnapping from './pages/SemanticSnapping.vue'
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
      path: "/presentations",
      component: Presentations
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/portfolio/visception",
      component: Visception
    },
    {
      path: "/portfolio/webgl-volume",
      component: WebGLVolume
    },
    {
      path: "/portfolio/semantic-snapping",
      component: SemanticSnapping
    },
    {
      path: "/portfolio/content-driven-layout",
      component: ContentDrivenLayout
    },
    {
      path: "/portfolio/drags",
      component: Drags
    },
    {
      path: "/portfolio/d3-window",
      component: D3Window
    },
    {
      path: "/portfolio/meshpainter",
      component: MeshPainter
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

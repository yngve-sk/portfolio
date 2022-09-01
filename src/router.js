import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Publications from "./pages/Publications.vue";
import Presentations from "./pages/Presentations.vue";
// import About from "./pages/About.vue";

import WebGLVolume from './pages/WebGLVolume.vue'
import Visception from './pages/Visception.vue'
import VisceptionCodebase from './pages/VisceptionCodebase.vue'
// import D3Window from './pages/D3Window.vue'
// import Drags from './pages/Drags.vue'
import ContentDrivenLayout from './pages/ContentDrivenLayout.vue'
import SemanticSnapping from './pages/SemanticSnapping.vue'
import Grading from './pages/Grading.vue'
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
    // {
    //   path: "/about",
    //   component: About
    // },
    {
      path: "/portfolio/visception",
      component: Visception
    },
    {
      path: "/portfolio/visception/codebase",
      component: VisceptionCodebase
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
    // {
    //   path: "/portfolio/drags",
    //   component: Drags
    // },
    // {
    //   path: "/portfolio/d3-window",
    //   component: D3Window
    // },
    {
      path: "/portfolio/course-management-sys",
      component: Grading
    },
  ]
});

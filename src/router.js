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
      path: "/projects",
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
      path: "/projects/visception",
      component: Visception
    },
    {
      path: "/projects/visception/codebase",
      component: VisceptionCodebase
    },
    {
      path: "/projects/webgl-volume",
      component: WebGLVolume
    },
    {
      path: "/projects/semantic-snapping",
      component: SemanticSnapping
    },
    {
      path: "/projects/content-driven-layout",
      component: ContentDrivenLayout
    },
    // {
    //   path: "/projects/drags",
    //   component: Drags
    // },
    // {
    //   path: "/projects/d3-window",
    //   component: D3Window
    // },
    {
      path: "/projects/course-management-sys",
      component: Grading
    },
  ]
});

<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(project, i) in projects"
        :key="`proj-${i}`"
        cols="12"
        sm="6"
        md="4"
        p="1"
        class="project-card-wrap">
        <project-card v-bind="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  props: {},
  data() {
    return {
      projects: [
        {
          projects: [ 'Master  Project', 'MetaVis' ],
          tags: [ 'software architecture', 'full stack', 'front end', 'backend'],
          technologies: [ 'd3.js', 'javascript', 'html', 'css', 'stylus', 'less', 'arrow.js', 'lodash.js', 'couchdb', 'pouchdb', 'vue.js', 'angular.js'],
          title: "Nested Visualization Editor",
          image: {src: "/assets/images_compressed/vsc-twts-demo.gif"},
          link: "visception",
          description: "In-browser visual builder for designing highly detailed nested visualizations."
        },
        {
          projects: [ 'MetaVis' ],
          tags: ['front end', 'computer vision' ],
          technologies: [ 'd3.js', 'typescript', 'javascript', 'html', 'css', 'stylus','vue.js', 'html5 canvas' ],
          title: "Computer-vision based force layout",
          image: { src: '/assets/images_compressed/cdl_lungs.gif' },
          link: "content-driven-layout",
          description: "Force-directed layout that uses computer vision to avoid collisions between arbitrary shape."
        },
        {
          projects: [ 'MetaVis' ],
          tags: ['front end', 'guided design', 'automatic visualization analysis'],
          technologies: [ 'd3.js', 'javascript', 'html', 'css', 'stylus','vue.js', 'lodash.js' ],
          title: "Semi-automatic vis refinement",
          image: require("../../assets/images_compressed/semsnap-casestudy2.png"),
          link: "semantic-snapping",
          description: "Automatically detects problems and corresponding solutions multi-view visualizations."
        },
        {
          projects: [ 'Master  Project' ],
          tags: ['software architecture', 'medical volume data analysis', 'front end', 'backend'],
          technologies: [ 'webgl', 'javascript', 'html', 'css', 'angular.js', 'websockets' ],
          title: "In-browser Medical Volume Renderer",
          image: { src: "/assets/images_compressed/webglvr_windowing-addsubview.gif" },
          link: "webgl-volume",
          description: "WebGL+Angular powered medical volume renderer"
        },
        {
          projects: [ 'PhD Teaching' ],
          tags: ['software architecture', 'DevOps', 'backend'],
          technologies: [ 'git', 'bash', 'kubernetes executor for gitlab', 'python', 'gitpython', 'gitlab pipelines'],
          title: "DevOps Based Course System",
          image: require("../../assets/images_compressed/gitlab-ci-pipelines.png"),
          link: "course-management-sys",
          description: "System for managing grading, students and teaching assisants in programming courses."
        },
      ]
    };
  }
};
</script>

<style scoped>
.v-image__placeholder > div {
  height: 100%;
}
</style>

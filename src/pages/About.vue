<template>
  <project-component v-bind="data" />
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  components: { ProjectComponent },
  data() {
    return {
      data: {
        title: "About",
        descriptionHTML: `
        <p>Hello and thank you for visiting my website, where I showcase some of the projects I have been working on during my career and free time.</p>
        <p>
          Computers were always around me. Pictures captured me sitting sitting in front of an Amiga when I was 1.5 years old  I played Lemmings, Monkey Island, and Giana Sisters in early years.
          When I got a graphical calculator in 8th grade, I began programming it in Basic. With my passion for computer games, I started my Bachelor's degree in computer science with a specialization in computer graphics.
          I enjoyed solving problems in all kinds of areas and my curiosity led me to study in a broad variety of fields, so that I wrote my thesis in artificial intelligence and started my Master's in high performance and cloud computing.
          I then discovered visualization as a topic that combines both visual appeal and problem solving. It was not only interesting enough to write my Master's thesis in the field, but further
          to pursue a PhD at the University of Bergen, Norway. There I developed multiple web-based applications and visualization methods
          and performed research on the comparison of visualizations to find the best one for a given user, task, and dataset.
          After finishing my PhD, I took a job at Magic Leap, where I now aim to combine my knowledge of visualizations with that of 3D spatial computing.
        </p>
        <p>
          I love playing drums and volleyball.
          I like being outdoors, viewing nature, hiking the mountains around Bergen, or lying at a beach looking at the ocean.
          I still love video games.
        </p>
        `,
      image: require('../../assets/images/about_me.jpg')
      }
    };
  }
};
</script>

<style scoped>
</style>

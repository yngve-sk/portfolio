<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <project-component v-bind="data" />
      </v-col>
    </v-row>
  </v-container>
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
        <p>Hello, I am Fabian and this is my website showcasing some of the projects I have been working on during my career and free time.</p>
              <p>
                Computers were always around me. My parents showed me a picture where I am 1.5 years old sitting in front of an Amiga. I played Lemmings, Monkey Island, and Giana Sisters in early years.
                When we got a graphical calculator in 8th grade, I began programming it in Basic. With my passion for computer games, I started my Bachelor's degree in computer science with a specialization in computer graphics.
                I enjoyed solving problems in all kinds of areas and my curiosity led me to study in a broad variety of fields. I wrote my thesis in artificial intelligence and started my Master's in high performance and cloud computing.
                I discovered visualization as a topic that combines both visual appeal and problem solving.
                Currently I am a PhD candidate at the University of Bergen, Norway, in the field of visualization.
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

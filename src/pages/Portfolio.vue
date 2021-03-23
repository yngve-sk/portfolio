<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(project, i) in projects" :key="`proj-${i}`" cols="12" sm="6" md="4">
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
          title: "Mesh Painter",
          image: require("../../assets/images/mesh-painter.png"),
          link: "meshpainter",
          description: "3D mesh annotation via 2D brushing."
        },
        {
          title: "Slot Machine",
          image: require("../../assets/images/slots.png"),
          link: "slots",
          description: "A simple slot machine based on the Godot engine."
        },
        {
          title: "Organic Narrative Charts",
          image: require("../../assets/images/orcha.jpg"),
          link: "orcha",
          description:
            "Digital recreation of Ward Shelley's diagrammatic paintings and prototype for an authoring tool."
        },
        {
          title: "SplitStreams",
          image: require("../../assets/images/streams.png"),
          link: "splitstreams",
          description:
            "JavaScript library for the easy visualization of hierarchical changes and evolution of tree structures."
        },
        {
          title: "Vis-a-Vis",
          image: require("../../assets/images/source.png"),
          link: "visavis",
          description:
            "Web-based IDE to support and enhance the development of prototypes for visualization algorithms."
        },
        {
          title: "Hydroponics O.L.D.",
          image: require("../../assets/images/OLD-interface1.png"),
          link: "old",
          description: `Self-regulating unit for automatic nutrition adjustment and watering of plants for optimal growth conditions.`
        },
        {
          title: "Author Collaborations",
          image: require("../../assets/images/streamgraph.png"),
          link: "stream",
          description:
            "Visualization of collaboration efforts in university departments and their evolution over time."
        },
        {
          title: "Macula Degeneration",
          image: require("../../assets/images/macula.png"),
          description:
            "Collaboration with University Eye Clinic Greifswald to visualize age-related macula degeneration."
        },
        // {
        //   title: "Customer Localization",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "Internship at TKI"
        // },
        // {
        //   title: "Vulcano Data",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "possibly"
        // },
        {
          title: "Reinforcement Learning",
          image: require("../../assets/images/bachelor.png"),
          description:
            "Implementation of a reinforcement learning agent to find an optimal sequence of actions in unknown environments."
        },
        // {
        //   title: "Collision Detection for Dynamic Meshes",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "possibly"
        // },
        {
          title: "Pong 2D/3D",
          image: require("../../assets/images/pong.jpg"),
          description: "Reimplementation of the OpenGL pipeline in software."
        },
        {
          title: "Manta",
          image: require("../../assets/images/Manta.jpg"),
          description:
            "Simple game for learning 3D transformations and lightning models."
        }
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

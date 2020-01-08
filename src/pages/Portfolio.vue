<template>
  <v-container fluid grid-list-lg mt-n2>
    <v-row row wrap justify-center pa-6 ma-0>
      <v-col v-for="(project, i) in projects" :key="i" :xs="12" :sm="6" :md="4">
        <v-card :to="'/portfolio/' + project.link" width="100%" height="100%" dark hover>
          <v-img
            contain
            width="100%"
            aspect-ratio="1.7778"
            :src="project.image.src"
            :lazy-src="project.image.placeholder"
          >
            <template v-slot:placeholder>
              <v-row align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title v-text="project.title" />
          <v-card-text v-text="project.description" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      projects: [
        {
          title: 'SplitStreams',
          image: require('../../assets/images/streams.png'),
          link: 'splitstreams',
          description:
            'JavaScript library for the easy visualization of hierarchical changes and evolution of tree structures.'
        },
        {
          title: 'Vis-a-Vis',
          image: require('../../assets/images/source.png'),
          link: 'visavis',
          description:
            'Web-based source code visualization which supports and enhances many tasks in the development and prototyping of visualization algorithms.'
        },
        {
          title: 'Hydroponics O.L.D.',
          image: require('../../assets/images/OLD-interface1.png'),
          link: 'old',
          description: `Self-regulating unit for automatic nutrition adjustment and watering for optimal plant growth conditions.`
        },
        {
          title: 'Author Collaborations',
          image: require('../../assets/images/streamgraph.png'),
          link: 'stream',
          description:
            'Visualization of collaboration efforts in university departments and their evolution over time.'
        },
        {
          title: 'More to come ...',
          image: require('../../assets/images/future.png'),
          link: 'future',
          description:
            'This website is still under development and more projects will be added in the future.'
        }
        // {
        //   title: "Macula Degeneration",
        //   image: require("../../assets/images/source.png"),
        //   link: "macula",
        //   description: "Collaboration with University Eye Clinic Greifswald"
        // },
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
        // {
        //   title: "Reinforcement Learning",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "My bachelor thesis supported by European Government"
        // },
        // {
        //   title: "Collision Detection for Dynamic Meshes",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "possibly"
        // },
        // {
        //   title: "CPU Implementation of the OpenGL Pipeline",
        //   image: require("../../assets/images/source.png"),
        //   link: "master",
        //   description: "Pong"
        // }
      ]
    };
  }
};
</script>

<style scoped>
.v-expansion-panel {
  height: 33%;
}
.v-expansion-panel-header {
  height: 100%;
}
.layout {
  height: 100%;
}

.v-card {
  display: inline-block;
  height: 50%;
}
.v-card > .layout > .flex {
  float: left;
  height: 100%;
}

.v-card img {
  height: 100%;
}
</style>

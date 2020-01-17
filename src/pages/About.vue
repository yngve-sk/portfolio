<template>
  <v-flex ma-6 height="auto">
    <v-card dark width="100%">
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="5">
            <v-card-title class="display-2">About</v-card-title>
            <v-card-text class="text-justify">
              <p>Hello, I am Fabian and this is my website showcasing some of the projects I have been working on during my career and free time.</p>
              <p>
                Computers were always around me. My parents showed me a picture where I am 1.5 years old sitting in front of an Amiga. I played Lemmings, Monkey Island, and Giana Sisters in early years.
                When we got a graphical calculator in 8th grade, I began programming it in Basic. With my passion for computer games, I started my Bachelor's degree in computer science with a specialization in computer graphics.
                I enjoyed solving problems in all kinds of areas and my curiosity led me to study in a broad variety of fields. I wrote my thesis in artificial intelligence and started my Master's in high performance and cloud computing.
                During my Master's I discovered visualization as a topic that combines both visual appeal and problem solving.
                Currently I am a PhD candidate at the University of Bergen, Norway, in the field of visualization.
              </p>
              <p>
                I love playing drums and volleyball.
                I like being outdoors, viewing nature, hiking the mountains around Bergen, or lying at a beach looking at the ocean.
                I still love video games.
              </p>
            </v-card-text>
          </v-col>
          <v-col cols="5">
            <v-img
              contain
              width="100%"
              aspect-ratio="1.7778"
              :src="image.src"
              :lazy-src="image.placeholder"
            />
          </v-col>
        </v-row>
        <v-divider dark />
        <v-row justify="space-around">
          <v-col cols="10">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      image: require('../../assets/images/about_me.jpg')
    };
  }
};
</script>

<style scoped>
</style>

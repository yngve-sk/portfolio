<template>
  <v-container fluid>
    <v-flex ma-6 height="auto">
      <v-card dark width="100%">
        <v-container fluid>
          <v-row justify="space-around">
            <v-col cols="5">
              <v-card-title class="display-2" v-text="title" />
              <v-card-text class="text-justify" v-text="description" />
            </v-col>
            <v-col cols="5">
              <div class="videoWrapper">
                <iframe
                  class="video"
                  src="https://www.youtube-nocookie.com/embed/Q4MAgDZn0Sw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
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
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Presentation',
      description: `In September 2019, I was invited to the consultancy company Knowit in Bergen to give a presentation about my current research.
      The presentation was targeted at employees in industry with a computer science background.
      `
    };
  }
};
</script>

<style scoped>
.videoWrapper {
  padding-top: 56.25%;
  position: relative;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

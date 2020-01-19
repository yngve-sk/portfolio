<template>
  <v-flex ma-6 height="auto">
    <v-card dark width="100%">
      <v-container fluid>
        <v-row justify="space-around" class="pt-4">
          <v-col cols="10">
            <v-card-title class="display-2 pa-0" v-text="title" />
          </v-col>
          <v-col cols="10">
            <v-row justify="space-around">
              <v-col cols="12" md="6" class="pr-md-6">
                <v-card-text class="text-justify pa-0" v-text="description" />
              </v-col>
              <v-col cols="12" md="6">
                <youtube v-if="video" :src="video" flex />
                <v-img
                  v-else-if="image"
                  contain
                  width="100%"
                  aspect-ratio="1.7778"
                  :src="image.src"
                  :lazy-src="image.placeholder"
                />
              </v-col>
            </v-row>
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
import Youtube from "../components/Youtube.vue";
export default {
  components: {
    Youtube
  },
  props: {
    title: {
      type: String,
      default: "Missing project title"
    },
    image: {
      type: Object
    },
    description: {
      type: String,
      default: "Missing project description"
    },
    video: {
      type: String
    }
  }
};
</script>

<style scoped></style>

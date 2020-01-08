<template>
  <v-flex ma-6>
    <v-card dark width="100%">
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="5">
            <v-card-title class="display-2" v-text="title" />
            <v-card-text class="text-justify" v-text="description" />
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
  props: {
    title: {
      type: String,
      default: 'Missing project title'
    },
    image: {
      type: Object,
      required: true
    },
    description: {
      type: String,
      default: 'Missing project description'
    }
  }
};
</script>

<style scoped></style>

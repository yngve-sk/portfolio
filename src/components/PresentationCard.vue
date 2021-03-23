<template>
  <v-card
    width="100%"
    height="100%"
    dark
    hover
  >
    <youtube v-if="video" :src="video" flex />
    <v-card-title v-text="title" class="no-pointer" />
    <v-card-text v-text="description" class="no-pointer"  />
  </v-card>
</template>

<script>

import Youtube from './Youtube.vue';

export default {
  components: {
    Youtube
  },
  props: {
    video: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
  }
};
</script>

<style scoped>
.no-pointer {
    cursor: default;
}
</style>

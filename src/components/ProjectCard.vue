<template>
  <v-card
    :to="link ? '/portfolio/' + link : undefined"
    :disabled="link ? false : true"
    width="100%"
    height="100%"
    dark
    hover
  >
    <v-img
      contain
      width="100%"
      aspect-ratio="1.7778"
      :src="image.src"
      :lazy-src="image.placeholder"
    >
      <template v-slot:placeholder>
        <v-row align="center" justify="center" class="ma-0">
          <v-progress-circular indeterminate color="grey" />
        </v-row>
      </template>
    </v-img>
    <v-card-title v-text="title" />
    <v-card-text v-text="description" />
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object
    },
    link: {
      type: String
    },
    image: {
      type: Object
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

<style scoped></style>

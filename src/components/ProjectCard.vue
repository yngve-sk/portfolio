<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="link ? '/portfolio/' + link : undefined"
      :class="{clickable: link, hovered: hover, 'no-pointer': !link}"
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
        class="image"
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
  </v-hover>
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

<style scoped>
.image {
  background-color: var(--v-secondary-darken2)
}
.clickable {
  /* background-color: #A0522D */
  background-color: var(--v-secondary-darken1)
}
.clickable.hovered {
  background-color: rgb(150, 67, 18)
}
.no-pointer {
    cursor: default;
}
</style>

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
      <div class="tags-wrapper">
        <div
          class="tag"
          v-for="tag in tags"
          :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="tags-wrapper">
        <div
          class="technology"
          v-for="technology in technologies"
          :key="technology">
          {{ technology }}
        </div>
      </div>
      <v-card-text v-text="description" />
    </v-card>
  </v-hover>
</template>

<script>

export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    technologies: {
      type: Array,
      default: () => []
    },
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
.tags-wrapper {
    display: flex;
    align-items: center;
    /* margin-left: 30px; */
    flex-flow: wrap;
    background: #66666626;
    padding-left: 30px;
    padding-right: 30px;
}

.tag {
    padding: 4px;
    background: #00000075;
    border-radius: 10px;
    margin: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border: thin #ffffff40 solid;
}

.technology {
    background: black;
    font-size: 14px;
    padding: 3px;
    /* border-radius: 5px; */
    margin: 3px;
    padding-right: 3px;
    padding-left: 3px;
    border: thin #ffffff40 solid;
}

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

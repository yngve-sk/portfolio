<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="link ? '/projects/' + link : undefined"
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
        <p>{{ projects.length === 0 ? '' : projects.length === 1 ? 'Project:' : 'Projects:' }}</p>
        <div
          class="project"
          v-for="project in projects"
          :key="project">
          {{ project }}
        </div>
      </div>
      <div class="tags-wrapper">
        <p>{{ tags.length === 0 ? '' : tags.length === 1 ? 'Role:' : 'Roles:' }}</p>
        <div
          class="tag"
          v-for="tag in tags"
          :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="tags-wrapper">
        <p>Technologies: </p>
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
    projects: {
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
    flex-flow: wrap;
    padding-left: 30px;
    padding-right: 30px;
}

.tags-wrapper>p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: #ffffffa3;
    font-size: 12px;
    margin-right: 5px;
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

.project {
  padding: 8px;
    background: #2c2c2c;
    box-shadow: 0px 0px 8px #ffffff5c;
    margin: 10px;
    /* border: thin white solid; */
    border-radius: 5px;
    font-size: 16px;
    background: #0000003d;
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

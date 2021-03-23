<template>
  <v-flex class="ma-6">
    <v-card dark width="100%">
      <v-container class="py-12" fluid>
        <v-row justify="space-around">
          <v-col cols="10" class="px-0">
            <v-card-title class="display-1 px-0 mx-0" v-text="title" />
          </v-col>
          <v-col cols="10" class="pa-0">
            <v-row justify="space-around" class="mb-6">
              <v-col cols="12" md="6" class="pa-3">
                <v-row cols="12">
                  <v-card-text v-if="description" class="text-justify" v-text="description" />
                  <v-card-text
                    v-else-if="descriptionHTML"
                    class="text-justify"
                    v-html="descriptionHTML"
                  />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn v-if="github" :href="github" target="_blank">
                      <v-icon class="mr-3">{{ icons.github }}</v-icon>Github
                    </v-btn>
                    <v-btn v-if="demo" color="blue" :href="demo" target="_blank">Demo</v-btn>
                  </v-card-actions>
                </v-row>
              </v-col>
              <v-col cols="12" md="6" class="pa-3">
                <youtube v-if="video" :src="video" flex />
                <v-img
                  v-else-if="image"
                  contain
                  width="100%"
                  aspect-ratio="1.7778"
                  :src="image.src"
                  :srcset="image.srcset"
                  :lazy-src="image.placeholder"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider dark />
        <v-row justify="space-around" class="ma-6">
          <v-col cols="10" class="font-weight-normal">
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mdiGithub } from '@mdi/js';
import Youtube from '../components/Youtube.vue';
export default {
  components: {
    Youtube
  },
  data() {
    return {
      icons: {
        github: mdiGithub
      }
    };
  },
  props: {
    title: {
      type: String,
      default: 'Missing project title'
    },
    image: {
      type: Object
    },
    description: {
      type: String
    },
    descriptionHTML: {
      type: String
    },
    video: {
      type: String
    },
    github: {
      type: String
    },
    demo: {
      type: String
    }
  }
};
</script>

<style scoped></style>

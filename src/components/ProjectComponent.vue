<template>
  <v-flex ma-6 height="auto">
    <v-card dark width="100%">
      <v-container fluid>
        <v-row justify="space-around" class="pt-4">
          <v-col cols="10">
            <v-card-title class="display-1 pa-0" v-text="title" />
          </v-col>
          <v-col cols="10">
            <v-row justify="space-around">
              <v-col cols="12" md="6" class="pr-md-6">
                <v-row cols="12">
                  <v-card-text v-if="description" class="text-justify pa-0" v-text="description" />
                  <v-card-text
                    v-else-if="descriptionHTML"
                    class="text-justify pa-0"
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
              <v-col cols="12" md="6">
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
        <v-row justify="space-around">
          <v-col cols="10">
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

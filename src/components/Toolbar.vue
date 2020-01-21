<template>
  <v-app-bar absolute app dark>
    <v-toolbar-title>
      <router-link to="/" class="toolbar-title">
        <v-icon icon>{{icons.home}}</v-icon>
        {{ title }}
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon href="https://github.com/cadanox" target="_blank">
      <v-icon icon>{{icons.github}}</v-icon>
    </v-btn>
    <v-btn icon href="mailto:fabian.bolte@web.de">
      <v-icon icon>{{icons.email}}</v-icon>
    </v-btn>
    <v-app-bar-nav-icon @click="menuButtonClicked" />

    <template v-slot:extension>
      <breadcrumbs />
      <!-- <v-tabs fixed-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/portfolio">Portfolio</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>-->
    </template>
  </v-app-bar>
</template>

<script>
import { mdiHome, mdiGithubCircle, mdiEmail } from '@mdi/js'
import Breadcrumbs from './Breadcrumbs.vue';

export default {
  components: {
    Breadcrumbs
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      icons: {
        home: mdiHome,
        github: mdiGithubCircle,
        email: mdiEmail
      }
    }
  },
  methods: {
    menuButtonClicked() {
      this.$emit('menuButtonClicked');
    }
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>

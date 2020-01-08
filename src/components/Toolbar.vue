<template>
  <v-app-bar fixed app dark>
    <v-toolbar-title>
      <router-link to="/" class="toolbar-title">
        <v-icon icon>home</v-icon>
        {{ title }}
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon icon>mdi-github-circle</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon icon>email</v-icon>
    </v-btn>
    <v-app-bar-nav-icon />
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
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>

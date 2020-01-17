<template>
  <v-navigation-drawer v-model="show" absolute right temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="../../assets/images/profile-160x160.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Fabian Bolte</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="page in pages" :key="page.name" :to="page.link" link>
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ page.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    showNav: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: false,
    pages: [
      {
        name: 'Home',
        icon: 'home',
        link: '/'
      },
      {
        name: 'Portfolio',
        icon: 'mdi-book-open-variant',
        link: '/portfolio'
      },
      {
        name: 'Publications',
        icon: 'mdi-newspaper',
        link: '/Publications'
      },
      {
        name: 'Presentation',
        icon: 'mdi-presentation',
        link: '/presentation'
      },
      {
        name: 'About',
        icon: 'mdi-information-variant',
        link: '/about'
      }
    ]
  }),
  watch: {
    showNav: function(value) {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped></style>

<template>
  <v-app>
    <navigation :showNav="navIsShown" />
    <toolbar title="Fabian Bolte" @menuButtonClicked="showMenu" />
    <v-content dark fill-height>
      <transition
        :name="transitionName"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <router-view />
      </transition>
    </v-content>
    <footer-component />
  </v-app>
</template>

<script>
import Breadcrumbs from './components/Breadcrumbs.vue';
import FooterComponent from './components/FooterComponent.vue';
import Navigation from './components/Navigation.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  components: {
    Breadcrumbs,
    FooterComponent,
    Navigation,
    Toolbar
  },
  data() {
    return {
      prevHeight: 0,
      transitionName: 'slide-left',
      navIsShown: true
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toPath = to.path.split('/');
      const fromPath = from.path.split('/');
      // remove trailing empty string
      if (toPath[toPath.length - 1] == '') toPath.pop();
      if (fromPath[fromPath.length - 1] == '') fromPath.pop();
      // compare path depth
      this.transitionName =
        toPath.length < fromPath.length ? 'slide-right' : 'slide-left';
      next();
    });
  },
  methods: {
    showMenu() {
      this.navIsShown = !this.navIsShown;
    },
    beforeLeave(element) {},
    enter(element) {
      document.querySelector('body').scrollTop = 0;
    },
    afterEnter(element) {}
  },
  computed: {
    breadcrumbs() {
      return this.$route.path != '/';
    }
  }
};
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.4s;
  transition-property: transform;
  /* transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1); */

  /* makes sure that content is next to each other during the slide animation */
  position: absolute;
}

.slide-left-enter,
.slide-right-leave-active {
  /* opacity: .5; */
  transform: translateX(100%);
}

.slide-left-leave-active,
.slide-right-enter {
  /* opacity: .5; */
  transform: translateX(-100%);
}
</style>

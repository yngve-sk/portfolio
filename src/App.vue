<template>
  <v-app>
    <!-- <v-navigation-drawer app /> -->
    <toolbar title="Fabian Bolte" />
    <v-content dark>
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
import Toolbar from './components/Toolbar.vue';
import FooterComponent from './components/FooterComponent.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';

export default {
  components: {
    Breadcrumbs,
    Toolbar,
    FooterComponent
  },
  data() {
    return {
      prevHeight: 0,
      transitionName: 'slide-left'
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
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
  position: absolute; /* makes sure that content is next to each other during the slide animation */
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

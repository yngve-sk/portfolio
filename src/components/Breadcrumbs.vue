<template>
  <!-- <v-flex class="breadcrumbs"> -->
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider large elevation="6" />
  </div>
  <!-- </v-flex> -->
</template>

<script>
export default {
  mounted() {
    // let breadcrumbs = document.querySelector('.v-breadcrumbs');
    // console.log(breadcrumbs);
    // let divider = document.createElement('li');
    // divider.classList.add('v-breadcrumbs__divider');
    // breadcrumbs.appendChild(divider);
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [];
      let path = this.$route.path;
      let subPaths = path.split('/');

      // remove trailing end
      if (subPaths[subPaths.length - 1] == '') subPaths.pop();

      // create one breadcrumb per path section
      for (let subPath of subPaths) {
        let text = subPath == '' ? 'home' : subPath;
        breadcrumbs.push({
          text,
          to: '/' + subPath,
          exact: true,
          ripple: true
        });
      }

      // do not show current page
      // breadcrumbs.pop();
      // remove link from current page breadcrumb
      breadcrumbs[breadcrumbs.length - 1].disabled = true;

      return breadcrumbs;
    }
  }
};
</script>

<style>
.v-breadcrumbs::before {
}
.v-breadcrumbs {
  width: fit-content;
  padding: 0 !important;
  background-color: #424242;
}
.v-breadcrumbs::after {
  content: '';
  border-left: 7px solid black;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.v-breadcrumbs li:nth-child(2n + 1) {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
.v-breadcrumbs__divider {
  background-color: black;
  padding: 0px !important;
  height: 34px;
  width: 3px;
}
.v-breadcrumbs__item {
  background-color: #333;
  /* padding: 0 15 0 15; */
  border-left: 7px solid black;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  height: 0;
  color: grey !important;
}
.v-breadcrumbs li:first-of-type .v-breadcrumbs__item {
  border-left: 7px solid #454545;
}
.v-breadcrumbs li:last-of-type .v-breadcrumbs__item {
  /* padding-right: 2px; */
  /* background-color: black; */
}
.v-breadcrumbs li:last-of-type .v-breadcrumbs__item {
  color: orange !important;
}
.v-breadcrumbs li:last-of-type {
  background-color: black;
  padding-right: 3px;
}
.v-breadcrumbs__item::before {
  content: '';
  width: 9px;
}
.v-breadcrumbs__item::after {
  content: '';
  position: relative;
  left: 7px;
  border-left: 7px solid #333;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  z-index: 3;
}
</style>

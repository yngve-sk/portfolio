<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider large elevation="6" />
  </div>
</template>

<script>
export default {
  computed: {
    // extract page navigations from the current path
    breadcrumbs() {
      let breadcrumbs = [];
      let path = this.$route.path;
      let subPaths = path.split("/");

      // remove trailing end
      if (subPaths[subPaths.length - 1] == "") subPaths.pop();

      // create one breadcrumb per path section
      for (let subPath of subPaths) {
        let text = subPath == "" ? "home" : subPath;
        breadcrumbs.push({
          text,
          to: "/" + subPath,
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
.v-breadcrumbs {
  /* padding: 0 !important; */
}
.v-breadcrumbs__item::before {
  content: "";
  width: 9px;
}
.v-breadcrumbs__item {
  background-color: #333;
  color: grey !important;
  border-left: 7px solid #212121;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  height: 0;
}
.v-breadcrumbs__item::after {
  content: "";
  position: relative;
  left: 7px;
  border-left: 7px solid #333;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.v-breadcrumbs__divider {
  padding: 3px !important;
}
.v-breadcrumbs li:last-of-type .v-breadcrumbs__item {
  color: orange !important;
}
</style>

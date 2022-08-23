<template>
  <v-footer dark height="auto">
    <v-flex text-center xs12>
      &copy;{{year}} — <strong>Yngve Kristiansen</strong>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    year: 2020
  }),
  created() {
    this.year = new Date().getFullYear();
  }
};
</script>

<style scoped></style>

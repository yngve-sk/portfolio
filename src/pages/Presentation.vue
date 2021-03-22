<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <project-component v-bind="data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  components: { ProjectComponent },
  data: () => {
    return {
      data: {
        title: "Presentation",
        description: `In September 2019, I was invited to the consultancy company Knowit in Bergen to give a presentation about my current research.
        The presentation was targeted at employees in industry with a computer science background.
        `,
        video: "https://www.youtube-nocookie.com/embed/Q4MAgDZn0Sw"
      }
    };
  }
};
</script>

<style scoped></style>

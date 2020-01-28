<template>
  <project-component v-bind="data">Additional content.</project-component>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  components: { ProjectComponent },
  data() {
    return {
      data: {
        title: "Macula Degeneration",
        image: require("../../assets/images/source.png"),
        description: "Collaboration with University Eye Clinic Greifswald"
      }
    };
  }
};
</script>

<style scoped></style>

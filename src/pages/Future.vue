<template>
  <project-component :title="title" :image="image" :description="description">
    <div></div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
export default {
  components: { ProjectComponent },
  data() {
    return {
      title: 'More to come ...',
      image: require('../../assets/images/future.png'),
      description: `This website is still under development.
      More completed projects are going to be added in the future.
      `
    };
  }
};
</script>

<style scoped></style>

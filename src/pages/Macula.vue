<template>
  <project-component :title="title" :image="image" :description="description">Additional content.</project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
export default {
  components: { ProjectComponent },
  data() {
    return {
      title: 'Macula Degeneration',
      image: require('../../assets/images/source.png'),
      description: 'Collaboration with University Eye Clinic Greifswald'
    };
  }
};
</script>

<style scoped>
</style>

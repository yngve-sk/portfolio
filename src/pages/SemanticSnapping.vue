<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>Composition of existing charts into a multi-chart design</li>
          <li>Automatic detection of design ambiguities between views</li>
          <li>One-click resolution of detected problems</li>
        </ul>
      </p>
      <p>
        Since this is built on top of Visception, the additionaly implemented features were high-level traversals over existing charts. Similar to Visception, this project is closed source.
      </p>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
import Youtube from '../components/Youtube.vue';
export default {
  components: { ProjectComponent, Youtube },
  data() {
    return {
      data: {
        title: 'Semantic Snapping',
        image: require("../../assets/images_compressed/semsnap-casestudy2.png"),
        descriptionHTML: `Semantic Snapping is an experimental approach for guiding multi-view visualization design, implemented on top of the <a href="#/projects/visception">Visception</a> system. The core idea is to automatically detect design conflicts or ambiguities <i>between</i> views, and also automatically generate revisions that will resolve those problems. In practice, the user is able to review design ambiguities on a per-view basis, and also view and execute understandable operations by simply clicking them. We expressed relations between views with predicate logic, and corresponding operations. In practice, we implemented these predicate logic rules as functions evaluating and operating on underlying Visception chart specifications.
        `,
        video: "https://www.youtube-nocookie.com/embed/MqN5KyZQF4Q"
      }
    };
  }
};
</script>

<style scoped></style>

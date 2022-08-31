<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>One-click transformation of grid layout to content-driven layout</li>
          <li>Accurate repulsion of highly irregular shapes</li>
          <li>Attractive forces based on grid layout topology</li>
        </ul>
      </p>
      <p>
        Technologies used:
        <ul>
          <li>VueJS+TypeScript</li>
          <li>D3 for the force simulation</li>
          <li>VegaLite for rendering chart specs</li>
          <li>Tailwind.css for styling</li>
        </ul>
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
        title: 'Content-Driven layout',
        image: { src: '/assets/images/cdl_turbines.gif'},
        descriptionHTML: `<p>Content-Driven Layout is a force-directed layout using computer vision techniques to resolve collisions between arbitrary shapes. The main idea is to turn a grid layout into a layout where shapes are positioned according to contents rather than bounding boxes. This is done by basing the repulsive force on the distance transforms (where each pixel encodes distance to nearest content pixel) of each individual element. The video on the right shows the concept illustrated + a demonstration of how it works. </p>

        <img style="width: 80%; margin: 10%" src="/assets/images/cdl_lungsdt.png">
        <p>This figure shows an image of lungs, and the according computed distance transform, and its gradient rendered as arrows.</p>

        `,
        video: "https://www.youtube-nocookie.com/embed/phhFzdNB340?start=160"
      }
    };
  }
};
</script>

<style scoped></style>

<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>Web-based Editor</li>
          <li>Turn data into a wide range of different charts</li>
          <li>Compose different charts by nesting them within each other</li>
          <li>Implicitly handles data in the background using arrow.js columnar storage</li>
          <li>Rich set of drag & drop operations to map data to individual charts or visual channels</li>
          <li>Undo/redo</li>
          <li>History navigation: See all actions of the design visually, and revert the design to a certain point</li>
          <li>Storing / executing undo/redo history on demand (useful for testing & development)</li>
        </ul>
      </p>
      <p>
        The interface is based on a windowing library
        allowing for both gridded and floating windows. Data can be loaded, viewed in the Data View.
        When a data attribute is dragged, potential drop areas associated with mapping actions appear.
        This editor provided the basis for the first two publications of my PhD project, and
        has been an environment to experiment with many different technologies and features.
      </p>
      <p>
        Most prominent technologies used:
        <ul>
          <li>HTML+CSS+JavaScript ES6</li>
          <li>D3.js</li>
          <li>Angular, later ported to VueJS</li>
          <li>Vuex</li>
          <li>arrow.js</li>
          <li>Stylus</li>
          <li>Grunt, later switched to Webpack</li>
          <li>...several other smaller libraries for specific functionalities</li>
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
        title: 'Visception',
        image: require('../../assets/images/source.png'),
        description: `Visception is a editor for nested visualizations of tabular data. Initially implemented in
        Angular 1, before gradually porting the components over to Vue.js.
        `,
        video: "https://www.youtube.com/watch?v=avUf14X-UWs"
      }
    };
  }
};
</script>

<style scoped></style>

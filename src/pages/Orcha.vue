<template>
  <project-component v-bind="data">
    <div>
      <p>
        We built a prototype for an authoring tool on top of the SplitStreams library.
        We support the main stream, label, and link elements that can be found in Ward Shelley's works.
        The data can be provided in a CSV format, or created via intuitive interactions:
        <ul>
          <li>Drag & drop the mouse on empty space to create a new stream.</li>
          <li>Drag & drop the mouse from one stream to another to create a link between them.</li>
          <li>Click on a stream to create a new label and enter the desired text in the popup input field.</li>
        </ul>
      </p>
      <p>
        Each stream is given a solid color, on top of
        which we apply image processing techniques to acquire the desired
        style. We multiply the colored stream with a grey scale fractal noise
        to integrate irregularities. The colors appear more hand-drawn than
        the solid color that is free from any imperfections. We add a strong
        black outline and both an inner and an outer shadow to each element of the chart. The latter are achieved by multiplying each element’s pixel image with a black and offset copy of itself.
      </p></div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
export default {
  components: { ProjectComponent },
  data() {
    return {
      data: {
        title: 'Organic Narrative Charts',
        image: require('../../assets/images/orcha.jpg'),
        description: `Ward Shelley is the author of several diagrammatic paintings that show the timeline of art-related subjects, such as Downtown Body,
a history of art scenes. His drawings include many stylistic elements that are not covered by existing storyline visualizations,
like links between entities, splits and merges of streams, and tags or labels to describe the individual elements. We present a
visualization method that provides a visual mapping for the complex relationships in the data, creates a layout for their display,
and adopts a similar styling of elements to imitate the artistic appeal of such illustrations.`,
        github: 'https://github.com/cadanox/orcha'
        // demo: "https://folk.uib.no/fbo083/secstreams/"
      }
    };
  }
};
</script>

<style scoped></style>

<template>
  <project-component :title="title" :image="image" :description="description">
    <div>
      The library is based on D3.js and allows for the easy creation of:
      <ul>
        <li>Bar Charts</li>
        <li>Stacked Bar Charts</li>
        <li>Streamgraphs</li>
        <li>One-dimensional Treemaps</li>
        <li>Nested Streamgraphs</li>
        <li>SplitStreams</li>
        <li>and Storylines</li>
      </ul>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  components: { ProjectComponent },
  data() {
    return {
      title: "SplitStreams",
      image: require("../../assets/images/streams.png"),
      description: `With SplitStreams we are visualizing hierarchically structured data over time.
        A hierarchy can for example represent the structures of a company, showing how employees are grouped into different teams,
        teams are part of different departments, and all departments follow the lead of the big boss. But the hierarchy can change over time. Some departments become larger as new employees are hired.
        Some employees might climb up the hierarchy, becoming leaders of their team or being promoted to a higher position. Some teams might dissolve when their product did not turn out lucrative or their jobs can be replaced by machines.
        We are showing all these changes in a static, stream-based visualization and split up the streams in each timestep to emphasize the underlying hierarchies.
        `
      //Techniques such as animated or juxtaposed tree visualizations are not capable of providing a good overview of the time series and lack expressiveness in conveying changes over time. Nested streamgraphs provide a better understanding of the data evolution, but lack the clear outline of hierarchical structures at a given timestep. Furthermore, these approaches are often limited to static hierarchies or exclude complex hierarchical changes in the data, limiting their use cases. We propose a novel visual metaphor capable of providing a static overview of all hierarchical changes over time, as well as clearly outlining the hierarchical structure at each individual time step. Our method allows for smooth transitions between tree maps and nested streamgraphs, enabling the exploration of the trade-off between dynamic behavior and hierarchical structure. As our technique handles topological changes of all types, it is suitable for a wide range of applications. We demonstrate the utility of our method on several use cases, evaluate it with a user study, and provide its full source code.'
    };
  }
};
</script>

<style scoped></style>

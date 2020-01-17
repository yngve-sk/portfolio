<template>
  <project-component :title="title" :image="image" :description="description">
    <div>
      <p>
        Cooperation data was extracted from the publication data of the TU Chemnitz, Germany. We differ between 4 different cooperation types:
        <ul>
          <li>Within the same institute</li>
          <li>With another institute of the same faculty</li>
          <li>With an institute of another faculty</li>
          <li>With external collaborators</li>
        </ul>
      </p>
      <p>
        The interface allows for the arbitrary selection of institutes and faculties for comparison.
        These entitites can be shown individually, as well as added to or deleted from the current selection.
        Selections can be made via clicks on the individual streams or toggled via the menu and text input.
        The visualization provides insights into the development of collaborations from individual institutes and faculties, as well as the classification and evolution of individual collaboration types.
        These insights can be utilized to identify trends and contemplate their reasons. Decision makers can use this information as an additional indicator for the distribution of university funds.
      </p>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  components: { ProjectComponent },
  data() {
    return {
      title: "Author Collaborations",
      image: require("../../assets/images/streamgraph.png"),
      description: `This visualization utilizes Streamgraphs to display the evolution of cooperations between institutes, faculties, and external entities in a university.
        The representation does not only allow for arbitrary comparisons of evolutions on different scales, but further provides information about cooperation types and their contribution to total cooperation numbers.
        `
      };
  }
};
</script>

<style scoped>
</style>

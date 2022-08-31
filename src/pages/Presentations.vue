<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(presentation, index) in presentations" :key="`pres-${index}`" cols="12" sm="6">
        <presentation-card v-bind="presentation" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PresentationCard from "../components/PresentationCard.vue";

export default {
  components: { PresentationCard },
  data: () => {
    return {
      presentations: [
        {
          title: "Invited Paper @ EuroVis 2021 (Visception)",
          description: `EuroVis is one of the most prestigeous conferences for data visualization. Here, I was invited to present Visception which was published in Computers & Graphics.
          `,
          video: "https://www.youtube-nocookie.com/embed/OGT81yms-G4",
        },
        {
          title: "Invited Paper @ IEEE VIS 2021 (Semantic Snapping)",
          description: `IEEE VIS is the most prestigious conference for data visualization.
          I was invited to present my IEEE TVCG paper Semantic Snapping for Guided Multi-view Visualization Design.
          `,
          video: "https://www.youtube-nocookie.com/embed/BpquNW3kPUE",
        }
      ]
    };
  }
};
</script>

<style scoped></style>

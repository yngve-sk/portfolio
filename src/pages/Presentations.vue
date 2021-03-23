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
          title: "Invited Paper @ IEEE VIS 2020 (SplitStreams)",
          description: `IEEE VIS is the most prestigious conference for data visualization.
          I was invited to present my IEEE TVCG paper SplitStreams.
          `,
          video: "https://www.youtube-nocookie.com/embed/mIadBtuBq1w?start=5336",
        },
        {
          title: "Invited Paper @ IEEE VIS 2020 (Vis-a-Vis)",
          description: `IEEE VIS is the most prestigious conference for data visualization.
          I was invited to present my IEEE TVCG paper Vis-a-Vis.
          `,
          video: "https://www.youtube-nocookie.com/embed/h1isZznN1oI?start=1567",
        },{
          title: "Short Paper @ EuroGraphics 2020 (Organic Narrative Charts)",
          description: `EGEV2020 was a joint EuroVis / Eurographics and is the biggest visualization conference in Europe.
          I presented my short paper Organic Narrative Charts.
          `,
          video: "https://www.youtube-nocookie.com/embed/Fr7TDvw_YkA?start=3139",
        },
        {
          title: "Invited Talk @ Knowit Bergen",
          description: `In September 2019, I was invited to the consultancy company Knowit in Bergen to give a presentation about my current research.
          The presentation was targeted at employees in industry with a computer science background.
          `,
          video: "https://www.youtube-nocookie.com/embed/Q4MAgDZn0Sw",
        }
      ]
    };
  }
};
</script>

<style scoped></style>

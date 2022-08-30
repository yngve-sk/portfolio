<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="pub in bibtexParsed" :key="`pub-${pub.BIBTEXKEY}`" cols="12">
        <publication :bibtex="pub" v-bind="meta[pub.BIBTEXKEY]" class="py-6" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Publication from '../components/Publication.vue';

export default {
  components: { Publication },
  data() {
    return {
      meta: {
        Kristiansen2022ContentDriven: {
          image: { src: 'https://vis.uib.no/wp-content/papercite-data/images/Kristiansen-2022-LungsDt.PNG' },
        },
        'Kristiansen-2021-SSG': {
          image: { src: 'https://vis.uib.no/wp-content/papercite-data/images/Kristiansen-2021-SSG.png' },
          video: 'https://vis.uib.no/wp-content/papercite-data/vids/Kristiansen-2021-SSG.mp4'
        },
        'Kristiansen-2020-VIV': {
          image: {src: 'https://vis.uib.no/wp-content/papercite-data/images/Kristiansen-2020-VIV.jpg' },
          video: 'https://vis.uib.no/wp-content/papercite-data/vids/Trautner_2020_SunspotPlots_video.mp4'
        },
      },
      bibtexParsed: {},
      bibtex: `
@article{Kristiansen2022ContentDriven,
	title        = {Content-Driven Layout for Visualization Design},
	author       = {Kristiansen, Y. S. and Garrison, L. and Bruckner, S.},
	year         = 2022,
	journal      = {Proceedings of the International Symposium on Visual Information Communication and Interaction (to appear)},
	volume       = {},
	pages        = {},
	doi          = {},
	issn         = {},
	url          = {https://vis.uib.no/wp-content/papercite-data/pdfs/Kristiansen-2022-CDL.pdf},
    abstract     = {Multi-view visualizations are typically presented in a grid layout with elements positioned according to their bounding rectangles. These rectangles often contain unused white space. In cases where Tufte’s Shrink Principle can be applied to reduce non-data-ink without impairing the communication of information, unused white space can be utilized for the placement of other elements. This is often done in manually “hand-crafted” layouts by designers. However, upon changes to individual elements, this design process has to be repeated. To reduce non-data-ink and repetitive manual design, we contribute a method for automatically turning a grid layout into a content-driven layout, where elements are positioned with respect to their contents. Existing approaches have explored the use of a force simulation in conjunction with proxy geometries to simplify collision handling for irregular shapes. Such customized force directed layouts are usually unstable, and often require additional constraints to run properly. In addition, proxy geometries become less accurate and effective with more irregular shapes. To solve these shortcomings, we contribute an approach for identifying central elements in an original grid layout in order to set up corresponding attractive forces. Furthermore, we utilize an imagebased approach for collision detection and avoidance that works accurately for highly irregular shapes. We demonstrate the utility of our approach with three case studies.},
    images     = "images/Kristiansen-2022-LungsDt.PNG",
    thumbnails = "images/Kristiansen-2022-LungsDt.PNG",
    pdf = {pdfs/Kristiansen-2022-CDL.pdf},
    project = "MetaVis",
}

@Article{Kristiansen-2021-SSG,
  author     = {Kristiansen, Y. S. and Garrison, L. and Bruckner, S.},
  title      = {Semantic Snapping for Guided Multi-View Visualization Design},
  journal    = {IEEE Transactions on Visualization and Computer Graphics},
  year       = {2021},
  volume     = {},
  pages      = {},
  doi        = {},
  abstract   = {Visual information displays are typically composed of multiple visualizations that are used to facilitate an understanding of the underlying data. A common example are dashboards, which are frequently used in domains such as finance, process monitoring and business intelligence. However, users may not be aware of existing guidelines and lack expert design knowledge when composing such multi-view visualizations. In this paper, we present semantic snapping, an approach to help non-expert users design effective multi-view visualizations from sets of pre-existing views. When a particular view is placed on a canvas, it is “aligned” with the remaining views–not with respect to its geometric layout, but based on aspects of the visual encoding itself, such as how data dimensions are mapped to channels. Our method uses an on-the-fly procedure to detect and suggest resolutions for conflicting, misleading, or ambiguous designs, as well as to provide suggestions for alternative presentations. With this approach, users can be guided to avoid common pitfalls encountered when composing visualizations. Our provided examples and case studies demonstrate the usefulness and validity of our approach.},
  note       = {Accepted for publication, to be presented at IEEE VIS 2021},
  project    = {MetaVis,VIDI},
  url       = {https://vis.uib.no/wp-content/papercite-data/pdfs/Kristiansen-2021-SSG.pdf},
  pdf       = {pdfs/Kristiansen-2021-SSG.pdf},
  vid       = {https://vis.uib.no/wp-content/papercite-data/vids/Kristiansen-2021-SSG.mp4},
  thumbnails = {images/Kristiansen-2021-SSG.png},
  images    = {images/Kristiansen-2021-SSG.jpg},
  keywords  = {tabular data, guidelines, mixed initiative human-machine analysis, coordinated and multiple views},
  doi = {10.1109/TVCG.2021.3114860},
}
@article{Kristiansen-2020-VIV,
  author = {Kristiansen, Y. S. and Bruckner, S.},
  title = {Visception: An Interactive Visual Framework for Nested Visualization Design},
  journal = {Computers \& Graphics},
  volume = {92},
  pages = {13--27},
  keywords = {information visualization, nested visualizations, nesting},
  doi = {10.1016/j.cag.2020.08.007},
  abstract = {Nesting is the embedding of charts into the marks of another chart. Related to principles such as Tufteâs rule of utilizing micro/macro readings, nested visualizations have been employed to increase information density, providing compact representations of multi-dimensional and multi-typed data entities. Visual authoring tools are becoming increasingly prevalent, as they make visualization technology accessible to non-expert users such as data journalists, but existing frameworks provide no or only very limited functionality related to the creation of nested visualizations. In this paper, we present an interactive visual approach for the flexible generation of nested multilayer visualizations. Based on a hierarchical representation of nesting relationships coupled with a highly customizable mechanism for specifying data mappings, we contribute a flexible framework that enables defining and editing data-driven multi-level visualizations. As a demonstration of the viability of our framework, we contribute a visual builder for exploring, customizing and switching between different designs, along with example visualizations to demonstrate the range of expression. The resulting system allows for the generation of complex nested charts with a high degree of flexibility and fluidity using a drag and drop interface.},
  year = {2020},
  url = {https://vis.uib.no/wp-content/papercite-data/pdfs/Kristiansen-2020-VIV.pdf},
  pdf = "pdfs/Kristiansen-2020-VIV.pdf",
  thumbnails = "images/Kristiansen-2020-VIV.png",
  images = "images/Kristiansen-2020-VIV.jpg",
  project = "MetaVis"
}
`
    };
  },
  created() {
    const b = new BibtexParser();
    b.setInput(this.bibtex);
    b.bibtex();
    this.bibtexParsed = b.getEntries();
    console.log(this.bibtexParsed);
  }
};
</script>

<style scoped>
</style>
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
      <p>
        Example visualizations generated with the editor:
      </p>
      <div
        style="
              display: inline-flex;
              position: relative;
              flex-wrap: wrap;
            "
      >
        <div
          v-for="img in data.imageArray"
          :key="img.src"
          class="array-imgs"
        >
          <a
            :href="img.src"
          >
            <img
              class="array-img"
              :src="img.src"
            >
          </a>
        </div>
      </div>
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
        image: require('../../assets/images2/vsc_visception-gui.png'),
        descriptionHTML: `Visception is an editor for creating highly expressive nested visualizations of tabular data, while also controlling the design at different hierarchical levels. Initially implemented in Angular 1, before gradually porting the components over to Vue.js. This was a very (too) ambitious and large project closed source project, with a large codebase and a lot of logic packed into it. <a href="/#/portfolio/visception/codebase">Click here to see the codebase visualized as a zoomable treemap</a>
        `,
        imageArray: [
          'VisceptionExSuicideBarsGlass.png',
          'bookshelf-ex0.png',
          'titanic-1.png',
          'titanic-2.png',
          'titanic-4.png',
          'titanic-ex3-v4.png',
          'rb-america-ex0.png',
          'suicide-ex0-larger-txt-bold.png',
          'mushrooms-ex1-shadowed.png',
          'mushrooms-ex2.png',
          'mushrooms200-ex1.png',
          'mushrooms200-ex3.png',
          'nightingale.png',
          'twts-ex0.png',
          'TWTSBubbles.png',
          'TWTSColumns.png',
          'TWTSDetailed.png',
          'TWTSOriginal.png',
          'cars-ex0.png',
          'cars-ex4.png',
          'cars-ex5.png',
        ].map((v) => require(`../../assets/images2/vsc_${v}`)),
        video: "https://www.youtube-nocookie.com/embed/avUf14X-UWs"
      }
    };
  }
};
</script>

<style scoped>
  .array-imgs {
    margin: 12px;
    border-radius: 2px;
    height: 120px;
    overflow: hidden;
    transition: all 250ms ease-out;
    box-shadow: 1px 1px 25px #ffffff47;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .array-imgs:hover {
    transform: scale(2);
  }

  .array-imgs>a {
    display: block;
  }

  .array-imgs>a>img {
    height: 100px
  }
</style>

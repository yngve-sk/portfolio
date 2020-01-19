<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>Web-based IDE</li>
          <li>Live compilation</li>
          <li>Visual code history</li>
          <li>Automatic version control</li>
          <li>Instant code difference</li>
          <li>Instant revision checkout</li>
          <li>Visual result difference</li>
          <li>Predefined result interactions</li>
        </ul>
      </p>
      <p>
        The client-side is utilizing standard web technologies including HTML5,
        CSS3, and JavaScript (ES6). The interface is based on Golden Layout,
        allowing for a user-defined positioning of windows, as well as the closing
        and maximizing of individual windows. Source code can be written in the
        Ace Editor which provides basic syntax highlighting. The visual result of
        the source code is presented in an interactive canvas element. The
        visualization of the Git tree is based on D3.js and Git differences are
        shown using the diff2html library. The server side is written in C++ as an
        extension to Volumeshop. Communication to the client is based on AJAX
        calls exchanging JSON objects. Based on the chosen programming language,
        received source code runs either through the Diderot or the GCC compiler.
        Successfully compiling source code is stored in a local Git repository via
        libgit2.
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
        title: 'Vis-a-Vis',
        image: require('../../assets/images/source.png'),
        description: `Vis-a-Vis is a client-server architecture for the visual exploration of code development workflows.
        It improves the users’ understanding of code changes and their impact on the algorithm’s functionality.
        `,
        video: "https://www.youtube-nocookie.com/embed/5OaZKX7-9UE"
      }
    };
  }
};
</script>

<style scoped></style>

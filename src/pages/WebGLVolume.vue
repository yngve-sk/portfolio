<template>
  <project-component v-bind="data">
    <div>
      <p>
        The following features are provided:
        <ul>
          <li>Web-based Editor</li>
          <li>Select one out of several datasets</li>
          <li>Adjustable layout with multiple views</li>
          <li>Adjust parameters of lighting on a per-view basis</li>
          <li>Adjust transfer function on a per-view basis</li>
          <li>Adjust camera on a per-view basis</li>
          <li>Can synchronize (link) parameters, transfer function, and camera across user-defined selections of views</li>
        </ul>
      </p>
      <p>
        Most prominent technologies used:
        <ul>
          <li>WebGL</li>
          <li>Angular.js (1)</li>
          <li>Performant low-level JS structures (always typed arrays and ArrayBuffers over general arrays)</li>
          <li>HTML+CSS+JavaScript ES6</li>
          <li>Grunt</li>
        </ul>
      </p>
      <p>
        Some screen caps of the program in action:
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
        title: 'WebGL Volume Renderer',
        image: { src: "/assets/images2/webglvr_interact-camera.gif" },
        descriptionHTML: `This project was built using AngularJS and WebGL to enable for medical volume rendering. Due to medical volume rendering files being large to serve raw, a lightweight WebSocket based server to stream it in chunks was necessary. I really enjoyed the engineering and coordination of the interactions with underlying geometry / data selections, as well as the glsl shader coding which is very much the same as in OpenGL.
        `,
        imageArray: [
          'webglvr_windowing-linkingprops.gif',
          'webglvr_windowing-toggleglobal.gif',
          'webglvr_windowing-selectsubview.gif',
          'webglvr_histo-surfaceweighting.gif'
        ].map((v) => ({ src: `/assets/images2/${v}` })),
        github: "https://github.com/yngve-sk/Volume-Rendering-WebGL"
        //video: "https://www.youtube-nocookie.com/embed/avUf14X-UWs"
      }
    };
  }
};
</script>

<style scoped>
  .array-imgs {
    margin: 12px;
    border-radius: 2px;
    height: 180px;
    overflow: hidden;
    transition: all 250ms ease-out;
    box-shadow: 1px 1px 25px #ffffff47;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .array-imgs:hover {
    transform: scale(1.4);
  }

  .array-imgs>a {
    display: block;
  }

  .array-imgs>a>img {
    height: 180px
  }
</style>

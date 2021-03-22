<template>
  <project-component v-bind="data">
    <div>
      <p>
        Technologies used:
        <ul>
          <li>React</li>
          <li>Three.js</li>
          <li>Material-UI</li>
          <li>React-three-fiber</li>
        </ul>
      </p>
      <p>
        This project was aimed at learning new technologies including React function components and 3D graphics in the web.
        It was built from scratch within one week.
        The tool can import and export the Wavefront .obj format including vertex colors (similar to MeshLab and MeshMixer).
        After choosing a color and brush size, the 3D mesh can be painted.
        We shoot a ray from the current mouse position into the scene and compute its distance to each vertex. If the vertex
        lies within the defined brush size, its color is changed. The mouse can further be used to rotate, zoom, and pan the camera.
        Additional hotkeys provide fast access to different colors.
        By default, all vertices underneath the cursor change color, e.g. when brushing the face of a human model, the back head is also brushed.
        By disabling "Annotate both sides", only front facing vertices are brushed.
      </p>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
export default {
  components: { ProjectComponent },
  data() {
    return {
      data: {
        title: 'Mesh Painter',
        image: require('../../assets/images/mesh-painter.png'),
        description: `Mesh Painter is a web-based tool that allows for the simple annotation of 3D meshes by painting vertices with a 2D brush.
        Wavefront OBJ files can be imported and exported including vertex colors.
        `,
        github: "https://github.com/cadanox/mesh-painter",
      }
    };
  }
};
</script>

<style scoped></style>

<template>
  <project-component v-bind="data">
    <div>
      <p>
        This slot machine is based on the
        <a href="https://www.godotengine.com">Godot engine</a> and open source.
        <!-- The following parameters can be set:
        <ul>
          <li>array of pictures</li>
          <li>number of reels</li>
          <li>number of pictures per reel</li>
          <li>speed of the animation</li>
          <li>duration of the animation (does not include spin_up and spin_down time)</li>
          <ul>
            <li>if set to 0, runs until stopped by user</li>
          </ul>
          <li>delay between individual reels</li>
        </ul> -->
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
      data: {
        title: "Slot Machine",
        image: require("../../assets/images/slots.png"),
        description: `The Godot engine is up and coming with particular improvements in workflow for 2D games
        compared to big engines like Unity or the Unreal Engine. I started building a slot machine as my first project to
        get used to the general workflow and functionality of the engine. Within a week, the slot machine ran as expected
        and scaled to a proper number of moving pictures.`,
        github: "https://github.com/cadanox/godot-slot-machine"
      }
    };
  }
};
</script>

<style scoped></style>

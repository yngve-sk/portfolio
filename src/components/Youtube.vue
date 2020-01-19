<template>
  <div class="videoWrapper" :class="{ flex: flex }">
    <iframe
      class="video"
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    flex: {
      type: Boolean
    }
  },
  methods: {
    menuButtonClicked() {
      this.$emit("menuButtonClicked");
    }
  }
};
</script>

<style scoped>
.videoWrapper {
  position: relative;
  width: 540px;
  max-width: 100%;
  height: 270px;
}
.videoWrapper.flex {
  width: auto;
  height: auto;
  padding-top: 56.25%;
}

.videoWrapper.flex .video {
  position: absolute;
}
.video {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

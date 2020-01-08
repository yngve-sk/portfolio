<template>
  <v-container id="home-container" v-resize="onResize" pa-0 fluid>
    <v-layout class="wrapper" :style="{width: contentSize.x, height: contentSize.y}">
      <v-flex id="imageContainer" :style="{marginLeft: imageX}">
        <!-- <v-card style="background-color:red" height="100%" width="100%" /> -->
        <img
          id="profileImage"
          :src="`./assets/images/profile-reduced.svg`"
          alt="stylized profile image"
          style="height: 100%"
          @load="onImageLoad($event)"
        />
        <img
          id="profileImageStrokes"
          :src="`./assets/images/profilestrokes_animated.svg?a=`+ random"
          alt="animated edges of profile image"
          style="height: 100%"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
function initProfile() {
  document.querySelector('#profileImage').style.transition = 'none';
  document.querySelector('#profileImage').style.opacity = 0;
  document.querySelector('#profileImageStrokes').style.transition = 'none';
  document.querySelector('#profileImageStrokes').style.opacity = 1;
}
function animateProfile() {
  setTimeout(() => {
    document.querySelector('#profileImage').style.transition = 'opacity 3s';
    document.querySelector('#profileImage').style.opacity = 1;
  }, 2000);
  setTimeout(() => {
    document.querySelector('#profileImageStrokes').style.transition =
      'opacity 3s';
    document.querySelector('#profileImageStrokes').style.opacity = 0;
  }, 3000);
}

export default {
  props: {
    random: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    contentSize: {
      x: 0,
      y: 0
    },
    imageX: 0,
    imageAspectRatio: 0
  }),
  beforeMount() {},
  mounted() {
    initProfile();
    animateProfile();
  },
  beforeUpdate() {
    initProfile();
  },
  updated() {
    animateProfile();
  },
  methods: {
    onImageLoad(event) {
      const img = event.path[0];
      this.imageAspectRatio = img.naturalHeight / img.naturalWidth;
      this.setImagePosition();
    },
    onResize() {
      const toolbar = document.querySelector('.v-toolbar');
      const footer = document.querySelector('.v-footer');
      this.contentSize = {
        x: window.innerWidth,
        y: window.innerHeight - toolbar.offsetHeight - footer.offsetHeight
      };

      this.setImagePosition();
    },
    setImagePosition() {
      const imageWidth = this.contentSize.y / this.imageAspectRatio;
      const space = this.contentSize.x - imageWidth;
      this.imageX = space > 0 ? 0.7 * space : 0;
    }
  }
};
</script>

<style scoped>
#profileImage,
#profileImageStrokes {
  position: absolute;
}

.wrapper {
  background-color: rgb(44, 30, 27);
  /* background-image: linear-gradient(rgb(44, 30, 27), black); */
  /* width: 100%;
  height: 100%; */
}
</style>

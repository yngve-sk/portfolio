<template>
  <v-container id="home-container" v-resize="onResize" pa-0 fluid>
    <div class="wrapper" :style="{width: contentSize.x, height: contentSize.y}">
      <div id="imageContainer" :style="{marginLeft: imageX}">
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
      </div>
      <v-flex
        id="linkWrapper"
        class="d-flex flex-column justify-space-around"
        pl-xs-0
        pl-sm-4
        pl-md-8
        pl-lg-12
      >
        <v-card class="pageLink" v-for="(page, i) in pages" :key="i">
          <v-btn :to="page.link" elevation="24">
            <v-icon class="mr-3">{{page.icon}}</v-icon>{{page.name}}
          </v-btn>
        </v-card>
      </v-flex>
    </div>
  </v-container>
</template>

<script>

function initProfile() {
  let profileImage = document.querySelector('#profileImage');
  let imageStrokes = document.querySelector('#profileImageStrokes');
  profileImage.style.transition = 'none';
  profileImage.style.opacity = 0;
  imageStrokes.style.transition = 'none';
  imageStrokes.style.opacity = 1;
}
function animateProfile() {
  let profileImage = document.querySelector('#profileImage');
  let imageStrokes = document.querySelector('#profileImageStrokes');
  setTimeout(() => {
    profileImage.style.transition = 'opacity 3s';
    profileImage.style.opacity = 1;
  }, 2000);
  setTimeout(() => {
    imageStrokes.style.transition =
      'opacity 3s';
    imageStrokes.style.opacity = 0;
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
    imageAspectRatio: 0,
    pages: [
      {
        name: 'Portfolio',
        icon: 'mdi-book-open-variant',
        link: '/portfolio'
      },
      {
        name: 'Publications',
        icon: 'mdi-newspaper',
        link: '/Publications'
      },
      {
        name: 'Presentation',
        icon: 'mdi-presentation',
        link: '/presentation'
      },
      {
        name: 'About',
        icon: 'mdi-information-variant',
        link: '/about'
      }
    ]
  }),
  mounted() {
    initProfile();
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
  width: 100%;
  height: 100%;
}

#linkWrapper {
  flex: 10;
  position: absolute;
  left: 10%;
  top: 40%;
  height: 30%;
  width: 100%;
}
.pageLink {
  width: fit-content;
  min-width: fit-content;
}

.pageLink .v-btn {
  background-color: #454545 !important;
  border-left: 7px solid rgb(44, 30, 27);
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  position: static !important;
}
</style>

<template>
  <div>HELLO</div>
</template>

<script>
import d3 from 'd3'

export default {
  data() {
    return {

    };
  },
  mounted() {
   console.log(`Init stuff!`)
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

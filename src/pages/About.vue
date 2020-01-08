<template>
  <v-container fluid>
    <v-layout row wrap justify-center pa-6>
      <v-flex>
        <v-card dark>
          <v-card-text>
            Test content
            <ul>
              <li v-for="i in 10" :key="i">{{i}}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {}
};
</script>

<style scoped>
</style>

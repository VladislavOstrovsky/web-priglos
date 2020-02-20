<template>
  <v-container>
    <v-layout
      text-center
      wrap
      style="height: calc(100vh - 24px)"
    >
     
      <logo class="lovestory" />

      <v-flex xs12 mb-4>
        <h1 class="mb-12 wedding-title lovestory animated zoomIn">
          Location
        </h1>
        <v-flex xs12 mb-10 class="location animated zoomIn">
          <v-img
            :src="require('../assets/icons/map.svg')"
            class="map"
            contain
            height="25vh"
          >
          </v-img>
        </v-flex>

        <web-footer />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'WhenWhereHow',
  data () {
    return {
      
    }
  },
  computed: {

  },
  methods: {
  
  },
};
</script>

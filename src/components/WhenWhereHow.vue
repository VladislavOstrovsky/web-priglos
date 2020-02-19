<template>
  <v-container>
    <v-layout
      text-center
      wrap
      style="height: calc(100vh - 24px)"
    >
     
      <v-flex xs12 class="main-logo lovestory">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my lovestory"
          contain
          height="25vh"
          @click="goHome"
        >
        </v-img>
      </v-flex>

      <v-flex xs12 mb-4>
        <h1 class="mb-3 wedding-title lovestory animated zoomIn">
          Location
        </h1>
        <v-flex xs12 mb-10 class="location">
          <v-img
            :src="require('../assets/map.svg')"
            class="map"
            contain
            height="25vh"
          >
          </v-img>
        </v-flex>

        <div class="wedding-links">
          <router-link 
            v-for="link in links"
            :key="link.text"
            class="link"
            :to="{ path: link.url, query: $route.query }"
            >
            {{ link.text }}
          </router-link>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'WhenWhereHow',
  data () {
    return {
      links: [
        { url: '/lovestory', text: 'LoveStory' },
        { url: '/photos', text: 'Photos' },
        { url: '/when-where-how', text: 'When/Where/How' },
        { url: '/gifts', text: 'Gifts' },
      ],
    }
  },
  computed: {

  },
  methods: {
    goHome () {
      window.location.href = `/?q=${this.$route.query.q}`
    }
  },
};
</script>

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

      <v-flex md12 mb-12>
        <h1 class="mb-3 wedding-title lovestory animated zoomIn">
          Photos
        </h1>
        <v-flex class="mb-12">
          <vue-picture-swipe :items="items"></vue-picture-swipe>
        </v-flex>
      </v-flex>

      <v-flex mb-12 class="wedding-links right">
        <router-link 
          v-for="link in links"
          :key="link.text"
          class="link"
          :to="{ path: link.url, query: $route.query }"
          >
          {{ link.text }}
        </router-link>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Photos',
  data () {
    return {
      items: [
        {
          src: `${require(`../assets/foto/gallery/gallery_1.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_1.jpg`)}`,
          w: 600,
          h: 800,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_2.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_2.jpg`)}`,
          w: 600,
          h: 800,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_3.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_3.jpg`)}`,
          w: 800,
          h: 517,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_4.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_4.jpg`)}`,
          w: 800,
          h: 533,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_5.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_5.jpg`)}`,
          w: 600,
          h: 900,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_6.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_6.jpg`)}`,
          w: 800,
          h: 533,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_7.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_7.jpg`)}`,
          w: 600,
          h: 900,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_8.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_8.jpg`)}`,
          w: 1000,
          h: 677,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_9.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_9.jpg`)}`,
          w: 900,
          h: 633,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_10.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_10.jpg`)}`,
          w: 900,
          h: 600,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_11.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_11.jpg`)}`,
          w: 900,
          h: 600,
        },
        {
          src: `${require(`../assets/foto/gallery/gallery_12.jpg`)}`,
          thumbnail: `${require(`../assets/foto/gallery/preview/gallery_12.jpg`)}`,
          w: 600,
          h: 900,
        }
      ],
      links: [
        { url: '/lovestory', text: 'LoveStory' },
        { url: '/photos', text: 'Photos' },
        { url: '/location', text: 'When/Where/How' },
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

<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <logo class="lovestory" />

      <v-flex md12 mb-12>
        <header-title text="Фото" />

        <v-flex class="mb-12">
          <vue-picture-swipe :items="items"></vue-picture-swipe>
        </v-flex>
      </v-flex>

      <web-footer />

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
      ]
    }
  },
};
</script>

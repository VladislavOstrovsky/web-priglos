<template>
  <v-container>
    <v-layout
      text-center
      wrap
      style="height: calc(100vh - 24px)"
    >
     
      <logo class="lovestory" />

      <v-flex xs12>
        <h1 class="mb-12 wedding-title lovestory animated zoomIn">
          Gifts
        </h1>
        <v-flex xs12 class="flex-column location animated zoomIn">
          <v-img
            :src="require('../assets/icons/gift.svg')"
            class="map"
            contain
            height="15vh"
          >
          </v-img>
          <p class="gifts-title">
            Не ломайте голову над подарком, мы будем очень рады вашему вкладу в бюджет молодой семьи
          </p>
        </v-flex>

        <web-footer />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Gifts',
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

<style lang="scss">
  .location {
    margin-bottom: 20px;
  }

  .gifts-title {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 50px;
  }
</style>

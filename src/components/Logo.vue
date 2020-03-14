<template>
  <v-flex xs12 class="main-logo lovestory">
    <v-img
      :src="require('../assets/logo.png')"
      class="my lovestory"
      contain
      height="20vh"
      @click="goHome"
    >
    </v-img>
  </v-flex>
</template>

<script>
export default {
  name: 'logo',
  methods: {
    goHome () {
      window.location.href = `/?q=${this.$route.query.q || 'guest'}`
    }
  },
}
</script>

<style lang="scss">

.main-logo {
  align-self: center;
  position: relative;

  .v-image__image {
    background-position: center bottom !important;
  }

  &.lovestory {
    align-self: flex-start;
  }

  @media only screen and (max-width: 600px) {

  }

  .my {
    position: relative;
    margin: 0 auto;
    width: 225px;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
      width: 140px;
    }

    &.lovestory {
      margin: 0 0 0 auto;

      @media only screen and (max-width: 1024px) {
        margin: 150px auto 0;
      }

      @media only screen and (max-width: 600px) {
        margin: 40px auto;
      }

      @media only screen and (max-width: 320px) {
        margin: 20px auto;
      }
    }

    &:hover {
      -webkit-animation: swing 1s;
      animation: swing 1s;
    }
  }
}
</style>

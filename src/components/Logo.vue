<template>
  <v-flex xs12 class="main-logo lovestory">
    <v-img
      :src="require('../assets/logo.png')"
      class="my lovestory"
      contain
      height="25vh"
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
    align-self: flex-end;
  }

  .my {
    position: relative;
    margin: 0 auto;
    width: 225px;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      width: 130px;
    }

    &.lovestory {
      margin: 0 0 0 auto;

      @media only screen and (max-width: 600px) {
        margin: 0 auto;
      }
    }

    &:hover {
      -webkit-animation: swing 1s;
      animation: swing 1s;
    }
  }
}
</style>
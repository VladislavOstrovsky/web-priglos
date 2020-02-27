<template>
  <v-flex class="wedding-links">
    <router-link 
      v-for="link in links"
      :key="link.text"
      class="link"
      :to="{ path: link.url, query: $route.query }"
      >
      {{ link.text }}
    </router-link>
  </v-flex>
</template>

<script>
export default {
  name: 'web-footer',
  data () {
    return {
      links: [
        { url: '/lovestory', text: 'LoveStory' },
        { url: '/photos', text: 'Photos' },
        { url: '/location', text: 'Location' },
        { url: '/info', text: 'Info' },
      ]
    }
  }
}
</script>

<style lang="scss">
.wedding-links {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 2px;

  .link {
    margin-left: 25px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 100px;
      font-size: 32px;
      margin-left: 20px;
    }

    @media only screen and (max-width: 320px) {
      font-size: 25px;
      margin-bottom: 150px;
      margin-left: 8px;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    color: #3F5441 !important;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .router-link-exact-active {
    text-decoration: underline;
  }
}

.theme--light.v-footer {
  background-color: #fff !important;
}
</style>
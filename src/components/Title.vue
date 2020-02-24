<template lang="html">
  <v-flex mb-12>
    <h1 class="mb-2 tips-title animated zoomIn">
      {{ text }}
    </h1>
    <v-img
      :src="require('../assets/icons/tips_icon.svg')"
      class="dekor"
      contain
      height="2vh"
    ></v-img>
  </v-flex>
</template>

<script>
export default {
  name: 'header-title',
  props: {
    text: String
  }
}
</script>

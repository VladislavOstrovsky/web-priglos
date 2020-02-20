<template>
  <v-container>
    <v-layout
      text-center
      wrap
      class="main"
      style="height: calc(100vh - 60px)"
    >
      <logo />

      <v-flex xs12 mb-4 class="animated zoomIn">
        <h1 class="wedding-title mb-4">
          Welcome to Wedding
        </h1>

        <div class="wedding-names">
          <span v-for="name in routeNames" :key=name.id>
            {{name.text}}
          </span>
        </div>

        <web-footer />
        
      </v-flex>
    </v-layout>
    
    <div class="avatar man animated flipInX">
      <div class="avatar-image" @click="showMoreInfo(true)">
        <v-img 
          :src="require('../assets/foto/vlad.png')"
          contain
        ></v-img>
      </div>
      <div class="avatar-info desktop groom">
        Жених. Улыбчивый программист. Родом из Алтайского края, с.Каяушка. Люблю футбол, баскетбол и турники)
        <div class="avatar-info__icon">
          <i v-for="item in socSetVlad"
             :key=item.value
             :title=item.value
             :class=item.value
             @click=openLink(item.url)></i>
        </div>
      </div>
    </div>

    <div class="avatar girl animated flipInX">
      <div class="avatar-image" @click="showMoreInfo()">
        <v-img
          :src="require('../assets/foto/kate.png')"
          contain
        ></v-img>
      </div>
      <div class="avatar-info desktop bride">
        Невеста. Красотка. Родом из Алтайского края, с.Первомайское. Люблю танцы, историю, чтение и вкусно покушать)
        <div class="avatar-info__icon">
          <i v-for="item in socSetKate"
             :key=item.value
             :title=item.value
             :class=item.value
             @click=openLink(item.url)></i>
        </div>
      </div>
    </div>

    <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="grey lighten-4"
            primary-title
          >
          {{ man ? 'Жених' : 'Невеста' }}
            
          </v-card-title>

          <div class="avatar-info dialog white">
            {{ man ? 'Жених. Улыбчивый программист. Родом из Алтайского края, с.Родино. Люблю футбол, баскетбол и турники)' : 'Невеста. Красотка. Родом из Алтайского края, с.Первомайское. Люблю танцы, историю, чтение и вкусно покушать)' }}
            <div class="avatar-info__icon">
              <i v-for="item in socSetVlad"
                 :key=item.value
                 :class=item.value
                 @click=openLink(item.url)>
              </i>
            </div>
          </div>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      dialog: false,
      man: false,
      socSetVlad: [
        { value: 'instagram', url: 'https://www.instagram.com/ostrovsky_vlad/' },
        { value: 'vkontakte', url: 'https://vk.com/ostrovsky_vlad' },
      ],
      socSetKate: [
        { value: 'instagram', url: 'https://www.instagram.com/panteleevakatya/' },
        { value: 'vkontakte', url: 'https://vk.com/id89905678' },
      ],
      names: [
        { id: 1, key: 9628069923, text: 'Дорогие Владислав и Екатерина' },
        { id: 2, key: 9628069920, text: 'Дорогие Дарья и Александра' },
        { id: 3, key: 9095053732, text: 'Дорогие Елена и Юрий Островские' },
        { id: 4, key: 9628069924, text: 'Дорогие Юлия и Алексей Пантелеевы' },
        { id: 5, key: 9628069925, text: 'Дорогие Антон и Мария' },
        { id: 6, key: 9628069926, text: 'Дорогие Антон и Соня' },
        { id: 7, key: 9132509895, text: 'Дорогие Дмитрий и Оксана' },
        { id: 8, key: 9132114313, text: 'Дорогой Никита' },
      ],
    }
  },
  computed: {
    routeNameArray () {
      return this.$route.query.q || ''
    },
    routeNames () {
      const filterNames = this.names.filter(x => this.routeNameArray.includes(x.key))
      return filterNames
    }
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
    showMoreInfo (man) {
      if (window.innerWidth < 600) {
        this.dialog = true
        return man ? this.man = true : this.man = false
      }
    }
  },
};
</script>

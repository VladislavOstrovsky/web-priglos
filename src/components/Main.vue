<template>
  <v-container>
    <v-layout
      text-center
      wrap
      class="main"
      style="height: calc(100vh - 60px)"
    >
      <v-flex xs12 class="main-logo">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my"
          contain
        >
        </v-img>
      </v-flex>

      <v-flex xs12 mb-4 class="animated zoomIn">
        <h1 class="wedding-title mb-4">
          Welcome to Wedding
        </h1>
        <div class="wedding-names">
          Dear
          <span v-for="name in routeNames" :key=name.id>
            {{name.text}}
          </span>
        </div>
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
    
    <div class="avatar man animated flipInX">
      <div class="avatar-image" @click="showMoreInfo(true)">
        <v-img 
          :src="require('../assets/foto/vlad.png')"
          contain
        ></v-img>
      </div>
      <div class="avatar-info desktop teal lighten-5">
        Жених. Улыбчивый программист. Родом из Алтайского края, с.Каяушка. Люблю футбол, баскетбол и турники)
        <div class="avatar-info__icon">
          <i v-for="item in socSetVlad"
              :key=item.value
              :title=item.value
              :class=item.className
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
      <div class="avatar-info desktop teal lighten-5">
        Невеста. Красотка. Родом из Алтайского края, с.Первомайское. Люблю танцы, историю, чтение и вкусно покушать)
        <div class="avatar-info__icon">
          <i v-for="item in socSetKate"
              :key=item.value
              :title=item.value
              :class=item.className
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
            class="headline grey lighten-4"
            primary-title
          >
          {{ man ? 'Жених' : 'Невеста' }}
            
          </v-card-title>

          <div class="avatar-info dialog white">
            {{ man ? 'Жених. Улыбчивый программист. Родом из Алтайского края, с.Каяушка. Люблю футбол, баскетбол и турники)' : 'Невеста. Красотка. Родом из Алтайского края, с.Первомайское. Люблю танцы, историю, чтение и вкусно покушать)' }}
            <div class="avatar-info__icon">
              <i v-for="item in socSetVlad"
                  :key=item.value
                  :class=item.className
                  @click=openLink(item.url)></i>
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
        { value: 'instagram', url: 'https://www.instagram.com/ostrovsky_vlad/', className: 'fab fa-instagram' },
        { value: 'vkontakte', url: 'https://vk.com/ostrovsky_vlad', className: 'fab fa-vk' },
      ],
      socSetKate: [
        { value: 'instagram', url: 'https://www.instagram.com/panteleevakatya/', className: 'fab fa-instagram' },
        { value: 'vkontakte', url: 'https://vk.com/id89905678', className: 'fab fa-vk' },
      ],
      links: [
        { url: '/lovestory', text: 'LoveStory' },
        { url: '/photos', text: 'Photos' },
        { url: '/when-where-how', text: 'When/Where/How' },
        { url: '/gifts', text: 'Gifts' },
      ],
      names: [
        { id: 1, key: 89628069923, text: 'Vladisalav and Ekaterina' },
        { id: 2, key: 89628069920, text: 'Daria and Alexandra' },
        { id: 3, key: 89095053732, text: 'Elena and Yuriy' },
        { id: 4, key: 89628069924, text: 'Julia and Alexey' },
        { id: 5, key: 89628069925, text: 'Anton and Maria' },
        { id: 6, key: 89628069926, text: 'Anton and Sonya' },
        { id: 7, key: 89132509895, text: 'Dmitriy and Oksana' },
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

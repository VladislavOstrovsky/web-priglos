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
        <h1 class="wedding-title">
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
        Жених. Привет! Если вы заглянули на эту страничку, то мы непременно ждем Вас 7 августа 2020 года на нашем первом семейном празднике!
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
        Невеста. Привет! Здесь, уважаемые гости, вы сможете найти ответы на многие вопросы и узнать о нашей паре чуточку больше. Нажимайме на все значки/надписи/логотипы. Ну что? Поехали?
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
            {{ man ? 'Жених. Привет! Если вы заглянули на эту страничку, то мы непременно ждем Вас 7 августа 2020 года на нашем первом семейном празднике!' : 'Невеста. Привет! Здесь, уважаемые гости, вы сможете найти ответы на многие вопросы и узнать о нашей паре чуточку больше. Нажимайме на все значки/надписи/логотипы. Ну что? Поехали?' }}
            <div v-if="man" class="avatar-info__icon">
              <i v-for="item in socSetVlad"
                 :key=item.value
                 :class=item.value
                 @click=openLink(item.url)>
              </i>
            </div>
            <div v-else class="avatar-info__icon">
              <i v-for="item in socSetKate"
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
        { id: 0, key: 'guest', text: 'Дорогой Гость' },
        { id: 1, key: 9967097639, text: 'Любимые Мамочка, Папочка и Алёнушка!' },
        { id: 2, key: 9237991118, text: 'Любимые бабуля и дедуля!' },
        { id: 3, key: 9016458019, text: 'Любимые бабуля и дедуля!' },
        { id: 4, key: 9236442877, text: 'Коля, Юля и Дашуля!' },
        { id: 5, key: 9133674509, text: 'Марина, Дима и Таисия Дмитриевна!' },
        { id: 6, key: 9609580570, text: 'Ольга и Виктор!' },
        { id: 7, key: 9635344750, text: 'Никита и Даша!' },
        { id: 8, key: 9284175855, text: 'Нина Николаевна и Анатолий Васильевич!' },
        { id: 9, key: 9132702023, text: 'Александр и Наталья!' },
        { id: 10, key: 9133698958, text: 'Ольга Леонидовна!' },
        { id: 11, key: 9635171671, text: 'Алексей, Светлана, Катюша и Марина!' },
        { id: 12, key: 491625705381, text: 'Александр, Анатонина, Владимир и Екатерина!' },
        { id: 13, key: 4915785876671, text: 'Алексей и Даша!' },
        { id: 14, key: 9021428241, text: 'Женя, Ира, Вова, Ксюша и баба Галя' },
        { id: 15, key: 9136167917, text: 'Сергей, Антонина, Алёна и Ирина!' },
        { id: 16, key: 9137740629, text: 'Серёжа и Яна!' },
        { id: 17, key: 9237285869, text: 'Юля и Александр!' },
        { id: 18, key: 9992370205, text: 'Владимир, Светлана и Денис!' },
        { id: 19, key: 9095053732, text: 'Любимые Мамочка, Папочка и Дашуля!' },
        { id: 20, key: 9095065108, text: 'Сергей, Наталья и Дима!' },
        { id: 21, key: 9235645039, text: 'Георгий и Зоя!' },
        { id: 22, key: 9237198520, text: 'Пётр!' },
        { id: 23, key: 9969513829, text: 'Екатерина!' },
        { id: 24, key: 9635337744, text: 'Александра!' },
        { id: 25, key: 9132626697, text: 'Алёнушка!' },
        { id: 26, key: 9627939208, text: 'Саша и Алёна!' },
        { id: 27, key: 9214360955, text: 'Аннечка!' },
        { id: 28, key: 9675923752, text: 'Саша!' },
        { id: 29, key: 9069664243, text: 'Антон и Соня!' },
        { id: 30, key: 9237499659, text: 'Иван!' },
        { id: 31, key: 9831779415, text: 'Дима и Таня!' },
        { id: 32, key: 9293939211, text: 'Антон и Маша!' },
        { id: 33, key: 9969518328, text: 'Есжан!' },
        { id: 34, key: 9130884613, text: 'Владимир и Наталья!' },
        { id: 35, key: 9132509895, text: 'Дима и Оксана!' },
        { id: 36, key: 9059838833, text: 'Павел и Кристина!' },
        { id: 37, key: 9132114313, text: 'Никита!' },
        { id: 38, key: 9237909018, text: 'Марина и Виктор!' },
        { id: 39, key: 9293967372, text: 'Сергей, Лариса и Екатерина!' },
        { id: 40, key: 9236651660, text: 'Андрей и Елена!' },
        { id: 41, key: 9132101880, text: 'Елена Викторовна!' },
        { id: 42, key: 9059811918, text: 'Любимый партнерский отдел!' },
        { id: 43, key: 9160983383, text: 'Татьяна и Никита!' },
      ],
    }
  },
  computed: {
    routeNameArray () {
      return this.$route.query.q || 'guest'
    },
    routeNames () {
      return this.names.filter(x => this.routeNameArray.includes(x.key))
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

<template>
  <v-container class="page-love-story">
    <v-layout
      text-center
      wrap
    >
      <logo class="lovestory" />

      <v-flex xs12 mb-12>
        <header-title text="Love Story" />
        
        <v-timeline>
          <v-timeline-item
            v-for="(item, index) in loveHistory"
            :class="{'animated fadeInLeft': index %2 != 0, 'animated fadeInRight': index %2 == 0 }"
            :key="index"
          >
            <template v-slot:icon>
              <v-avatar min-width="60px" height="60px">
                <v-img :src="item.src" cover @click="openDialog(item.id, item.title)"></v-img>
              </v-avatar>
            </template>
            <span slot="opposite">
              {{ item.title }}
            </span>
            <v-card class="elevation-3" color="white">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text v-html="item.description"></v-card-text>
            </v-card>
          </v-timeline-item>
          
        </v-timeline>
      </v-flex>

      <web-footer />

      <v-dialog
        v-model="dialog"
        v-if="imageDialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="grey lighten-4"
            primary-title
          >
            {{ dialogTitle }}
          </v-card-title>

          <v-img :src="require(`../assets/foto/lovestory/love_${imageSrc}.jpg`)"
                 ref="imageDialog"
                 aspect-ratio="1"
                 cover
                 width="100%"></v-img>
        </v-card>
      </v-dialog>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LoveStory',
  data () {
    return {
      dialog: false,
      imageSrc: '',
      dialogTitle: '',
      loveHistory: [
        {
          id: 1,
          src: `${require(`@/assets/foto/lovestory/love_1.jpg`)}`,
          title: 'Мы родились',
          description: 'Жених родился 16 января 1996 года. Невеста 20 мая 1997 года'
        },
        {
          id: 2,
          src: `${require(`@/assets/foto/lovestory/love_2.jpg`)}`,
          title: 'Студенческое правительство',
          description: 'Мы встретились случайно, я был тренером, она участницей. Искра, буря, эмоции <i class="far fa-heart"></i>'
        },
        {
          id: 3,
          src: `${require(`@/assets/foto/lovestory/love_3.jpg`)}`,
          title: 'Запуск небесного фонарика',
          description: 'На пол года нашего знакомства мы запустили небесный фонарик'
        },
        {
          id: 4,
          src: `${require(`@/assets/foto/lovestory/love_4.jpg`)}`,
          title: 'Поездка в Ростов-на-Дону',
          description: 'Мы отправились на Всероссийскую школу актива «Лидер 21 века»'
        },
        {
          id: 5,
          src: `${require(`@/assets/foto/lovestory/love_5.jpg`)}`,
          title: '19 Октября 2019. Предложение',
          description: 'Действие происходило в виде квеста, где Катя должна была заработать 8 цифр, чтобы открыть шкатулку. Подробнее во вкладке "Фото"'
        },
        {
          id: 6,
          src: `${require(`@/assets/foto/lovestory/love_6.jpg`)}`,
          title: 'Поездка в Питер',
          description: 'Мы решили отправиться в Санкт-Петербург на Новый год'
        },
      ],
    }
  },
  computed: {
    imageDialog () {
      return this.imageSrc
    }
  },
  methods: {
    async openDialog (id, title) {
      this.imageSrc = id
      this.dialogTitle = title
      this.dialog = true
    },
  }
};
</script>

<style lang="scss">

.theme--light.v-timeline {
  .v-timeline-item__dot {
    background: #ECD1D8;
  }
}

.v-timeline {
  font-family: 'Amalfi';
  margin-bottom: 50px;

  .v-timeline-item__opposite {
    font-size: 2.5rem !important;
    line-height: 1 !important;
    letter-spacing: 1px !important;
  }

  .v-timeline-item__body {
    @media only screen and (max-width: 600px) {
      text-align: left;
    }
  }

  .v-avatar {
    cursor: pointer;
    transition: all 300ms ease-in-out;


    &:hover {
      transition: all 300ms ease-in-out;
      transform: rotate(5deg);
    }
  }
}
</style>

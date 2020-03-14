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
          title: 'Детство',
          description: '<b>Невеста</b>. ' +
            'Родилась 20 мая 1997 года, в семье молодых специалистов. Папа – инженер, мама – экономист. ' +
            'Всё свое веселое и беззаботное детство провела в селе Первомайском, Первомайского района.<br><br>' +
            '<b>Жених</b>. Появился на свет 16 января 1996 года в селе Каяушка Родинского района. Мама – учительница, папа – участковый. Младший брат в семье, поэтому со старшей сестрой Дашей ему никогда не бывает скучно.'
        },
        {
          id: 2,
          src: `${require(`@/assets/foto/lovestory/love_2.jpg`)}`,
          title: 'За долго до нашей встречи',
          description: '<b>Невеста</b>. ' +
            'Никогда не сидела на месте. Либо много дел (уроки, кружки), либо передряги, от этого ее редко можно было найти дома. Но при этом училась на <b>отлично</b> и радовала родителей своими достижениями. Занималась танцами, в музыкальной школе, организовывала мероприятия в школе, ездила в летние лагеря. Закончила школу с золотой медалью. <br><br>' +
            '<b>Жених</b>. С самого детства имеет страсть к футболу и турникам. Был лучшим пенальтистом в команде <b>ФК Родино</b>. Помимо этого, с детства любил точные науки: математику, физику, информатику, это и предопределило его будущую профессию.'
        },
        {
          id: 3,
          src: `${require(`@/assets/foto/lovestory/love_3.jpg`)}`,
          title: 'Университет',
          description: '<b>Невеста</b>. ' +
            'Поступила в Алтайский государственный технический университет им. И.И. Ползунова в 2015 году на специальность «Экономическая безопасность». Была активистом в Студенческом правительстве и как-то раз решила заполнить анкету на Выездную Школу Актива Студенческого правительства. <br><br>' +
            '<b>Жених</b>. Поступил в Алтайский государственный технический университет им. И.И. Ползунова в 2013 году на специальность «Информатика, вычислительная техника». Первые 2 года играл в компьютерные игры, а потом решил занять активную позицию и стал тренером-куратором Студенческого правительства.'
        },
        {
          id: 4,
          src: `${require(`@/assets/foto/lovestory/love_4.jpg`)}`,
          title: 'Встреча',
          description: '<b>Невеста</b>. ' +
            'Прошла отбор на Выездную Школу Актива и приехала в лагерь «Кристалл» 20 ноября 2015 года. Попала в команду, где наставниками были Владислав и Александра.<br><br>' +
            '<b>Жених</b>. В команде, наставником которой был наш жених, появилась интересная девушка, которая не совсем любила соблюдать режим, поэтому как-то раз пришлось написать ей: «Иди спать, крутая!» Вернувшись домой, они продолжили узнавать друг друга и проводить время вместе.'
        },
        {
          id: 5,
          src: `${require(`@/assets/foto/lovestory/love_5.jpg`)}`,
          title: 'Вместе уже 4.5 года',
          description: '<b>Невеста</b>. ' +
            'Я люблю его, с ним тепло, спокойно и уютно. Я очень рада, что 2015 год, Политех и Студенческое правительство подарило мне Влада.<br><br>' +
            '<b>Жених</b>. Невероятное везение, что я встретил такую прекрасную девушку, как Катя, она понимающая, очень своенравная и просто кайфовая. Люблю.'
        },
        {
          id: 6,
          src: `${require(`@/assets/foto/lovestory/love_6.jpg`)}`,
          title: 'Предложение',
          description: '<b>Невеста</b>. ' +
            'Это было 19 октября 2019 года. Я как обычно поехала в субботу на пару к 8:15. Была в своем растянутом, но очень удобном свитере и не выспавшаяся. В это утро у меня было приятное предчувствие, так как накануне Влад немного себя рассекретил, но от этого было еще более волнительно.<br><br>' +
            '<b>Жених</b>. Не знаю, почему я выбрал именно такую дату - 19 октября. Наверно, потому что сильно переживал как всё пройдет. Долго вынашивал в себе идеи, в итоге остановился на квесте, в котором Кате предстояло заполучить 8 цифр, пройдя определенные испытания, например назвать имя отчество моих родителей, мой номер телефона и что я подарил ей на день рождения, в первый год нашего знакомства) После чего, она должна составить из этих 8-ми цифр код-пароль от шкатулки(см. раздел «Фото»), в которой лежит свёрнутый список с прекрасными словами и в конце написано «Обернись». Сзади, конечно же был я, на фоне играет наша песня и я произношу эти заветные слова: <b>Ты выйдешь за меня?</b>'
        },
        {
          id: 7,
          src: `${require(`@/assets/foto/lovestory/love_7.jpg`)}`,
          title: '7 августа 2020 года',
          description: '<b>Невеста</b>. ' +
            'В этот день, мы создадим свою семью, заложим начало истории нашей семьи и семейным ценностям, традициям. Поэтому нам бы очень хотелось, чтобы в этот волнительный день, все самые близкие были с нами рядом и поддержали нас.<br><br>' +
            '<b>Жених</b>. Этот день мы хотим разделить с самыми близкими и родными людьми!'
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
  font-family: 'Amalfi', serif;
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

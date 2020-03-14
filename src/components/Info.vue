<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <logo class="lovestory" />

      <v-flex xs12 class="tips">
        <header-title text="Подсказки и пожелания" />

        <v-flex xs12 mb-12 class="tips-content animated zoomIn">
          <div>
            Не ломайте голову над подарком, мы будем очень рады вашему вкладу в бюджет молодой семьи
          </div>
          <div>
            По всем вопросам в день торжества вы можете обратиться к нашему координатору:
          </div>
          <div class="tips-content--coordinator">
            Ксения <a style="color: #3e5340;" href="tel:+79836016630">+7(983)-601-6630</a>
          </div>
          <v-img
            :src="require('../assets/icons/tips_icon_plane.svg')"
            class="dekor"
            contain
            height="6vh"
          ></v-img>
          <div>
            Наш день в Instagram:
          </div>
          <div class="tips-content--hashtag">
            ЖенитьбаОстровских
          </div>
          <div>
            мы будем рады, если при выборе наряда вы поддержите цветовую гамму нашей свадьбы:
          </div>
          <div class="tips-content--colors">
            <div
              v-for="color in colors"
              :key=color.id
              class="tips-content--colors-item"
              :style="{ backgroundColor: color.rgb}"
              :title="color.title">
            </div>
          </div>
        </v-flex>

        <web-footer />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Info',
  data () {
    return {
      colors: [
        { id: 1, rgb: 'rgb(62, 83, 64)', text: 'green', title: 'Зелёный' },
        { id: 2, rgb: 'rgb(135, 159, 129)', text: 'light-green', title: 'Светло-зелёный' },
        { id: 3, rgb: 'rgb(150, 150, 150)', text: 'gray', title: 'Серый' },
        { id: 4, rgb: 'rgb(215, 213, 214)', text: 'light-grey', title: 'Светло-серый' },
        { id: 5, rgb: 'rgb(242, 232, 230)', text: 'soft-peach', title: 'Персиковый' },
        { id: 6, rgb: 'rgb(239, 209, 202)', text: 'almond', title: 'Миндальный' },
      ]
    }
  },
};
</script>

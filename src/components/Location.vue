<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <logo class="lovestory" />

      <v-flex xs12 mb-4>
        <header-title text="Местоположение" />

        <v-flex xs12 mb-10 class="d-inline-flex location animated zoomIn">
          <div class="location--image">
            <v-img
              v-if="show === 1"
              :src="require('../assets/location-dvorec.png')"
              class="location--icon"
              cover
            >
            </v-img>

            <v-img
              v-else
              :src="require('../assets/location-serebro.jpg')"
              class="location--icon"
              cover
            >
            </v-img>

            <div v-if="show === 2">
              <div class="location--image__title">
                Белый шатёр
              </div>
              Раздольная, 22
            </div>
          </div>

          <div class="location--content">
            <div v-if="show === 1">
              <div class="location--content__title">
                Церемония бракосочетания
              </div>
              14 часов 15 минут <br />
              <div class="location--content__title">
                Дворец бракосочетания
              </div>
              Проспект Ленина, 11
            </div>
            <div v-else>
              <div class="location--content__title">
                Сбор гостей
              </div>
              16 часов<br />
              <div class="location--content__description">
                В это время будут работать интерактивные зоны, где можно будет поиграть,<br /> пофотографироваться и даже позаниматься рукоделием.
              </div>
              <div class="location--content__title">
                Праздничный банкет
              </div>
              16 часов 30 минут <br />
            </div>
          </div>
        </v-flex>

        <v-flex mb-12>
          <v-stepper non-linear class="location-wrap">
            <v-stepper-header>
              <v-stepper-step
                color="teal darken-4"
                editable
                :step="el"
                @click="show = 1"
              >
                Церемония бракосочетания
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step
                color="teal darken-4"
                editable
                :step="el + 1"
                @click="show = 2"
              >
                Праздничный банкет
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-flex>
        <web-footer />
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Location',
  data () {
    return {
      el: 1,
      show: 1
    }
  },
};
</script>

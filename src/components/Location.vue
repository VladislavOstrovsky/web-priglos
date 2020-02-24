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
          <v-img
            :src="require('../assets/icons/map.svg')"
            class="location--icon"
            contain
          >
          </v-img>

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
                Праздничный банкет
              </div>
              16 часов 30 минут <br />
              <div class="location--content__title">
                Белый шатёр
              </div>
              Раздольная, 22
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

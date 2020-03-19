<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: Amalfi;
  src: url('assets/fonts/Amalfi-Regular.otf');
}
@font-face {
  font-family: AmalfiCoast;
  src: url('assets/fonts/Amalfi-Coast.ttf');
}
@font-face {
  font-family: BlacktearScript;
  src: url('assets/fonts/BlacktearScript.ttf');
}

.v-application {
  background: transparent;

  &.theme--light {
    background: transparent !important;

    @media only screen and (max-width: 768px) {
      background: white !important;
    }

    .v-card {
      background-color: #f3eaeb;
    }
  }
}
body {
  background: url('assets/bg-main-flowers.jpg') no-repeat;
  background-size: contain;
  background-attachment: fixed;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    background: white;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 159px;
      background: url('assets/bg-main-mobile-top.jpg') no-repeat center;
    }
  }
}
#app {
  font-family: 'Amalfi', serif;
  text-align: center;
  color: #2B2A29;

  @media only screen and (max-width: 768px) {
    &:before {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 183px;
      background: url('assets/bg-main-mobile-bottom.jpg') no-repeat;
    }
  }
}

.page-love-story {
  @media only screen and (max-width: 600px) {
    background-size: cover;
    background-attachment: scroll;
  }
}

h1 {
  font-family: 'Amalfi', serif;
  margin-bottom: 50px;
}

.avatar {
  position: absolute;
  bottom: 5%;
  max-width: 350px;
  width: auto;
  font-size: 17px;
  display: grid;

  .avatar-image {
    margin: 0 auto;
    width: 250px;
    height: 250px;
    box-shadow: 0 4px 10px 0 rgba(63, 84, 65, .5);
    border-radius: 100%;
    transition: all 0.3s;

    &:hover {
      animation: bounce 1s;
    }

    @media only screen and (max-width: 1400px) {
      width: 170px;
      height: 170px;
    }

    @media only screen and (max-width: 1100px) {
      width: 150px;
      height: 150px;
    }

    @media only screen and (max-width: 600px) {
      width: 85px;
      height: 85px;
    }
  }

  &.girl {
    right: 50px;
  }

  &.man {
    left: 50px;
  }
}

.avatar-info {
  font-family: 'Amalfi', serif;
  font-weight: 500;
  padding: 20px;
  font-size: 45px;
  line-height: 1;
  text-align: left;
  position: relative;

  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }

  &.desktop {
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 10px 0 rgba(63, 84, 65, .5);

    &:hover {
      &.groom {
        &:after {
          animation: jello 1s;
        }
      }

      &.bride {
        &:after {
          animation: swing 1s;
        }
      }
    }

    &.groom {
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        background: url('assets/icons/grow.svg') center no-repeat;
      }
    }

    &.bride {
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        background: url('assets/icons/bride.svg') center no-repeat;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  &.dialog {
    display: block;
  }

  &__icon {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;

    .vkontakte {
      background: url('assets/icons/vk.svg') center no-repeat;
    }

    .instagram {
      background: url('assets/icons/instagram.svg') center no-repeat;
    }

    i {
      cursor: pointer;
      margin-left: 7px;
      width: 20px;
      height: 20px;
      background-size: contain;

      &:hover {
        animation: jello 1s;
      }
    }
  }
}

.wedding-title {
  font-family: 'AmalfiCoast', serif;
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    font-size: 25px;
    margin: 0 0 40px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 20px;
    margin: 30px 0;
  }
}

.wedding-names {
  font-family: 'BlacktearScript', serif;
  font-size: 80px;
  margin-bottom: 50px;
  line-height: 1.3;
  letter-spacing: 2px;
  padding: 0 155px;

  @media only screen and (max-width: 1400px) {
    font-size: 70px;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 65px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 36px;
    padding: 0px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 28px;
  }
}

.v-dialog__container {
  display: unset;
}

.v-card__title {
  color: #3F5441;
  font-weight: 500;
  font-family: 'Amalfi', serif;
  font-size: 3rem !important;

  @media only screen and (max-width: 600px) {
    padding: 10px !important;
    line-height: 1.5rem !important;
    word-break: break-word !important;
    font-size: 2.5rem !important;
  }
}

.v-card__text {
  text-align: left;
  font-size: 2.3rem !important;
  color: #000;
  letter-spacing: 1px !important;

  @media only screen and (max-width: 600px) {
    font-size: 2rem !important;
    padding: 10px !important;
  }
}

.location {
  text-align: left;
  font-size: 3rem;
  align-items: center;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    flex-direction: column;
  }

  &--icon {
    width: 250px;
  }

  &--image {
    font-family: 'BlacktearScript', serif;

    .v-image__image {
      border-radius: 7px;
    }

    @media only screen and (max-width: 600px) {
      text-align: center;
    }

    &__title {
      font-family: 'Amalfi', serif;

      @media only screen and (max-width: 600px) {
        font-size: 3rem;
        line-height: 1;
      }
    }
  }

  &--content {
    margin-left: 80px;
    font-family: 'BlacktearScript', serif;

    @media only screen and (max-width: 600px) {
      width: 100vw;
      text-align: center;
      margin-left: 0;
    }

    &__title {
      font-family: 'Amalfi', serif;

      @media only screen and (max-width: 600px) {
        font-size: 3rem;
        line-height: 1;
      }
    }

    &__description {
      font-family: 'Amalfi', serif;
      font-size: 2.5rem;
      font-style: italic;
      font-weight: lighter;
      line-height: 0.75;

      @media only screen and (max-width: 600px) {
      }
    }
  }
}

.location-wrap {
  font-size: 3rem;
  line-height: 1;

  .v-stepper__header {
    height: auto;
  }

  .v-stepper__step__step {
    width: 44px;
    height: 44px;
    font-size: 2.5rem;
  }
}

.tips-title {
  font-size: 4rem;
  line-height: 1;
  font-weight: normal;
  font-family: 'BlacktearScript', serif;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
}

.tips-content {
  font-family: 'Book Antiqua', serif;
  text-transform: uppercase;

  div {
    margin-bottom: 20px;
  }

  &--coordinator {
    font-style: italic;
    text-transform: none;
  }

  &--hashtag {
    font-size: 2.7rem;
    line-height: 1;
    font-family: 'BlacktearScript', serif;
    text-transform: none;

    @media only screen and (max-width: 320px) {
      font-size: 2.2rem;
    }

    &::before {
      content: '#';
      font-size: 4rem;
    }
  }

  &--colors {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &-item {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      margin-left: 10px;

      &.main-green {
        background: url('assets/icons/colors/main-green.svg') center no-repeat;
      }

      &.lighten-green {
        background: url('assets/icons/colors/lighten-green.svg') center no-repeat;
      }

      &.gray {
        background: url('assets/icons/colors/gray.svg') center no-repeat;
      }

      &.light-grey {
        background: url('assets/icons/colors/light-grey.svg') center no-repeat;
      }

      &.soft-peach {
        background: url('assets/icons/colors/soft-peach.svg') center no-repeat;
      }

      &.almond {
        background: url('assets/icons/colors/almond.svg') center no-repeat;
      }

      @media only screen and (max-width: 600px) {
        width: 45px;
        height: 45px;
      }

      @media only screen and (max-width: 320px) {
        width: 39px;
        height: 39px;
      }
    }
  }
}

</style>

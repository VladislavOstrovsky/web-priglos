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
  font-family: ModernSans;
  src: url('assets/fonts/ModernSans-Light.otf');
}
@font-face {
  font-family: BlacktearScript;
  src: url('assets/fonts/BlacktearScript.ttf');
}
@font-face {
  font-family: CorreaScriptRegular;
  src: url('assets/fonts/CorreaScriptRegular.otf');
}
@font-face {
  font-family: GTWalsheimProRegular;
  src: url('assets/fonts/GTWalsheimProRegular.ttf');
}

.v-application {
  background: transparent;

  &.theme--light {
    background: transparent !important;

    .v-card {
      background-color: #f3eaeb;
    }
  }
}
body {
  background: url('assets/bg-main-flowers.jpg') no-repeat;
  background-size: contain;
  background-attachment: fixed;

  @media only screen and (max-width: 600px) {
    background: #fff;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 159px;
      background: url('assets/bg-main-mobile-top.jpg') no-repeat center;
    }

    &:after {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 183px;
      background: url('assets/bg-main-mobile-bottom.jpg') no-repeat;
      z-index: -1;
    }
  }
}
#app {
  font-family: 'Amalfi';
  text-align: center;
  color: #2B2A29;
}

.page-love-story {
  @media only screen and (max-width: 600px) {
    background-size: cover;
    background-attachment: scroll;
  }
}

h1 {
  font-family: 'Amalfi';
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
      width: 200px;
      height: 200px;
    }

    @media only screen and (max-width: 1100px) {
      width: 150px;
      height: 150px;
    }

    @media only screen and (max-width: 600px) {
      width: 100px;
      height: 100px;
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
  font-family: 'Amalfi';
  font-weight: 500;
  padding: 20px;
  font-size: 45px;
  line-height: 1;
  text-align: left;
  position: relative;

  &.desktop {
    border-radius: 10px;
    background: #fff;
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

  @media only screen and (max-width: 600px) {
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
  font-family: 'AmalfiCoast';
  font-size: 40px;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    font-size: 28px;
  }

  &.lovestory {
    @media only screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
}

.wedding-names {
  font-family: 'Amalfi';
  font-size: 120px;
  margin-bottom: 50px;
  line-height: 2;
  letter-spacing: 2px;

  @media only screen and (max-width: 1400px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 75px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 48px;
  }

   @media only screen and (max-width: 320px) {
    font-size: 36px;
  }
}

.v-dialog__container {
  display: unset; 
}

.v-card__title {
  color: #3F5441;
  font-weight: 500;
  font-family: 'Amalfi';
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

</style>

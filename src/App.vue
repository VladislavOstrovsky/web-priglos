<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: Amalfi;
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
  font-family: 'Book Antiqua';
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
  font-family: 'ModernSans';
  margin-bottom: 50px;
}

.main-logo {
  align-self: center;
  position: relative;

  .v-image__image {
    background-position: center bottom !important;
  }

  &.lovestory {
    align-self: flex-start;
  }

  @media only screen and (max-width: 600px) {
    align-self: flex-end;
  }

  .my {
    position: relative;
    margin: 0 auto;
    width: 225px;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      width: 130px;
    }

    &.lovestory {
      margin: 0 0 0 auto;

      @media only screen and (max-width: 600px) {
        margin: 0 auto;
      }
    }

    &:hover {
      -webkit-animation: swing 1s;
      animation: swing 1s;
    }
  }
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
    width: 200px;
    height: 200px;

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
  font-family: 'GTWalsheimProRegular';
  font-weight: 500;
  padding: 15px;
  text-align: left;

  &.desktop {
    border-radius: 10px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }

  &.dialog {
    display: block;
  }

  &__icon {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 22px;

    i {
      cursor: pointer;
      margin-left: 7px;
    }

    i:hover {
      color: #3F5441;
    }
  }
}

.wedding-title {
  font-family: 'CorreaScriptRegular';
  font-size: 50px;

  &.lovestory {
    @media only screen and (max-width: 600px) {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
}

.wedding-names {
  font-family: 'Amalfi';
  font-size: 36px;
  margin-bottom: 50px;
  line-height: 2;

  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }

   @media only screen and (max-width: 320px) {
    font-size: 28px;
  }
}

.wedding-links {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &.right {
    justify-content: flex-end;
  }

  .link {
    margin-left: 25px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 100px;
      font-size: 13px;
      margin-left: 10px;
    }

    @media only screen and (max-width: 320px) {
      font-size: 12px;
      margin-bottom: 150px;
      margin-left: 8px;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    color: #3F5441 !important;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .router-link-exact-active {
    text-decoration: underline;
  }
}

.theme--light.v-footer {
  background-color: #fff !important;
}

.main-footer {
  justify-content: center;
}

.v-dialog__container {
    display: unset; 
}

.v-card__title {
  @media only screen and (max-width: 600px) {
    font-size: 0.85rem !important;
    line-height: 1.5rem !important;
    word-break: break-word !important;
  }
}

.v-card__text {
  text-align: left;
}

</style>

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VuePictureSwipe from 'vue-picture-swipe';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Title from './components/Title';

Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.component('web-footer', Footer);
Vue.component('logo', Logo);
Vue.component('header-title', Title);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

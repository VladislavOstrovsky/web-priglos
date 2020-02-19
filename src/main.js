import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VuePictureSwipe from 'vue-picture-swipe';

Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

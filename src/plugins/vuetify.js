import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'
import Animate from 'animate.css/animate.min.css';

Vue.use(Vuetify);
Vue.use(Animate);

export default new Vuetify({
  icons: {
    iconfont: ['md', 'fa'],
  },
});

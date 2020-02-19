import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoveStory from '../components/LoveStory'
import Photos from '../components/Photos'
import WhenWhereHow from '../components/WhenWhereHow'
import Gifts from '../components/Gifts'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/lovestory',
    name: 'lovestory',
    component: LoveStory,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/location',
    name: 'when-where-how',
    component: WhenWhereHow,
    props: (route) => ({ query: route.query.q })
  },
  {
    path: '/gifts',
    name: 'gifts',
    component: Gifts,
    props: (route) => ({ query: route.query.q })
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes
})

export default router
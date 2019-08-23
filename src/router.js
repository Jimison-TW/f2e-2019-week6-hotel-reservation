import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Room from './views/RoomPage.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/room-reservation',
      name: 'room-reservation',
      component: Room
    }
  ]
})

export default router;

//main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VCalendar, { datePickerTintColor: '#F00', datePickerShowDayPopover: false })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

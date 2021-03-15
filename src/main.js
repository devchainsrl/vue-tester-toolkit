import Vue from 'vue'

// vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)


import App from './App.vue'
import axios from 'axios';



Vue.config.productionTip = false


new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')

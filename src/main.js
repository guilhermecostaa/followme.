import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
  },

})
Vue.use(VueSweetalert2);
Vue.use (BootstrapVue)
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

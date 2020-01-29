import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

import firebase from 'firebase';
import { firebaseConfig } from './firebase.config.js';


firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  Vuetify,
  router,
  icons: {
    iconfont: 'md',
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcQGUK4bpa1EVMX2oPeDQf1x67Fsmjr6s",
  authDomain: "vue-prueba-3d300.firebaseapp.com",
  projectId: "vue-prueba-3d300",
  storageBucket: "vue-prueba-3d300.appspot.com",
  messagingSenderId: "49905468615",
  appId: "1:49905468615:web:0dc8849cf88be656e8aae2"
};

const app = initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

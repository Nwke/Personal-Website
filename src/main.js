// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/';
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from "firebase";


Vue.use(Vuetify);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA1Q-6MCD7UkfZk3NW5Q7pkhs5N5IPskdY",
  authDomain: "personaldiary-ebad8.firebaseapp.com",
  databaseURL: "https://personaldiary-ebad8.firebaseio.com",
  projectId: "personaldiary-ebad8",
  storageBucket: "",
  messagingSenderId: "481246175672"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

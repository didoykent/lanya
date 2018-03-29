
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');



import Vue from 'vue'

import App from './App.vue'
import Vuetify from 'vuetify'

import VueSocketio from 'vue-socket.io'



import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
Vue.use(VueSocketio, 'http://localhost:8890');

const app = new Vue({


  el: '#app',
  template: '<app></app>',
  components: {App}
});

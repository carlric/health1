import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
//import BootstrapVue from '../node_modules/bootstrap-vue';
//import '../../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history" //no hash tag stile URL
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});

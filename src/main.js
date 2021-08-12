import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DatetimePicker from "vuetify-datetime-picker";
// import 'vuetify-datetime-picker/src/stylus/main.styl'

Vue.config.productionTip = false;
Vue.use(DatetimePicker);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

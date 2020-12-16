import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/style/main.css";
import "./assets/library/bootstrap/bootstrap.min.css";
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

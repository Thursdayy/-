import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'



Vue.use(MintUI);
Vue.config.productionTip = false;

Vue.use(preview);
// Vue.use(VueTouch, {name:'v-touch'})
// VueTouch.config.swipe = {
//   threshold:100
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

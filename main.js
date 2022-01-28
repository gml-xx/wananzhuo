
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from 'store/index.js'

// main.js
import uView from '@/uni_modules/uview-ui';
Vue.use(uView);
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
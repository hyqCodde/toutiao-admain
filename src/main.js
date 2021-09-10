import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/index.scss'

Vue.config.productionTip = false

// 加载element-ui
import '@/utils/element.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

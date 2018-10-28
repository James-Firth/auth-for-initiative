import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import Sortable from 'sortablejs'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Custom drag-n-drop sortable implementation from vuesortable github issues
Vue.directive('sortable', {
  inserted: function (el, binding) {
    return new Sortable(el, binding.value || {})
  }
})

// Using Font awesome
Vue.use(Buefy, {
  defaultIconPack: 'fas'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './hook'
import appInterface from './appInterface'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

export default appInterface

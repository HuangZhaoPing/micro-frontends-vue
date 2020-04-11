import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/' },
    { path: '/404', component: () => import('@/views/404') }
  ]
})

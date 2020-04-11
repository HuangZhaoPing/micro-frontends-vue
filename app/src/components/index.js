import Vue from 'vue'
import GlobalCom from './GlobalCom'

Vue.component(GlobalCom.name, GlobalCom)

export default {
  NormalCom: () => import('./NormalCom')
}
